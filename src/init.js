
const config = require("../config.json")
const clop = require("./structures/handlers/clientoptions")
console.log("LOGGING IN....");


// (async () => {
//   await require("./src/Database/connect")();
// })();


const client = require("./structures/client");

const initc = new client(config,clop)
 initc.login(config.TOKEN)
  .catch(err => console.error(err));
 initc.dbconnect()
 .catch(e => console.error(e));
