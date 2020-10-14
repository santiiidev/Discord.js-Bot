const Discord = require('discord.js')

exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()

    .setTitle('Ascend Bot Invitación')
    .setDescription('[Invitacion del Bot](https://discord.com/api/oauth2/authorize?client_id=726953642686677004&permissions=8&scope=bot)')
    .setColor('RANDOM')

    message.channel.send(embed)
}
module.exports.help = {
    name: "",
    description: "",
    usage: "",
    category: "",
    aliases: [""]
  };