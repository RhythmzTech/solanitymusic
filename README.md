# LAVAMUSICBOT

  

*Lavamusicbot* is a bot coded in **javascript** using **discord.js** and **poru**. 

  


  

## Features

  

+ Autoplay
+ playlist
+ filters
+ etc
  
## Requirements

  

+ [Node.js](https://nodejs.org/)

+ [Discord.js](https://discord.js.org/#/)

  

## Getting started

```
git clone https://github.com/DREXYOP/lavamusicbot.git

npm install

node .
```

## Setting up

+ Rename `config.json.example` to `config.json`.
  ``` json
   {

     "TOKEN":"Your Token",
     "owners": ["Your Id"],
     "nodes": [

        {

          "name": "NODE_1",
          "host":"host",
          "port": 443,
          "password": "pass",
          "secure": true
        }],
     "logs":false 
   }
  ```
  + change everything according to you.
  + run using `node .`

## Usage

  `/help`
  `/play`
  `/ping`
## Sources

  

+ [Poru](https://github.com/parasop/poru)
+ [Discord.js](https://github.com/discordjs/discord.js)


  
## Modifications

+ you can add sharding to the bot by replacing the code from the `index.js` folder *from* -
 ```js
 require("./src/init")
 ```
 *To*-
 ```js
 const { TOKEN } = require("./config.json");

const { ShardingManager } = require("discord.js");

const manager = new ShardingManager("./src/init.js", {

respawn: true,

autoSpawn: true,

token: TOKEN,

totalShards: auto,

shardList: "auto",

});

manager

.spawn({ amount: manager.totalShards, delay: null, timeout: -1 })

.then((shards) => {

console.log(`[LOGS] => [CLIENT] ${shards.size} shard(s) spawned.`);

})

.catch((err) => {

console.log("[ERROR] => [CLIENT] An error has occurred :", err);

});

manager.on("shardCreate", (shard) => {

shard.on("ready", () => {

console.log(`[LOGS] => [CLIENT] Shard ${shard.id} connected to Discord's Gateway.`);

 });

});
 ```
+ you can add filters and commands by adding files to commands folder.

 
## Contributors

  
+ [**Drexy_xD#1598**](https://discord.com/users/983787597627273267)

## Sponsors

+ [**Beer#0235**](https://discord.com/users/908780309162635354)
  

## License

  

This project was Licensed under the standard  **[Apache](http://opensource.org/licenses/Apache-2.0)** license.