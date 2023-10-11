const {
    EmbedBuilder
  } = require(`discord.js`);
  module.exports = {
    name: `china`,
    
    description: `China filter`,
     player: true,
    inVc: true,
    sameVc: true,
    current:true,
    run: async (client, interaction) => {
      const player = client.poru.players.get(interaction.guild.id);
      
      
       if(!player.filters.timescale){ player.filters.setTimescale({
          "speed": 0.75,
          "pitch": 1.25,
          "rate": 1.15
        })}else{player.filters.setTimescale(false)}
      
      const emb = new EmbedBuilder()
      .setDescription(`**China** mode is now ${player.filters.timescale ? "**enabled**" : "**disabled**"} `)
          
      return interaction.reply({embeds: [emb]})
      }
    }