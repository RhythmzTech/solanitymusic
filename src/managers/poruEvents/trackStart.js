const { EmbedBuilder } = require('discord.js');
const ms = require('ms');


module.exports = {
  name:"trackStart",
  async execute(client, player, track)  {
  const embed = new EmbedBuilder()
    .setAuthor({
      name: `| Now Playing`,
      iconURL: track.info.requester.displayAvatarURL(),
    })
    .setDescription(
      `[${track.info.title}](${track.info.uri}) | ${track.info.author} | [${ms(track.info.length)}]`)
    

  const channel = client.channels.cache.get(player.textChannel);
  return channel?.send({ embeds: [embed] });
}
};