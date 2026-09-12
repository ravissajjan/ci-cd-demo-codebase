// A tiny web server, so we have something to run and deploy.
// I am Shreyas Mulekar
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.end('OK');
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(fs.readFileSync(__dirname + '/index.html'));
  }
});

server.listen(3000, () => console.log('Running on http://localhost:3000'));
