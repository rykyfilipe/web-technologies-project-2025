/** @format */

const http = require("http");
const urlModule = require("url");
const https = require("https");
const port = process.env.API_PORT || 3001;
const mysql = require("./models/init_models.cjs");
const auth = require("./controllers/authController.cjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { interpretData } = require("./controllers/dataController.cjs");
const { uniqueActors } = require("./data/data.cjs");

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY || "super_secret_key";
const connection = mysql.createConnectionToDatabase();
const NEWSAPI_KEY = "77874b8dcba14e28be6f852835919719";
mysql.connectToDataBase(connection);

const server = http.createServer(async (req, res) => {
	const { method, url } = req;
	const parsedUrl = urlModule.parse(req.url, true);
	const pathname = parsedUrl.pathname.replace(/\/+$/, "");

	if (method === "GET" && pathname === "/get-data") {
		// acum merge și cu /get-data și cu /get-data/
	}

	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

	if (method === "OPTIONS") {
		res.writeHead(204, {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET, POST, OPTIONS",
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
	} else if (method === "POST" && url === "/login") {
		auth.resolve_login(req, res, connection);
	} else if (method === "POST" && url === "/register-user") {
		auth.resolve_register_user(req, res, connection);
	} else if (method === "GET" && pathname === "/get-data") {
		const an = Number(parsedUrl.query.an);
		if (!an) {
			an = 0;
		} else if (an < 1950) {
			res.writeHead(400, { "Content-Type": "application/json" });
			res.end(JSON.stringify({ message: "Anul pe care l ai dat nu e bun." }));
		}

		try {
			const data = await interpretData(req, res, connection, an);

			if (data === null) {
				res.writeHead(500, { "Content-Type": "application/json" });
				res.end(JSON.stringify({ message: "Eroare la procesarea datelor" }));
				return;
			}

			res.writeHead(200, { "Content-Type": "application/json" });
			res.end(JSON.stringify(data));
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

			res.writeHead(200, { "Content-Type": "application/json" });
			res.end(JSON.stringify(data));
		} catch (error) {
			console.error("Eroare în server:", error);
			if (!res.headersSent) {
				res.writeHead(500, { "Content-Type": "application/json" });
				res.end(JSON.stringify({ message: "Eroare internă server" }));
			}
		}
	} else if (parsedUrl.pathname === "/news" && req.method === "GET") {
		const actorQuery = parsedUrl.query.query;
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
					res.writeHead(200, { "Content-Type": "application/json" });
					res.end(data);
				});
			})
			.on("error", (err) => {
				console.error(err);
				res.writeHead(500);
				res.end(JSON.stringify({ error: "Eroare la apelarea NewsAPI" }));
			});
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
