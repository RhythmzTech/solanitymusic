const { EmbedBuilder } = require('discord.js');
const { readdirSync } = require('fs');

module.exports = {
  name: 'help',
  description: 'help command for the bot',
  run: (client, interaction) => {
   
      const categories = [];

      readdirSync(`${process.cwd()}/src/commands/`).forEach((dir) => {
        const commands = readdirSync(`${process.cwd()}/src/commands/${dir}/`).filter((file) =>
          file.endsWith('.js'),
        );

        const cmds = commands.map((command) => {
          const file = require(`../../commands/${dir}/${command}`);

          if (!file.name) return 'No command name.';

          const name = file.name.replace('.js', '');

          return `\`${name}\``;
        });

        let data = new Object();

        data = {
          name: dir.toUpperCase(),
          value: cmds.length === 0 ? 'Unknown' : cmds.join(', '),
        };
        if(data.name=="OWNER")return;
        categories.push(data);
      });

      const embed = new EmbedBuilder()
       .setAuthor({
        name: `| Help Menu`,
        iconURL: interaction.user.avatarURL(),
       })
        .addFields(categories)
      
        .setTimestamp()
        .setThumbnail(client.user.avatarURL())
        .setTimestamp();
      return interaction.reply({ embeds: [embed] });
    
  },
};
