/** @format */

const http = require("http");
const urlModule = require("url");
const https = require("https");
const port = process.env.API_PORT || 3001;
const mysql = require("./models/init_models.cjs");
const auth = require("./controllers/authController.cjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const {
	interpretData,
	getMovies,
	getActors,
	addActor,
	removeActor,
	addUser,
	getUsers,
	removeUser,
	removeMovie,
	getNomin,
	addMovie,
} = require("./controllers/dataController.cjs");
const { uniqueActors } = require("./data/data.cjs");

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY || "super_secret_key";
const connection = mysql.createConnectionToDatabase();
const NEWSAPI_KEY = "77874b8dcba14e28be6f852835919719";
mysql.connectToDataBase(connection);

// Funcție de sanitizare împotriva XSS
function sanitizeInput(input) {
	if (typeof input !== "string") return input;

	return input
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#x27;")
		.replace(/\//g, "&#x2F;")
		.replace(/`/g, "&#96;")
		.replace(/=/g, "&#61;");
}

// Funcție pentru sanitizarea obiectelor
function sanitizeObject(obj) {
	if (obj === null || obj === undefined) return obj;

	if (typeof obj === "string") {
		return sanitizeInput(obj);
	}

	if (Array.isArray(obj)) {
		return obj.map((item) => sanitizeObject(item));
	}

	if (typeof obj === "object") {
		const sanitized = {};
		for (const key in obj) {
			if (obj.hasOwnProperty(key)) {
				sanitized[key] = sanitizeObject(obj[key]);
			}
		}
		return sanitized;
	}

	return obj;
}

const server = http.createServer(async (req, res) => {
	const { method, url } = req;
	const parsedUrl = urlModule.parse(req.url, true);
	const pathname = parsedUrl.pathname.replace(/\/+$/, "");

	// CORS se setează IMEDIAT
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, DELETE");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

	const matchActor = pathname.match(/^\/actors\/(\d+)$/);
	const matchMovie = pathname.match(/^\/movies\/(\d+)$/); //pt /movies/id
	const matchUser = pathname.match(/^\/users\/(\d+)$/);

	if (method === "GET" && pathname === "/get-data") {
		// acum merge și cu /get-data și cu /get-data/
	}

	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, DELETE");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

	if (method === "OPTIONS") {
		res.writeHead(204, {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET, POST, OPTIONS, DELETE",
			"Access-Control-Allow-Headers": "Content-Type, Authorization",
		});
		res.end();
		return;
	}

	res.setHeader("Content-Type", "application/json");

	if (url !== "/login" && url !== "/register-user") {
		const authHeader = req.headers["authorization"];

		if (!authHeader || !authHeader.startsWith("Bearer ")) {
			res.writeHead(401);
			res.end(JSON.stringify({ error: "Token lipsă sau invalid" }));
			return;
		}

		const token = authHeader.split(" ")[1];

		try {
			const decoded = jwt.verify(token, SECRET_KEY);
		} catch (err) {
			res.writeHead(403);
			res.end(JSON.stringify({ error: "Token invalid sau expirat" }));
			return;
		}
	}

	if (method === "GET" && url === "/hello") {
		const authHeader = req.headers["authorization"];

		if (!authHeader || !authHeader.startsWith("Bearer ")) {
			res.writeHead(401);
			res.end("Token lipsă sau invalid");
			return;
		}

		const token = authHeader.split(" ")[1];

		try {
			const decoded = jwt.verify(token, SECRET_KEY);
			res.writeHead(200, { "Content-Type": "application/json" });
			res.end(JSON.stringify({ mesaj: "Acces permis", user: decoded }));
		} catch (err) {
			res.writeHead(403);
			res.end("Token invalid sau expirat");
		}
	} else if (method === "GET" && pathname === "/nominies") {
		// Sanitizare parametru page
		const page = sanitizeInput(parsedUrl.query.page);

		try {
			const data = await getNomin(connection, page);

			if (!data || data.length === 0) {
				res.writeHead(404, { "Content-Type": "application/json" });
				res.end(JSON.stringify({ message: "Niciun film găsit" }));
				return;
			}

			// Sanitizare date înainte de trimitere
			const sanitizedData = sanitizeObject(data);
			res.writeHead(200, { "Content-Type": "application/json" });
			res.end(JSON.stringify(sanitizedData));
		} catch (error) {
			console.error("Eroare în server:", error);
			if (!res.headersSent) {
				res.writeHead(500, { "Content-Type": "application/json" });
				res.end(JSON.stringify({ message: "Eroare internă server" }));
			}
		}
	} else if (method === "POST" && url === "/login") {
		auth.resolve_login(req, res, connection);
	} else if (method === "POST" && url === "/register-user") {
		auth.resolve_register_user(req, res, connection);
	} else if (method === "GET" && pathname === "/movies") {
		// Sanitizare parametru page
		const page = sanitizeInput(parsedUrl.query.page);

		try {
			const data = await getMovies(connection, page);

			if (!data || data.length === 0) {
				res.writeHead(404, { "Content-Type": "application/json" });
				res.end(JSON.stringify({ message: "Niciun film găsit" }));
				return;
			}

			// Sanitizare date înainte de trimitere
			const sanitizedData = sanitizeObject(data);
			res.writeHead(200, { "Content-Type": "application/json" });
			res.end(JSON.stringify(sanitizedData));
		} catch (error) {
			console.error("Eroare în server:", error);
			if (!res.headersSent) {
				res.writeHead(500, { "Content-Type": "application/json" });
				res.end(JSON.stringify({ message: "Eroare internă server" }));
			}
		}
	} else if (method === "GET" && pathname === "/get-data") {
		// Sanitizare parametru an
		let an = Number(sanitizeInput(parsedUrl.query.an));
		if (!an) {
			an = 0;
		} else if (an < 1950) {
			res.writeHead(400, { "Content-Type": "application/json" });
			res.end(JSON.stringify({ message: "Anul pe care l-ai dat nu e bun." }));
			return;
		}

		try {
			const data = await interpretData(req, res, connection, an);

			if (!data || data.length === 0) {
				res.writeHead(404, { "Content-Type": "application/json" });
				res.end(JSON.stringify({ message: "Nicio nominalizare găsită" }));
				return;
			}

			// Sanitizare date înainte de trimitere
			const sanitizedData = sanitizeObject(data);
			res.writeHead(200, { "Content-Type": "application/json" });
			res.end(JSON.stringify(sanitizedData));
		} catch (error) {
			console.error("Eroare în server:", error);
			if (!res.headersSent) {
				res.writeHead(500, { "Content-Type": "application/json" });
				res.end(JSON.stringify({ message: "Eroare internă server" }));
			}
		}
	} else if (method === "GET" && url === "/unique-actors") {
		try {
			const data = await uniqueActors();

			if (data === null) {
				res.writeHead(500, { "Content-Type": "application/json" });
				res.end(JSON.stringify({ message: "Eroare la procesarea datelor" }));
				return;
			}

			// Sanitizare date înainte de trimitere
			const sanitizedData = sanitizeObject(data);
			res.writeHead(200, { "Content-Type": "application/json" });
			res.end(JSON.stringify(sanitizedData));
		} catch (error) {
			console.error("Eroare în server:", error);
			if (!res.headersSent) {
				res.writeHead(500, { "Content-Type": "application/json" });
				res.end(JSON.stringify({ message: "Eroare internă server" }));
			}
		}
	} else if (parsedUrl.pathname === "/news" && req.method === "GET") {
		// Sanitizare parametru query pentru news
		const actorQuery = sanitizeInput(parsedUrl.query.query);
		if (!actorQuery) {
			res.writeHead(400);
			res.end(JSON.stringify({ error: "Query parameter missing" }));
			return;
		}

		const options = {
			hostname: "newsapi.org",
			path: `/v2/everything?q=${encodeURIComponent(
				actorQuery
			)}&apiKey=${NEWSAPI_KEY}`,
			method: "GET",
			headers: {
				"User-Agent": "web-tech-project/1.0 (Eduard O.)",
			},
		};

		https
			.get(options, (apiRes) => {
				let data = "";
				apiRes.on("data", (chunk) => (data += chunk));
				apiRes.on("end", () => {
					try {
						// Sanitizare date de la API înainte de trimitere
						const parsedData = JSON.parse(data);
						const sanitizedData = sanitizeObject(parsedData);
						res.writeHead(200, { "Content-Type": "application/json" });
						res.end(JSON.stringify(sanitizedData));
					} catch (parseError) {
						console.error(
							"Eroare la parsarea datelor din NewsAPI:",
							parseError
						);
						res.writeHead(500);
						res.end(JSON.stringify({ error: "Eroare la procesarea datelor" }));
					}
				});
			})
			.on("error", (err) => {
				console.error(err);
				res.writeHead(500);
				res.end(JSON.stringify({ error: "Eroare la apelarea NewsAPI" }));
			});
	} else if (method === "GET" && pathname === "/actors") {
		// Sanitizare parametru page
		const page = sanitizeInput(parsedUrl.query.page);
		try {
			const data = await getActors(connection, page);

			if (!data || data.length === 0) {
				res.writeHead(404, { "Content-Type": "application/json" });
				res.end(JSON.stringify({ message: "Niciun actor găsit" }));
				return;
			}

			// Sanitizare date înainte de trimitere
			const sanitizedData = sanitizeObject(data);
			res.writeHead(200, { "Content-Type": "application/json" });
			res.end(JSON.stringify(sanitizedData));
		} catch (error) {
			console.error("Eroare în server:", error);
			if (!res.headersSent) {
				res.writeHead(500, { "Content-Type": "application/json" });
				res.end(JSON.stringify({ message: "Eroare internă server" }));
			}
		}
	} else if (method === "POST" && url === "/actors") {
		addActor(req, res, connection);
	} else if (method === "DELETE" && matchActor) {
		const actorId = parseInt(matchActor[1], 10);
		removeActor(req, res, connection, actorId);
	} else if (method === "GET" && pathname === "/users") {
		const page = sanitizeInput(parsedUrl.query.page);
		try {
			const data = await getUsers(connection, page);

			if (!data || data.length === 0) {
				res.writeHead(404, { "Content-Type": "application/json" });
				res.end(JSON.stringify({ message: "Niciun actor găsit" }));
				return;
			}

			// Sanitizare date înainte de trimitere
			const sanitizedData = sanitizeObject(data);
			res.writeHead(200, { "Content-Type": "application/json" });
			res.end(JSON.stringify(sanitizedData));
		} catch (error) {
			console.error("Eroare în server:", error);
			if (!res.headersSent) {
				res.writeHead(500, { "Content-Type": "application/json" });
				res.end(JSON.stringify({ message: "Eroare internă server" }));
			}
		}
	} else if (method === "POST" && url === "/users") {
		addUser(req, res, connection);
	} else if (method === "DELETE" && matchActor) {
		const userId = parseInt(matchUser[1], 10);
		removeUser(req, res, connection, userId);
	} else if (method === "DELETE" && matchMovie) {
		const movieId = parseInt(matchMovie[1], 10);
		removeMovie(req, res, connection, movieId);
	} else if (method === "POST" && url === "/movies") {
		addMovie(req, res, connection);
	} else {
		res.writeHead(404);
		res.end(JSON.stringify({ message: "Not found" }));
	}
});

server.listen(port, (error) => {
	if (error) {
		console.log(error);
	}
	console.log("The server lisens at port: " + port);
});
