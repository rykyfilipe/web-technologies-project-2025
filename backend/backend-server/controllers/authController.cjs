const conn = require('../app.cjs');
const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.SECRET_KEY || 'super_secret_key';

function resolve_login(req, res, db) {
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
    }

    if (!data.username || !data.password) {
      res.writeHead(400);
      res.end(
        JSON.stringify({
          message: 'The username and password are required',
        })
      );
      return 0;
    }

    db.query(
      'SELECT * from user where username=?',
      [data.username],
      (err, result) => {
        if (err) throw err;
        console.log(result);

        if (result.length === 0) {
          res.writeHead(404);
          res.end(JSON.stringify({ message: 'User not found' }));
        } else {
          if (result[0].password != data.password) {
            res.writeHead(403);
            res.end(JSON.stringify({ message: 'Password incorrect' }));
          } else {
            const token = jwt.sign({ username: data.username }, SECRET_KEY, {
              expiresIn: '1h',
            });
            //console.log(token);

            res.writeHead(200);
            res.end(
              JSON.stringify({
                username: result[0].username,
                token: token,
              })
            );
          }
        }
      }
    );
  });
}

function resolve_register_user(req, res, db) {
  let body = '';
  let data = '';

  req.on('data', (chunk) => {
    body += chunk;
  });
  req.on('end', () => {
    try {
      data = JSON.parse(body);
    } catch (error) {
      console.log(error);
      res.writeHead(400);
      res.end(JSON.stringify({ message: 'Body is not JOSN valid' }));
    }

    if (!data.username || !data.password) {
      res.writeHead(400);
      res.end(
        JSON.stringify({ message: 'Username and password are not optional' })
      );
    } else {
      db.query(
        'SELECT * FROM user where username = ?',
        [data.username],
        (err, result) => {
          if (err) throw err;
          if (result.length != 0) {
            res.writeHead(400);
            res.end(JSON.stringify({ message: 'User already exists' }));
          } else {
            db.query(
              'INSERT INTO user (username, password) VALUES (?,?)',
              [data.username, data.password],
              (err, result) => {
                if (err) throw err;
                const token = jwt.sign(
                  { username: data.username },
                  SECRET_KEY,
                  {
                    expiresIn: '1h',
                  }
                );
                //console.log(token);

                res.writeHead(201);
                res.end(
                  JSON.stringify({
                    'message': 'User succefully created',
                    token: token,
                  })
                );
              }
            );
          }
        }
      );
    }
  });
}

module.exports = { resolve_login, resolve_register_user };
