var http = require('http');
var url = require('url');

http.createServer(function (porsesh, pasokh) {
  pasokh.writeHead(200, {'Content-Type': 'text/plain'});
  var q = url.parse(porsesh.url, true).query;
  var dat3 = q.year + " " + q.month;
  pasokh.write(dat3);
  pasokh.end();
}).listen(8080);

// http://localhost:8080/?year=2017&month=July