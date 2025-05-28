/** @format */

const http = require("http");
const port = process.env.API_PORT || 3001;
const mysql = require("./models/init_models.cjs");
const auth = require("./controllers/authController.cjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { interpretData } = require("./controllers/dataController.cjs");

dotenv.config({
	// path: "C://Users/bryky/OneDrive/Documente/Programing/Web Technologies/ACA-project/.env",
	path: "../../.env",
});

const SECRET_KEY = process.env.SECRET_KEY || "super_secret_key";
console.log("Secret key:", process.env.SECRET_KEY);
const connection = mysql.createConnectionToDatabase();
mysql.connectToDataBase(connection);

const server = http.createServer(async (req, res) => {
	const { method, url } = req;

	res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
	res.setHeader("Access-Control-Allow-Credentials", "true");

	if (method === "OPTIONS") {
		res.writeHead(204);
		res.end();
		return;
	}

	res.setHeader("Content-Type", "application/json");

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
	} else if (method === "GET" && url === "/get-data") {
		try {
			const data = await interpretData();

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
