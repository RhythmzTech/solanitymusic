/**
 * @typedef {Object} CommandOptions Class Properties
 * @property {string} name Name for the command
 * @property {{ content: string; usage: string; examples: Array<string>}} description A description with three more properties for the command
 * @property {?Array<string>} aliases A array of aliases for the command
 * @property {?number} cooldown The cooldown for the command
 * @property {?{ voice: boolean; dj: boolean; active: boolean; djPerm: any }} player Dispatcher checks
 * @property {?{ dev: boolean; client: import('discord.js').PermissionResolvable; user: import('discord.js').PermissionResolvable; voteRequired: boolean; }} permissions Permission Resolves
 * @property {?boolean} slashCommand To specify if it's a slash command
 * @property {?import('discord.js').ApplicationCommandOption} options Slash Command options
 * @property {?string} category The category the command belongs to
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