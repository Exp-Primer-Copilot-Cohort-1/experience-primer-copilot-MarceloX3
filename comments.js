// Create web server
var http = require('http');
var fs = require('fs');

// Create web server
http.createServer(function(request, response) {
  // Read the file
  fs.readFile('comments.html', function(err, data) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(data);
    return response.end();
  });
}).listen(8080);

// Create web server
http.createServer(function(request, response) {
  // Read the file
  fs.readFile('comments.js', function(err, data) {
    response.writeHead(200, {'Content-Type': 'text/javascript'});
    response.write(data);
    return response.end();
  });
}).listen(8081);

// Create web server
http.createServer(function(request, response) {
  // Read the file
  fs.readFile('comments.css', function(err, data) {
    response.writeHead(200, {'Content-Type': 'text/css'});
    response.write(data);
    return response.end();
  });
}).listen(8082);

console.log('Server is running at http://