var http = require('http');
var fs = require('fs');


  http.createServer(function (req, res) {

      fs.appendFile("boobs.txt","123 " ,function (err) {
          if (err) throw err;

  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("saved!");
  res.end();
});
}).listen(8080);
