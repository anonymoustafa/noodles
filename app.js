var http = require('http');
var fs = require('fs');


fs.appendFile('a.txt', 'contents ', function (err) {
  if (err) throw err;
  console.log('saved :)');
});
