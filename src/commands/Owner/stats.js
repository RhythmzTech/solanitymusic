const os = require("os");
const {EmbedBuilder}= require("discord.js");
const humanize = require("humanize-duration");

module.exports = {
  name: "status",
  description:"status of the vps , owner only.",
  run: async(client , interaction) => {
    if(!client.config.owners.includes(interaction.user.id))return interaction.reply("You Are Not Allowed To Use This Command");
    try {
      const messembed = new EmbedBuilder()
        
       .setAuthor({
        name: `| My Stats`,
        iconURL: interaction.user.avatarURL(),
       })
        .addFields(
            { name: 'Channels:', value: `${client.channels.cache.size.toLocaleString()}` },
            { name: 'Cpu Cores:', value: `${os.cpus().length}` , inline:false},
            { name: 'Cpu Usage', value: `${(os.cpus()[0].speed / 1000).toFixed(1)}`, inline: false },
            { name: 'RAM', value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, inline: false },
            { name: 'UPTIME', value: `${humanize(Math.round(process.uptime() * 1000))}`,inline:false},
        )
      interaction.reply({ embeds: [messembed] });
    } catch (err) {
      console.log(err)
    }
  },
};