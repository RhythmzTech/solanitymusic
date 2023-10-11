const { ApplicationCommandOptionType,EmbedBuilder} = require(`discord.js`);

  
  module.exports = {
      name: `eval`,
      description: `evals a code`,
      options:[{
        name:"code",
        type:ApplicationCommandOptionType.String,
        description: "Insert A Code To Evaluate",
        required: true,
      }],
      run: async (client, interaction) => {
        if(!client.config.owners.includes(interaction.user.id))return interaction.reply("You Are Not Allowed To Use This Command");
    
      
        const content = interaction.options.getString('code');
        const output = new Promise(resolve => resolve(eval(content)));
  
        return output
        .then(result => {
          if(typeof output !== "string" ){
            result = require("util").inspect(result, { depth: 0 });
          }
          if(result.includes(client.token)){
            result = result.replace(
              client.token, "TKN"
            );
          }
         
           const legend = new EmbedBuilder()
           .setColor("#303136")
        .setDescription(`\`\`\`js\n${result}\`\`\``);     
        interaction.reply({embeds: [legend],})
        }
        ).catch(err => {
            err = err.toString();
            if (err.includes(client.token)) {
              err = err.replace(client.token, "TKN");
            }
            const emesdf = new EmbedBuilder()
            .setColor("#303136")
       
        .setDescription(`\`\`\`js\n${err}\`\`\``);
        interaction.reply({embeds: [emesdf]});
        })
        
      
      }
  }