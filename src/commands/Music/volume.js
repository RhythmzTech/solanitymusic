const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'volume',
  description: 'Sets the volume of the player',
  inVc: true,
  sameVc: true,
  options: [
    {
      name: 'volume',
      description: 'The volume which you want to set',
      type: ApplicationCommandOptionType.Number,
      required: true,
      min_value: 1,
      max_value: 500,
    },
  ],
  run: (client, interaction) => {
    const player = client.poru.players.get(interaction.guild.id);

    const volume = interaction.options.getNumber('volume', true);
    const setvol = volume/100;
    player.setVolume(setvol);

    const embed = new EmbedBuilder()
      .setDescription(`| Volume set to **${volume}%**.`);
    

    interaction.reply({
      embeds: [embed],
    });
  },
};
