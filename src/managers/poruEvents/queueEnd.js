const {EmbedBuilder} = require("discord.js")
module.exports = {
  name:"queueEnd",
  async execute(client, player) {
  const channel = client.channels.cache.get(player.textChannel);
  const embed = new EmbedBuilder()
  .setAuthor({
    name: `| Queue has ended`,
    iconURL: client.user.displayAvatarURL(),
  })
  channel?.send({embeds:[embed]});
  return player.destroy();
}
};
