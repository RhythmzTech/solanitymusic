/**
 * @typedef {Object} CommandOptions Class Properties
 * @property {?import('discord.js').ApplicationCommandOption} options Slash Command options
 */


const { readdirSync } = require('fs');
const { join } = require('path');
let slash = []
let notImportantCount = 0;

class slashHandler {
    constructor(c) {
        c.logger.debug('COMMANDS', 'Loading commands')
        this.client=c;
        
    }
    initCommands() {
        for (const x of readdirSync(join(__dirname, "..", "..", "commands"))) {
            for (let command of readdirSync(join(__dirname, "..", "..", "Commands", x))) {
                command = require(`../../commands/${x}/${command}`)
               
                this.client.slashCommands.set(command.name, command)
                slash.push(command);
                notImportantCount++;
            }
        }
        this.client.logger.debug('COMMANDS', `Loaded ${notImportantCount} commands`)
        this.client.on("ready", async () => {

            await this.client.application.commands.set(slash);
            this.client.logger.debug('SLASH_COMMANDS', 'Registered slash commands')
        })
    }

}

module.exports = slashHandler;