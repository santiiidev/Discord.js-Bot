const Discord = require("discord.js");
exports.run = (client, message, args) => {
    let texto = args.join(' ');
    if(!texto) return message.channel.send('Tienes que poner un mensaje para mandar.')
    const embedSay = new Discord.MessageEmbed()
        .setTitle('Mesaje de '+message.author.username+' :envelope:')
        .setDescription(texto)
        message.delete({timeout: 500})
    message.channel.send(embedSay); 
  }

  module.exports.help = {
    name: "",
    description: "",
    usage: "",
    category: "",
    aliases: [""]
  };