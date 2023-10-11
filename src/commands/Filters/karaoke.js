const { EmbedBuilder } = require("discord.js")
module.exports = {
  name: "karaoke",
  description: `karaoke filter`,
  inVc: true,
  sameVc: true,
  player: true,
  current: true,
  run: async (client, interaction) => {
      let player = client.poru.players.get(interaction.guild.id) 

player.filters.setKaraoke(!player.filters.karaoke)

 const embed = new EmbedBuilder()
 .setDescription(`**karaoke** mode is now ${player.filters.karaoke ? "**enabled**" : "**disabled**"} `)
interaction.reply({embeds: [embed]})
  }
  }