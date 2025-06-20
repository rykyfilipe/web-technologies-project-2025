/** @format */

const mysql = require("mysql2");
DATABASE_URL =
	'mysql://qcmr9z02abirj67d9ttz:pscale_pw_SwWwc7j9LGuEOsRNyw4YBamwI66loTBv5eJHY25NEq9@aws.connect.psdb.cloud/wt_project?ssl={"rejectUnauthorized":true}';

function createConnectionToDatabase() {
	// const connection = mysql.createConnection({
	// 	host: process.env.HOST,
	// 	user: process.env.USER,
	// 	password: process.env.PASSWORD,
	// 	database: "wt_project",
	// 	ssl: {
	// 		rejectUnauthorized: false,
	// 	},
	// });
	const connection = mysql.createConnection({ uri: DATABASE_URL });
	return connection;
}

function connectToDataBase(connection) {
	connection.connect((err) => {
		if (err) throw err;
		console.log("Conected to the database.");
	});
}

module.exports = { connectToDataBase, createConnectionToDatabase };
