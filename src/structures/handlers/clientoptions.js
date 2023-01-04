const {GatewayIntentBits} = require("discord.js");
const gib = GatewayIntentBits;
module.exports={
    failIfNotExists: true,
    allowedMentions: {
      parse: ['roles', 'users'],
      repliedUser: false,
    },
    intents: [
      gib.Guilds,
      gib.GuildVoiceStates,
      gib.GuildMessages
    ]
}