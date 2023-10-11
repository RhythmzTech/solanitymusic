const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'stop',
  description: 'stops the music and leavs the channel',
  inVc: true,
  sameVc: true,
  player: true,
  run: (client, interaction) => {
    const player = client.poru.players.get(interaction.guildId);

    player.destroy();

    const embed = new EmbedBuilder()
      .setDescription('Destroyed the player and left the voice channel!');
    return interaction.reply({
      embeds: [embed],
    });
  },
};
