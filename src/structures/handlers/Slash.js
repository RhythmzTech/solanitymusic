/**
 * @typedef {Object} CommandOptions Class Properties
 * @property {?import('discord.js').ApplicationCommandOption} options Slash Command options
 */


const { readdirSync } = require('fs');
const { join } = require('path');
let slash = []

function main(client) {
    client.logger.debug('COMMANDS', 'Loading commands')
    let notImportantCount = 0;
    for (const x of readdirSync(join(__dirname, "..","..", "commands"))) {
        for (let command of readdirSync(join(__dirname, "..","..", "Commands", x))) {
            command = require(`../../commands/${x}/${command}`)
            client.slashCommands.set(command.name, command)
            slash.push(command);
            notImportantCount++;
        }
    }
    client.logger.debug('COMMANDS', `Loaded ${notImportantCount} commands`)
    client.on("ready",async ()=> {
        
        await client.application.commands.set(slash);
        client.logger.debug('SLASH_COMMANDS', 'Registered slash commands')
     })
}

module.exports = main;