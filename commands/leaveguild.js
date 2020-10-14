const Discord = require("discord.js");

exports.run = (client, message, args) => {
    if(message.author.id !=='320331431630864385') 
        return message.channel.send(`- ${message.author}, no tienes permiso para hacer eso!`);
    const embedLeave = new Discord.MessageEmbed()

    .setTitle('Nos vemos pronto!')
    .setDescription('Por orden del desarrolador fui eliminado forzosamente el bot del servidor')
    message.delete({timeout: 500})
    message.guild.leave() + message.channel.send(embedLeave);
}
module.exports.help = {
    name: "leaveguild",
    description: "developer",
    usage: ".leaveguild",
    category: "developeronly",
    aliases: ["leaveguild"]
  };