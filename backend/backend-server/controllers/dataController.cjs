async function interpretData(req, res, connection, an) {
	return new Promise((resolve, reject) => {
		connection.query(
			"SELECT * FROM nominations WHERE year >= ?",
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
async function getMovies(connection, page) {
	return new Promise((resolve, reject) => {
		const limit = 20;
		const offset = (page - 1) * limit;
		if(!page){
			connection.query(
				`SELECT * FROM movies LIMIT ${limit} OFFSET ${offset} `,
				(err, result) => {
					if (err) {
						console.error(err);
						reject(err);
						return;
					}
	
					if (result.length === 0) {
						resolve(null);
						return;
					}
	
					resolve(result);
				}
		}
		else{
		connection.query(
			`SELECT * FROM movies LIMIT ${limit} OFFSET ${offset} `,
			(err, result) => {
				if (err) {
					console.error(err);
					reject(err);
					return;
				}

				if (result.length === 0) {
					resolve(null);
					return;
				}

				resolve(result);
			}
		);
	}
	});
}

async function getActors(connection, page) {
	return new Promise((resolve, reject) => {
		const limit = 20;
		const offset = (page - 1) * limit;
		connection.query(
			`SELECT * FROM actors LIMIT ${limit} OFFSET ${offset}`,
			(err, result) => {
				if (err) {
					console.error(err);
					reject(err);
					return;
				}
				if (result.length === 0) {
					resolve(null);
					return;
				}
				resolve(result);
			}
		);
	});
}

async function addActor(req, res, connection) {
	let body = "";
	let data = "";
	req.on("data", (chunk) => {
		body += chunk;
	});
	req.on("end", () => {
		try {
			data = JSON.parse(body);
		} catch (error) {
			res.writeHead(400);
			res.end(JSON.stringify({ message: "Body is not JSON valid" }));
			return;
		}

		if (!data.name) {
			res.writeHead(400);
			res.end(JSON.stringify({ message: "Invalid format" }));

			return 0;
		}

		connection.query(
			"INSERT INTO actors (name) VALUES (?)",
			[data.name],
			(err, result) => {
				if (err) {
					throw err;
				}

				res.writeHead(201);
				res.end(
					JSON.stringify({ message: `Succefully added actor: ${data.name}` })
				);
			}
		);
	});
}

function removeActor(req, res, connection, actorId) {
	console.log(actorId);
	if (!actorId) {
		res.writeHead(400);
		res.end(JSON.stringify({ message: "Invalid request" }));
		return;
	}

	connection.query(
		"SELECT * FROM actors WHERE id = ?",
		[actorId],
		(err, result) => {
			if (err) {
				res.writeHead(500);
				res.end(JSON.stringify({ message: "Database error" }));
				return;
			}

			if (result.length === 0) {
				res.writeHead(404);
				res.end(JSON.stringify({ message: "Actor not found" }));
				return;
			}

			connection.query(
				"DELETE FROM actors WHERE id = ?",
				[actorId],
				(err, deleteResult) => {
					if (err) {
						res.writeHead(500);
						res.end(JSON.stringify({ message: "Delete error" }));
						return;
					}

					res.writeHead(200);
					res.end(
						JSON.stringify({ message: `Actor with id ${actorId} deleted.` })
					);
				}
			);
		}
	);
}

function removeMovie(req, res, connection, movieId) {
	console.log(movieId);
	if (!movieId) {
		res.writeHead(400);
		res.end(JSON.stringify({ message: "Invalid request" }));
		return;
	}

	connection.query(
		"SELECT * FROM movies WHERE id = ?",
		[movieId],
		(err, result) => {
			if (err) {
				res.writeHead(500);
				res.end(JSON.stringify({ message: "Database error" }));
				return;
			}

			if (result.length === 0) {
				res.writeHead(404);
				res.end(JSON.stringify({ message: "Movie not found" }));
				return;
			}

			connection.query(
				"DELETE FROM movies WHERE id = ?",
				[movieId],
				(err, deleteResult) => {
					if (err) {
						res.writeHead(500);
						res.end(JSON.stringify({ message: "Delete error" }));
						return;
					}

					res.writeHead(200);
					res.end(
						JSON.stringify({ message: `Movie with id ${movieId} deleted.` })
					);
				}
			);
		}
	);
}

async function addMovie(req, res, connection) {
	let body = "";
	let data = "";
	req.on("data", (chunk) => {
		body += chunk;
	});
	req.on("end", () => {
		try {
			data = JSON.parse(body);
		} catch (error) {
			res.writeHead(400);
			res.end(JSON.stringify({ message: "Body is not JSON valid" }));
			return;
		}

		if (!data.title) {
			res.writeHead(400);
			res.end(JSON.stringify({ message: "Invalid format" }));

			return 0;
		}

		connection.query(
			"INSERT INTO movies (title) VALUES (?)",
			[data.title],
			(err, result) => {
				if (err) {
					throw err;
				}

				res.writeHead(201);
				res.end(
					JSON.stringify({ message: `Succefully added movie: ${data.title}` })
				);
			}
		);
	});
}

async function getUsers(connection, page) {
	return new Promise((resolve, reject) => {
		const limit = 20;
		const offset = (page - 1) * limit;
		connection.query(
			`SELECT * FROM user LIMIT ${limit} OFFSET ${offset}`,
			(err, result) => {
				if (err) {
					console.error(err);
					reject(err);
					return;
				}
				if (result.length === 0) {
					resolve(null);
					return;
				}
				resolve(result);
			}
		);
	});
}

async function addUser(req, res, connection) {
	let body = "";
	let data = "";
	req.on("data", (chunk) => {
		body += chunk;
	});
	req.on("end", () => {
		try {
			data = JSON.parse(body);
		} catch (error) {
			res.writeHead(400);
			res.end(JSON.stringify({ message: "Body is not JSON valid" }));
			return;
		}

		if (!data.username || !data.password | !data.role) {
			res.writeHead(400);
			res.end(JSON.stringify({ message: "Invalid format" }));

			return 0;
		}

		connection.query(
			"INSERT INTO user (username,password,role) VALUES (?,?,?)",
			[data.username, data.password, data.role],
			(err, result) => {
				if (err) {
					throw err;
				}

				res.writeHead(201);
				res.end(
					JSON.stringify({ message: `Succefully added actor: ${data.name}` })
				);
			}
		);
	});
}

function removeUser(req, res, connection, userId) {
	console.log(userId);
	if (!userId) {
		res.writeHead(400);
		res.end(JSON.stringify({ message: "Invalid request" }));
		return;
	}

	connection.query(
		"SELECT * FROM user WHERE id = ?",
		[userId],
		(err, result) => {
			if (err) {
				res.writeHead(500);
				res.end(JSON.stringify({ message: "Database error" }));
				return;
			}

			if (result.length === 0) {
				res.writeHead(404);
				res.end(JSON.stringify({ message: "Actor not found" }));
				return;
			}

			connection.query(
				"DELETE FROM user WHERE id = ?",
				[userId],
				(err, deleteResult) => {
					if (err) {
						res.writeHead(500);
						res.end(JSON.stringify({ message: "Delete error" }));
						return;
					}

					res.writeHead(200);
					res.end(
						JSON.stringify({ message: `Actor with id ${actorId} deleted.` })
					);
				}
			);
		}
	);
}

async function getNomin(connection, id) {
	return new Promise((resolve, reject) => {
		const sql = `
			SELECT 
				nominations.id AS nomination_id,
				nominations.year,
				nominations.category,
				nominations.won,
				
				movies.id AS movie_id,
				movies.title,
				movies.tmdb_id AS movie_tmdb_id,
				
				actors.id AS actor_id,
				actors.name AS actor_name,
				actors.tmdb_id AS actor_tmdb_id
				
			FROM nominations
			LEFT JOIN movies ON nominations.movie_id = movies.id
			LEFT JOIN actors ON nominations.actor_id = actors.id
			WHERE nominations.id = ?
		`;

		connection.query(sql, [id], (err, result) => {
			if (err) {
				console.error(err);
				reject(err);
				return;
			}

			if (result.length === 0) {
				resolve(null);
				return;
			}

			resolve(result[0]);
		});
	});
}

module.exports = {
	interpretData,
	getNomin,
	getMovies,
	getActors,
	addActor,
	removeActor,
	getUsers,
	addUser,
	removeUser,
	removeMovie,
	addMovie,
};
