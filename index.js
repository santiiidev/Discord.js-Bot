const Discord = require("discord.js");
const client = new Discord.Client();
const { success, error, warning } = require("log-symbols");
const prefix = '.'
const { readdirSync } = require("fs");
const fs = require('fs');
const { readdir } = require("fs");
const { sep } = require("path");
const config = require('./config.json')

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.events = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
    if (err) return console.log(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        console.log(`${success} Loaded command ${file}`)
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
    });
});

    //Events "handler"
    fs.readdir('./events/', (err, files) => {
        if (err) console.log(err);
        files.forEach(file => {
            let eventFunc = require(`./events/${file}`);
            console.log(`${success} Loaded event ${file}`)
            let eventName = file.split(".")[0];
            client.on(eventName, (...args) => eventFunc.run(client, ...args));
        });
});
const { GiveawaysManager } = require('discord-giveaways');
client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        embedColor: "RANDOM",
        reaction: "🎉"
    }
});
client.giveawaysManager.on("giveawayReactionAdded", (giveaway, member, reaction) => {
    console.log(`${member.user.tag} entered giveaway #${giveaway.messageID} (${reaction.emoji.name})`);
});

client.giveawaysManager.on("giveawayReactionRemoved", (giveaway, member, reaction) => {
    console.log(`${member.user.tag} unreact to giveaway #${giveaway.messageID} (${reaction.emoji.name})`);
});
client.on("guildCreate", guild => {
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  });
  
  client.on("guildDelete", guild => {
    console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  });
//EVENT READY THX TO Gaston#0001 4fixing member count!
  client.on("ready", () => {
    console.log('');
    console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
    console.log(`Listo! Canales ${client.channels.cache.size}`, `Usuarios ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} y Servidores ${client.guilds.cache.size}`);
    console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
    console.log('');
    var interval = setInterval (function () {
    var p = Math.floor(Math.random()*6);
    if(p==1){
        client.user.setActivity(`${client.guilds.cache.size} servidores`, { type: 'WATCHING' });
    }
    if(p==2){
        client.user.setActivity(`${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} miembros`, { type: 'WATCHING' });
    }
    if(p==3){
        client.user.setActivity('.help', { type: 'PLAYING' });
  }
  if(p==4){
        client.user.setActivity(`${client.channels.cache.size} canales`, { type: 'WATCHING' });
  }
    if(p==5){
        client.user.setActivity('Desarrollado por godb#5000', { type: 'PLAYING' });
    }
    if(p==6){
        client.user.setActivity('Soporte: https://discord.gg/W5BmWG6', { type: 'PLAYING' });
    }
}, 1 * 10000);
});
  

client.login(config.token)