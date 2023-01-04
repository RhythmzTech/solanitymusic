const {EmbedBuilder} = require("discord.js")

module.exports = {
  name: 'ping',
  description: 'Returns the ping of bot',
  run: async (client, interaction) => {
    
    const embed = new EmbedBuilder()
      .setDescription(`pong! - ${client.ws.ping}`);
      interaction.reply({embeds:[embed]});
  },
};
