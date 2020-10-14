exports.run = async (bot, message, args) => {
            
  if (message.deletable) {
      message.delete();
  }

  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.reply("No tienes permisos suficientes!").then(m => m.delete(5000));
  }

  if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
      return message.reply("Eso no es un numero").then(m => m.delete(5000));
  }

  let deleteAmount;
  if (parseInt(args[0]) > 100) {
      deleteAmount = 100;
  } else {
      deleteAmount = parseInt(args[0]);
  }

  message.channel.bulkDelete(deleteAmount, true)
  .catch(err => message.reply(`Algo ha pasado... ${err}`));

}
module.exports.help = {
    name: "",
    description: "",
    usage: "",
    category: "",
    aliases: [""]
  };