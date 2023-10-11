const { ActivityType } = require('discord.js');


module.exports= {
  name: 'ready',
  once: true,
async execute(client) {
  client.poru.init(client);
  
  client.logger.log("API",`${client.user.username} is ready with ${client.guilds.cache.size} server`)
  setInterval(() => {
   client.logger.heartbeat("CLIENT",`heartbeat took around`,` ${client.ws.ping}ms`);
   
  }, 10000);
  setInterval(() => {
    const statuses = ['/help'];
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    
    client.user.setActivity(status, { type: ActivityType.Listening });
  }, 1000);
} 
};
