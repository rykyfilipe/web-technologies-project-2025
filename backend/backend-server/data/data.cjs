const fs = require("fs").promises;
const path = require("path");

async function uniqueActors() {
	const filePath = path.join(__dirname, "./data.csv");

	try {
		const data = await fs.readFile(filePath, "utf8");
		const results = getUniqueActors(data);
		return results;
	} catch (err) {
		console.error("Eroare la citirea sau parsarea fișierului:", err);
		return null;
	}
}

function getUniqueActors(csv) {
	const lines = csv.trim().split("\n");
	const actorSet = new Set();

	for (const line of lines) {
		const parts = line.split(",");
		const actor = parts[2]?.trim();
		if (actor) {
			if (actor !== "full_name") actorSet.add(actor);
		}
	}

	return Array.from(actorSet);
}

module.exports = { uniqueActors };
