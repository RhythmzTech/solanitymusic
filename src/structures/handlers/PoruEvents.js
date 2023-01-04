// const { readdirSync } = require('fs');
// const Ascii = require('ascii-table');
// const table = new Ascii('Poru Events');
// table.setHeading('Events', 'Load status');

// module.exports = (client) => {
//   const commands = readdirSync(
//     __dirname.replace('handlers', 'poruEvents'),
//   ).filter((file) => file.endsWith('.js'));

//   for (const file of commands) {
//     try {
//       const pull = require(`${__dirname.replace(
//         'handlers',
//         'poruEvents',
//       )}/${file}`);

//       if (pull.event && typeof pull.event !== 'string') {
//         table.addRow(file, `❌ -> Property event should be string.`);
//         continue;
//       }

//       pull.event = pull.event || file.replace('.js', '');

//       client.poru.on(pull.event, pull.run.bind(null, client));

//       table.addRow(file, '✅');
//     } catch (err) {
//       console.log(`Error while loading poru event: \n${err}`);
//       table.addRow(file, `❌ -> Error while loading event`);
//     }
//   }

//   console.log(table.toString());
// };
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