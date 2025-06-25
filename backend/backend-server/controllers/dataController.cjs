async function interpretData(req, res, connection, an) {
	return new Promise((resolve, reject) => {
		connection.query(
			"SELECT * FROM nominations WHERE year = ?",
			[an],
			(err, result) => {
				if (err) {
					console.error(err);
					res.writeHead(500, { "Content-Type": "application/json" });
					res.end(JSON.stringify({ message: "Server error" }));
					return reject(err);
				}

				if (result.length === 0) {
					res.writeHead(404, { "Content-Type": "application/json" });
					res.end(
						JSON.stringify({ message: "No nominations found for this year" })
					);
					return resolve(null);
				}

				res.writeHead(200, { "Content-Type": "application/json" });
				res.end(JSON.stringify(result));
				resolve(result);
			}
		);
	});
}

module.exports = { interpretData };
