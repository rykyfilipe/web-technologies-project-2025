async function interpretData(req, res, connection, an) {
  return new Promise((resolve, reject) => {
    connection.query(
      'SELECT * FROM nominations WHERE year >= ?',
      [an],
      (err, result) => {
        if (err) {
          console.error(err);
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ message: 'Server error' }));
          return reject(err);
        }

        if (result.length === 0) {
          res.writeHead(404, { 'Content-Type': 'application/json' });
          res.end(
            JSON.stringify({ message: 'No nominations found for this year' })
          );
          return resolve(null);
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
        resolve(result);
      }
    );
  });
}
async function getMovies(connection) {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM movies', (err, result) => {
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
    });
  });
}

async function getActors(connection, page) {
  return new Promise((resolve, reject) => {
    const limit = 20;
    const offset = (page - 1) * limit;
    connection.query(`SELECT * FROM actors LIMIT ${limit} OFFSET ${offset}`, (err, result) => {
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
    });
  });
}

async function addActor(req, res, connection) {
  let body = '';
  let data = '';
  req.on('data', (chunk) => {
    body += chunk;
  });
  req.on('end', () => {
    try {
      data = JSON.parse(body);
    } catch (error) {
      res.writeHead(400);
      res.end(JSON.stringify({ message: 'Body is not JSON valid' }));
      return;

    }

    if (!data.name) {
      res.writeHead(400);
      res.end(JSON.stringify({ message: 'Invalid format' }));

      return 0;
    }

    connection.query(
      'INSERT INTO actors (name) VALUES (?)',
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
		console.log('asdflasdfasdfasdf');
    res.writeHead(400);
	  res.end(JSON.stringify({ message: 'Invalid request' }));
	  return;
  }

  connection.query(
    'SELECT * FROM actors WHERE id = ?',
    [actorId],
    (err, result) => {
      if (err) {
        res.writeHead(500);
        res.end(JSON.stringify({ message: 'Database error' }));
        return;
      }

      if (result.length === 0) {
        res.writeHead(404);
        res.end(JSON.stringify({ message: 'Actor not found' }));
        return;
      }

      connection.query(
        'DELETE FROM actors WHERE id = ?',
        [actorId],
        (err, deleteResult) => {
          if (err) {
            res.writeHead(500);
            res.end(JSON.stringify({ message: 'Delete error' }));
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



module.exports = { interpretData, getMovies, getActors, addActor, removeActor };
