/** @format */

const fs = require("fs").promises;
const path = require("path");

async function interpretData(req, res, connection, an) {
	let body = "";

	req.on("data", (chunk) => {
		body += chunk.toString();
	});

	req.on("end", () => {
		try {
			const data = JSON.parse(body);
		} catch (error) {}

		connection.query(
			"SELECT * FROM nominations WHERE year = ?",
			[an],
			(err, result) => {
				if (err) {
					console.error(err);
					res.writeHead(500);
					res.end(JSON.stringify({ message: "Server error" }));
					return;
				}

				if (result.length === 0) {
					res.writeHead(404);
					res.end(
						JSON.stringify({ message: "No nominations found for this year" })
					);
				} else {
					res.writeHead(200, { "Content-Type": "application/json" });
					res.end(JSON.stringify(result));
				}
			}
		);
	});
}

module.exports = {
	interpretData,
};
