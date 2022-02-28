const fs = require('fs');


fs.readFile('ackage.json', (err, data) => {
  if (err) {
    //handle error
    console.log(err)
    return
  };

  //no errors, process data
  console.log(data)
});

