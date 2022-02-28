const EE = require('events');
class log extends EE {

        log (message) {
                
                console.log(message);
                this.emit('logger-message',{name : "Mosi", age : 27}); 
        };


};

module.exports = log;
