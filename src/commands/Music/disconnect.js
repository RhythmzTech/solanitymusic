const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'disconnect',
  description: 'Disconnect the bot from your voice channel',
  inVc: true,
  sameVc: true,
  player: true,
  run: (client, interaction) => {
    const player = client.poru.players.get(interaction.guildId);

    player.destroy();

    const embed = new EmbedBuilder()
      .setDescription('Left the voice channel!');

    return interaction.reply({
      embeds: [embed],
    });
  },
};
