const save = require('instagram-save');
save('https://www.instagram.com/mostafa.ramezani.90', './').then(res => {
  console.log(res.file);
});
