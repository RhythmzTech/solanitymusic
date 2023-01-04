// module.exports.run = (client, message) => {
//   //Ignoring bot, system, dm and webhook messages
//   if (
//     message.author.bot ||
//     !message.guild ||
//     message.system ||
//     message.webhookId
//   )
//     return;
 

  
// };


const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'messageCreate',
    once: false,
    async execute( client,message,) {
      if (
            message.author.bot ||
            !message.guild ||
            message.system ||
            message.webhookId
          )
            return;
        // let intro = new EmbedBuilder()
           
        //     .setDescription(`${client.user.username} has stopped working over prefix and have been shifted to slash commands(/) type \`/help\` to get started.\n If the bot is not showing any slash commands then We highly recommend re-inviting the bot using this [link](https://discord.com/api/oauth2/authorize?client_id=982539609965723658&permissions=8&scope=bot%20applications.commands) to make sure you can keep using me using slash commands if you don't have slash commands yet!`)
        //     .setColor('RED')
        // if (message.content === `<@!${client.user.id}>` || message.content === `<@${client.user.id}>`) {
        // if (!message.channel.permissionsFor(client.user).has('SEND_MESSAGES') || !message.channel.permissionsFor(client.user).has('EMBED_LINKS')) return message.member.send('Hey, i need `SEND_MESSAGES`,`EMBED_LINKS` permission to do interaction with user.').catch(() => { })
        //   return message.channel.send({embeds:[intro]})
        // }
       
    }
};