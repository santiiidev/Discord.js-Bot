const Discord = require("discord.js")
exports.run = (client, message, args) => {
    message.channel.send("Pong :)");
    message.channel.send("Pinging...").then(m =>{
      var ping = Date.now() - message.createdTimestamp + " ms";

        var embed = new Discord.MessageEmbed()
        .setAuthor(`Tu ping es: ${ping}`)
        .setColor("GREEN")
        
        m.edit(embed)
    })
  }
  module.exports.help = {
      name: "",
      description: "",
      usage: "",
      category: "",
      aliases: [""]
    };