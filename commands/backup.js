const discordBackup = require('discord-backup')
const Discord = require('discord.js')
exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    
    .setTitle('Copias de seguridad')
    .setDescription('Información sobre las copias de seguridad')
    .addField('`.backup-create`', 'Crea una copia de seguridad de TODO el servidor')
    .addField('`.backup-list`', 'Muestra una lista de todas las copias de seguridad hechas')
    .addField('`.backup-load [ID]`', 'Carga una copia de seguridad a un servidor')
    .addField('`.backup-delete [ID]`', 'Elimina una copia de seguridad')

    message.channel.send(embed)
}
module.exports.help = {
    name: "backup",
    description: "backup help",
    usage: ".backup",
    category: "backup",
    aliases: ["backup"]
  };