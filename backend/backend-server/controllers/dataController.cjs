async function interpretData(req, res, connection, an) {
	return new Promise((resolve, reject) => {
		let body = "";

		req.on("data", (chunk) => {
			body += chunk.toString();
		});

		req.on("end", () => {
			// Dacă nu folosești body pentru nimic, poți să ignori parsatul
			try {
				JSON.parse(body);
			} catch (error) {
				// Nu faci nimic, body probabil nu e relevant aici
			}

			connection.query(
				"SELECT * FROM nominations WHERE year = ?",
				[an],
				(err, result) => {
					if (err) {
						console.error(err);
						// Folosește reject ca să semnalezi eroarea
						return reject(err);
					}

					resolve(result); // returnezi rezultatul query-ului
				}
			);
		});

		req.on("error", (err) => {
			reject(err);
		});
	});
}
