const { Client, Collection, GatewayIntentBits } = require('discord.js');
const slashHandler = require("./handlers/Slash");
const eventHandler = require("./handlers/Events");
const poruHandler = require("./handlers/PoruEvents");
const logger = require("./logger");
const{Poru} = require("poru");


class client extends Client {
    constructor(cnfg,options) {
        super(options)
       
        //base data\\
        this.poru = new Poru(this, cnfg.nodes, {
          deezer: {
            playlistLimit: 5,
          },
          spotify: {
            clientID: 'cb41529dc3bd4d8f8a240dbee0fff4e8',
            clientSecret: 'bcca82f42930498aa385a8289fdf276b',
            playlistLimit: 5,
          },
          apple: {
            playlistLimit: 5,
          },
        });
        this.slashCommands = new Collection();
        this.config = cnfg;
        this.logger = new logger();

        // data to client \\
        new eventHandler(this).start();
        new slashHandler(this).initCommands();
        new poruHandler(this).start();
        
        
    }

    
    

    async login(tkn) {
        if (!tkn) throw new RangeError('You must include TOKEN to login either in config.json or env')
        await super.login(tkn)
            .then(x => {
                return x
            })
            .catch(err => console.log(err))
    }

    async dbconnect(){
      console.log("comming soon")
    }
    
}

module.exports = client;