const { MessageEmbed } = require("discord.js");
exports.run = (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('No tienes permisos para ejecutar ese comando.')
    let rChannel = message.guild.channels.cache.get(args[1]);
    if (!rChannel)
      return message.channel.send(
        `No especificaste un canal para mandar el anuncio!`
      );
    console.log(rChannel);
    let MSG = message.content
      .split(`${bot.prefix}announce ${rChannel.id} `)
      .join("");
    if (!MSG)
      return message.channel.send(`No especificaste el canal para mandar el anuncio!`);
    const _ = new MessageEmbed()
      .setTitle(`Nuevo anuncio hecho por ${message.author.username}!`)
      .setDescription(`${MSG}`)
      .setColor("RANDOM");
    rChannel.send(_);
    message.delete();
  }
  module.exports.help = {
      name: "",
      description: "",
      usage: "",
      category: "",
      aliases: [""]
    };