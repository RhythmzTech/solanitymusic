const { EmbedBuilder } = require("discord.js")
module.exports = {
  name: "8d",
  description: `8d filter`,
  inVc: true,
  sameVc: true,
  player: true,
  current: true,
  run: async (client, interaction) => {
      let player = client.poru.players.get(interaction.guild.id) 

player.filters.set8D(!player.filters._8d)

 const embed = new EmbedBuilder()
 .setDescription(`**8d** mode is now ${player.filters._8d ? "**enabled**" : "**disabled**"} `)
interaction.reply({embeds: [embed]})
  }
  }