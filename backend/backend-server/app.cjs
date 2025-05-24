const http = require('http');
const port = process.env.API_PORT || 3001;
const mysql = require('./models/init_models.cjs');
const auth = require('./controllers/authController.cjs');
const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.SECRET_KEY || 'super_secret_key';
const connection = mysql.createConnectionToDatabase();
mysql.connectToDataBase(connection);

const server = http.createServer((req, res) => {
  const { method, url } = req;

  res.setHeader('Content-Type', 'application/json');

  if (method === 'GET' && url === '/hello') {

    const authHeader = req.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.writeHead(401);
      res.end('Token lipsă sau invalid');
      return;
    }

    const token = authHeader.split(' ')[1];

    try {
      const decoded = jwt.verify(token, SECRET_KEY);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ mesaj: 'Acces permis', user: decoded }));
      return;
    } catch (err) {
      res.writeHead(403);
      res.end('Token invalid sau expirat');
      return;
    }

    
  }

  if (method === 'POST' && url === '/login') {
    auth.resolve_login(req, res, connection);
  } else if (method === 'POST' && url == '/register-user') {
    auth.resolve_register_user(req, res, connection);
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: 'Not found' }));
  }
});

server.listen(port, (error) => {
  if (error) {
    console.log(error);
  }
  console.log('The server lisens at port: ' + port);
});

