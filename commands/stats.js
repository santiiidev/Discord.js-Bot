const Discord = require('discord.js')
exports.run = async (client, message, args) => {
        const embedStats = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setTitle('📊 Estadisticas del Bot')
        .setDescription('Estas son las estadisticas globales del Bot, no de los servidores.')
        .addField('🔌 Servidores totales: ', `${client.guilds.cache.size}`)
        .addField('📂 Usuarios totales: ', `${client.users.cache.size}`)

        message.channel.send(embedStats)
}
module.exports.help = {
    name: "",
    description: "",
    usage: "",
    category: "",
    aliases: [""]
  };