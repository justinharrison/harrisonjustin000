var http = require('http');
var path = require('path');
var ext = require('ext');
var fs = require ('fs');

var server = http.createserver(handleRequest);
server.listen(8080);

console.log('Server started on port 8080');

function handleRequest(req, res) {
  
  var pathname = req.url;
  
  if (pathname = '/') {
    pathname = '/index.html';
  }
  
  var ext = path.extname(pathname);
  
  var typeExt = {
    '.html' : 'text/html',
    '.js' : 'text/javascript',
    '.css' : 'text/css',
    '.wav' : 'audio/wav'
  };
  
  var contentType = typeExt[ext] || 'text/plain';
  
  fs.readFile(__dirname + pathname,
    function (err,data){
      if (err) {
        res.writeHead(500);
        return response.end('Error loading index.html' + pathname);
      }
      res.writeHead(200,{'Content-Type' :contentType});
      res.end(data);
    }
  );
}
