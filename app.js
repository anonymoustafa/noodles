const validator = require('validator');
const get_notes = require('./notes.js');


const messages = get_notes();
console.log(messages);
console.log(validator.isEmail('anonymoustafa@outlook.com'));