
const {ApplicationCommandOptionType, EmbedBuilder } = require("discord.js")
module.exports = {
  name: "bassboost",
  description:"bassboost filter",
  inVc: true,
  sameVc: true,
  player: true,
  current: true,
  options: [
    {
      name: 'amount',
      description: 'The amount of bass from 0-500. set 0 for turning off',
      type: ApplicationCommandOptionType.Number,
      required: true,
      min_value: 0,
      max_value: 500,
    }
  ],
  run: async (client, interaction) => {
 let player = client.poru.players.get(interaction.guild.id);
 
 const amt = interaction.options.getNumber('amount', true);
   player.filters.setBassboost(amt);

 const embed = new EmbedBuilder()

 .setDescription(`BassBoost has been set to **${amt}**`)
interaction.reply({embeds: [embed]})
  }
}