/** @format */

const fs = require("fs").promises;
const path = require("path");

async function interpretData() {
	const filePath = path.join(__dirname, "..", "data", "data.csv");
	try {
		const data = await fs.readFile(filePath, "utf8");
		const lines = data.trim().split("\n");
		const headers = lines[0].split(",");

		const results = lines.slice(1).map((line) => {
			const values = line.split(",");
			const obj = {};
			headers.forEach((header, index) => {
				obj[header.trim()] = values[index]?.trim() || null;
			});
			if (obj["won"] === "True") obj["won"] = true;
			else if (obj["won"] === "False") obj["won"] = false;

			return obj;
		});

		return results;
	} catch (err) {
		console.error("Eroare la citirea sau parsarea fișierului:", err);
		return null;
	}
}

module.exports = {
	interpretData,
};
