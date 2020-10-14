exports.run = (client, message, args) => { 
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('No tienes permisos para ejecutar ese comando.')
    let mencionado = message.mentions.users.first();
    let razon = args.slice(1).join(' ');
  
    if(!mencionado) return message.reply('Tienes que mencionar a alguien para banear.');
    if(!razon) return message.channel.send('Especifica la razon del baneo.');
  
    message.guild.member(mencionado).ban(razon);
    message.channel.send(`**${mencionado.username}**, ha sido baneado del servidor, razon: **${razon}**.`);
  
  }

  module.exports.help = {
    name: "",
    description: "",
    usage: "",
    category: "",
    aliases: [""]
  };