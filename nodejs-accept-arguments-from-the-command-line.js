const open = require('open');
const args = require('minimist')(process.argv.slice(2));
console.log(args['url']);
open(args['url'], {app: {name: 'brave-browser'}});


