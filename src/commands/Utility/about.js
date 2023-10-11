const {EmbedBuilder} = require("discord.js")
const humanize = require("humanize-duration")
module.exports = {
  name: 'about',
  description: 'displays information about the bot.',
  run: async (client, interaction) => {
    
    const embed = new EmbedBuilder()
    .setAuthor({
        name: `| About Me`,
        iconURL: interaction.user.avatarURL(),
       })
    .setThumbnail(client.user.avatarURL())
    .setColor('#f5f5f5')
    
    .addFields(
        { name: 'Creator:', value: `[Drexy_xD#1598](https://discord.com/users/983787597627273267)` },
        { name: 'Sponsers:', value: `[Beer#0235](https://discord.com/users/908780309162635354)` , inline:false},
        { name: 'Guilds', value: `${client.guilds.cache.size}`, inline: false },
        { name: 'Users', value: `${client.users.cache.size}`, inline: false },
        { name: 'UPTIME', value: `${humanize(Math.round(client.uptime))}`,inline:false},
    );
    interaction.reply({embeds:[embed]})
  },
};
