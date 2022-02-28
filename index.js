const loglog = require('./logger.js');
const logloglog = new loglog();

logloglog.on('logger-message', function(arguments) {

        console.log('message loged finally', arguments);
});

logloglog.log('1369');
