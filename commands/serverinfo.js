const Discord = require('discord.js')
exports.run = (client, message, args) => {
    let embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Información de servidor")
            .setImage(message.guild.iconURL)
            .setDescription(`Información sobre ${message.guild}`)
            .addField("Dueño del servidor", `El dueño del servidor es ${message.guild.owner}`)
            .addField('ID del servidor',`El ID del servidor es ${message.guild.id}`)
            .addField('Región del servidor', `La región del servidor es ${message.guild.region}`)
            .addField("Miembros Totales", `Este servidor tiene ${message.guild.memberCount} miembros`)
            .addField("Emojis Totales", `Este servidor tiene ${message.guild.emojis.cache.size} emojis`)
            .addField("Roles Totales", `Este servidor tiene ${message.guild.roles.cache.size} roles`)
            

        message.channel.send(embed)
}
module.exports.help = {
    name: "",
    description: "",
    usage: "",
    category: "",
    aliases: [""]
  };