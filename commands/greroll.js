const ms = require('ms');

exports.run = async (client, message, args) => {

    // If the member doesn't have enough permissions
    if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")){
        return message.channel.send(':x: Necesitas el permiso `MANAGE_MESSAGES` para poder hacer `.greroll`.');
    }

    // If no message ID or giveaway name is specified
    if(!args[0]){
        return message.channel.send(':x: El ID tiene que ser valido!');
    }

    // try to found the giveaway with prize then with ID
    let giveaway = 
    // Search with giveaway prize
    client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
    // Search with giveaway ID
    client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    // If no giveaway was found
    if(!giveaway){
        return message.channel.send('No se puede encontrar el sorteo `'+ args.join(' ') +'`.');
    }

    // Reroll the giveaway
    client.giveawaysManager.reroll(giveaway.messageID)
    .then(() => {
        // Success message
        message.channel.send('Nuevos ganadores!');
    })
    .catch((e) => {
        if(e.startsWith(`El sorteo con el ID ${giveaway.messageID} no esta finalizado.`)){
            message.channel.send('Este sorteo no esta finalizado!');
        } else {
            console.error(e);
            message.channel.send('Error...');
        }
    });

};
module.exports.help = {
    name: "greroll",
    description: "Resortear",
    usage: ".greroll [ID]",
    category: "giveaway",
    aliases: ["gend"]
  };
