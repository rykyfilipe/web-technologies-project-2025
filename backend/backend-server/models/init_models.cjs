/** @format */

const mysql = require("mysql2");
require('dotenv').config({ path: '../../.env' });


function createConnectionToDatabase() {

	console.log('HOST =', process.env.HOST);
  console.log('USER =', process.env.USER);
  console.log('PASSWORD =', process.env.PASSWORD);


	const connection = mysql.createConnection({
		host: process.env.HOST,
		user: process.env.USER,
		password: process.env.PASSWORD,
		database: "wt_project",
		ssl: {
			rejectUnauthorized: false,
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
