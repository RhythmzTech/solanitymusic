const { EmbedBuilder } = require("discord.js")
module.exports = {
  name: "vibrato",
  description: `vibrato filter`,
  inVc: true,
  sameVc: true,
  player: true,
  current: true,
  run: async (client, interaction, args) => {
      let player = client.poru.players.get(interaction.guild.id) 

player.filters.setVibrato(!player.filters.vibrato)

 const embed = new EmbedBuilder()
 .setDescription(`**Vibrato** mode is now ${player.filters.vibrato ? "**enabled**" : "**disabled**"} `)
 interaction.reply({embeds: [embed]})
  }
}