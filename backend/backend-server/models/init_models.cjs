/** @format */

const mysql = require("mysql2");

function createConnectionToDatabase() {
	const connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'Eduard12ios@',
		database: 'wt_project',
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
