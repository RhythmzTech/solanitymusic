


const { readdirSync } = require('fs');
const { join } = require('path');

class eventHandler {
    constructor(client) {
        this.client = client
        
        client.logger.debug('EVENTS', 'Loading events')
    }

    start() {
        const eventFiles = readdirSync(join(__dirname, "..","..","managers","events")).filter(file => file.endsWith('.js'));
     let nic = 0;
        for (const file of eventFiles) {
            
            const event = require(`../../managers/events/${file}`);
            if (event.once) {
                this.client.once(event.name, (...args) => event.execute( this.client, ...args));
            } else {
                this.client.on(event.name, (...args) => event.execute(this.client,...args));
            }
            nic++;
        }
        this.client.logger.debug('EVENTS', `Loaded ${nic} events`)
    }
    
}

module.exports = eventHandler;