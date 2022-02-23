const { acceptsEncoding } = require('express/lib/request');
const repl = require('repl');
const local = repl.start();


local.on('exit',() => {
    console.log("exiting repl");
    process.exit();
});
