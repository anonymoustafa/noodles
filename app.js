var fs = require('fs');

fs.appendFile('fuck_billy_boys.txt', 'demofile1.html', function (err) {
  if (err) throw err;
  console.log('saved!');
});

fs.appendFile('../george.txt', 'george 15th bd was yesterday! ', function (err) {
  if (err) throw err;
  console.log('George saved too!');
});
