const {EmbedBuilder} = require("discord.js");
const client = require("../../structures/client");

module.exports = {
  
      name: 'ping',
      description: 'Returns the ping of bot',
   
  
  async run (client, interaction) {
    
    const embed = new EmbedBuilder()
      .setDescription(`pong! - ${client.ws.ping}`);
      interaction.reply({embeds:[embed]});
  }
};
