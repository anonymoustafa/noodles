var fs = require('fs');
var readline = require('readline');



var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var locationier = function () {
  return "a.txt";
};


var aboundance = function (/* initial_amount, duration */) {
  rl.question("What is the initial amount? ", function (initial_amount) { rl.close();});
  let counter = 0;
  for (let index = 1; index <= 365; index++) {
    counter += 
  }
  return counter;
};

fs.writeFile(locationier(), aboundance().toString()+" ", function (err) {
  if (err) throw err;
  console.log('calculated annd saved!');
});

