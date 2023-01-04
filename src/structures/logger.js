const moment = require("moment");
const date = `${moment().format("DD-MM-YYYY hh:mm:ss")}`;
const colors = require('colors');
const {logs} = require("../../config.json")
colors.enable();
class logger {
 
    error(error) {
        console.error(error);
    }

    debug(name, content) {
       console.log(`[${date}]`.green,` : [LOGS]`.red,`[${name}]`.yellow,` =>  ${content}`.cyan);
    }

    eventDebug(name, content) {
        
        console.log(`[${date}]`.green,` : [LOGS]`.red,`[${name}]`.yellow,` =>  ${content}`.blue);
    }

    log(name, content) {
       
        console.log(`[${date}]`.green,` : [LOGS]`.red,`[${name}]`.yellow,` =>  ${content}`.blue);
    }
    heartbeat(name, content, ping) {
        if(!logs) return;
        console.log(`[${date}]`.green,` : [HEARTBEAT]`.red,`[${name}]`.yellow,` =>  ${content}`.magenta,`${ping}`.blue);
    }
   

}

module.exports = logger;