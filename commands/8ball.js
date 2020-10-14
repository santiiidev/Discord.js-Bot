exports.run = (client, message, args) => {
    let respuesta = ["Si", "No", "Tal vez", "Obvio", "Yo digo que si", "Yo digo que no", "Probablemente"]//aqui las probables respuestas que va a tener
    var random = respuesta[Math.floor(Math.random() * respuesta.length)]//aqui decimos que va a elegir una respuesta random de el let respuesta
  const embed = new Discord.MessageEmbed()//definimos el embed
  
  .addField("Su pregunta", `${args.join(" ")}`)//primer valor decimos a su pregunta y en el segundo valor va la pregunta que iso el usuario
  .addField("Mi respuesta", `${random}`)//primer valor decimos "Mi respuesta" y en el segundo decimos que va a agarrar el var random
  .setColor("RANDOM")//un color random
  message.channel.send(embed)//y que mande el embed
  }
exports.help = {
      name: "8ball",
      description: "Respuesta a una pregunta",
      usage: ".8ball [pregunta]",
      category: "fun",
      aliases: ["8ball"]
    };