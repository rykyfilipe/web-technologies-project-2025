/** @format */

const mysql = require("mysql2");

function createConnectionToDatabase() {
	const connection = mysql.createConnection({
		host: process.env.HOST,
		user: process.env.USER,
		password: process.env.PASSWORD,
		database: "wt_project",
		ssl: {
			rejectUnauthorized: true,
		},
	});
	return connection;
}

function connectToDataBase(connection) {
	connection.connect((err) => {
		if (err) throw err;
		console.log("Conected to the database.");
	});
}

module.exports = { connectToDataBase, createConnectionToDatabase };
