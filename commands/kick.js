exports.run = (client, message, args) => { 
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('No tienes permisos para ejecutar ese comando.')
    let mencionado = message.mentions.users.first();
    let razon = args.slice(1).join(' ');
  
    if(!mencionado) return message.reply('Tienes que mencionar a alguien para expulsar.');
    if(!razon) return message.channel.send('Especifica la razón para expulsarlo.');
  
    message.guild.member(mencionado).kick(razon);
    message.channel.send(`**${mencionado.username}**, fue expulsado del servidor, razón: **${razon}**.`);
  
  }

  module.exports.help = {
    name: "",
    description: "",
    usage: "",
    category: "",
    aliases: [""]
  };