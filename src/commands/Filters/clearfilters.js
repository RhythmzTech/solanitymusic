
const {
    EmbedBuilder
  } = require(`discord.js`);
  module.exports = {
    name: `clearfilter`,    
    description: `Clears all Filters`,
    player: true,
    inVc: true,
    sameVc: true,
    current: true,
    run: async (client, interaction) => {
      const player = client.poru.players.get(interaction.guild.id);
      
          await player.filters.clearFilters;
      const emb = new EmbedBuilder()
      .setDescription(` **Cleared All Filters**`)
          
      return interaction.reply({embeds: [emb]})
      }
    }