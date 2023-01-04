
const { readdirSync } = require('fs');
const { join } = require('path');

class poruHandler {
    constructor(client) {
        this.client = client
        
        client.logger.debug('PoruEVENTS', 'Loading events')
    }

    start() {
        const eventFiles = readdirSync(join(__dirname, "..","..","managers","poruEvents")).filter(file => file.endsWith('.js'));
     let nic = 0;
        for (const file of eventFiles) {
            
            const event = require(`../../managers/poruEvents/${file}`);
            this.client.poru.on(event.name, event.execute.bind(null , this.client));
            nic++;
        }
        this.client.logger.debug('PoruEVENTS', `Loaded ${nic} poruevents`)
    }
    
}

module.exports = poruHandler;