const moment = require('moment')

exports.run = (client, message, args) => {
    const actividad = moment.duration(client.uptime).format(" D [dias], H [hrs], m [mins], s [secs]");//hacemos un const actividad para que el uptime salga en formato de dias, horas, minutos y segundos
const embed = new Discord.MessageEmbed()//definimos embed
.setAuthor("Ascend Bot", client.user.avatarURL())
.setDescription('[Invitación del Bot](https://discord.com/api/oauth2/authorize?client_id=726953642686677004&permissions=8&scope=bot) | [Servidor de Soporte](https://discord.gg/EVTutZs)')
.setThumbnail(client.user.avatarURL())//hacemos un setAuhtor para que salga el nombre de tu bot y su foto de perfil
.addField("Developer", ` godb#5000`)//un field para el Developer pones tu nombre
.addField("Servers", ` ${client.guilds.cache.size}`)//hacemos un field para la cantidad de servers donde esta tu bot
.addField("Usuarios", ` ${client.users.cache.size}`)//field para ver la cantidad de usuarios que pueden ver a tu bot
.addField("Tiempo en linea", ` ${actividad}`)//usamos el const actividad para el uptime
.addField("RAM", ` ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)//aqui va la ram osea la memoria que usa tu bot
.addField("Lenguaje", " JavaScript")//el lenguaje que en este caso es JavaScript
.addField('Servidores restantes para verificar: ',  75 - client.guilds.cache.size + " servidores restantes para verificar")
.addField("Libreria", " Discord.js v12.18.0")//la libreria que es Discord.js v12
message.channel.send(embed) //que envie el embed
}
module.exports.help = {
    name: "",
    description: "",
    usage: "",
    category: "",
    aliases: [""]
  };