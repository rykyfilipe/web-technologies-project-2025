const fs = require("fs").promises;
const path = require("path");
const mysql = require("mysql2/promise");

const dbConfig = {
	host: "",
	user: "",
	password: "",
	database: "wt_project",
	ssl: {
		rejectUnauthorized: false,
	},
};

async function getOrCreateActor(conn, name) {
	if (!name) return null;

	const [rows] = await conn.execute("SELECT id FROM actors WHERE name = ?", [
		name,
	]);
	if (rows.length > 0) return rows[0].id;

	const [result] = await conn.execute("INSERT INTO actors (name) VALUES (?)", [
		name,
	]);
	return result.insertId;
}

async function getOrCreateMovie(conn, title) {
	if (!title) return null;

	const [rows] = await conn.execute("SELECT id FROM movies WHERE title = ?", [
		title,
	]);
	if (rows.length > 0) return rows[0].id;

	const [result] = await conn.execute("INSERT INTO movies (title) VALUES (?)", [
		title,
	]);
	return result.insertId;
}
function extractYear(text) {
	const match = text.match(/\d{4}/);
	return match ? parseInt(match[0], 10) : null;
}
async function importNominations() {
	const filePath = path.join(__dirname, "data.csv");

	const connection = await mysql.createConnection(dbConfig);

	try {
		const data = await fs.readFile(filePath, "utf8");
		const lines = data.trim().split("\n").slice(2474);

		for (let i = 1; i < lines.length; i++) {
			const line = lines[i];
			const parts = line.split(",");

			const year = extractYear(parts[0].trim());
			const category = parts[1]?.trim() || null;
			const full_name = parts[2]?.trim() || null;
			const show = parts[3]?.trim() || null;
			const wonRaw = parts[4]?.trim().toLowerCase() || "false";
			const won = wonRaw === "true" || wonRaw === "1" ? 1 : 0;

			const actor_id = await getOrCreateActor(connection, full_name);
			const movie_id = await getOrCreateMovie(connection, show);

			await connection.execute(
				`INSERT INTO nominations (actor_id, movie_id, year, category, won)
         VALUES (?, ?, ?, ?, ?)`,
				[actor_id, movie_id, year, category, won]
			);

			console.log(
				`Importat nominalizare: actor_id=${actor_id}, movie_id=${movie_id}, year=${year}, won=${won}`
			);
		}

		console.log("Import finalizat cu succes!");
	} catch (err) {
		console.error("Eroare la import:", err);
	} finally {
		await connection.end();
	}
}

importNominations();
