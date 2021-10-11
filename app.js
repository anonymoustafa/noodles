var http = require('http');

http.createServer(function (porsesh, pasokh) {
  pasokh.writeHead(200, {'Content-Type': 'text/plain'});
  pasokh.write(porsesh.url);
  pasokh.write(porsesh.url);
  pasokh.end();
}).listen(8080);

