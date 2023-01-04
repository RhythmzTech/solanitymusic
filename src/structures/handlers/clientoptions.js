const {GatewayIntentBits} = require("discord.js");
const gbi = GatewayIntentBits;
module.exports={
    failIfNotExists: true,
    allowedMentions: {
      parse: ['roles', 'users'],
      repliedUser: false,
    },
    intents: [
      gbi.Guilds,
      gbi.GuildVoiceStates,
      gbi.GuildMessages
    ]
}