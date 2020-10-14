const ms = require('ms');

exports.run = async (client, message, args) => {

    // If the member doesn't have enough permissions
    if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")){
        return message.channel.send(':x: Tienes que tener permiso de `MANAGE_MESSAGES`.');
    }

    // If no message ID or giveaway name is specified
    if(!args[0]){
        return message.channel.send(':x: Tienes que especificar un ID valido!');
    }

    // try to found the giveaway with prize then with ID
    let giveaway = 
    // Search with giveaway prize
    client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
    // Search with giveaway ID
    client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    // If no giveaway was found
    if(!giveaway){
        return message.channel.send('No puedo encontrar el sorteo `'+ args.join(' ') + '`.');
    }

    // Edit the giveaway
    client.giveawaysManager.edit(giveaway.messageID, {
        setEndTimestamp: Date.now()
    })
    // Success message
    .then(() => {
        // Success message
        message.channel.send('El sorteo termina en menos de '+(client.giveawaysManager.options.updateCountdownEvery/1000)+' seconds...');
    })
    .catch((e) => {
        if(e.startsWith(`Un sorteo con el ID ${giveaway.messageID} ya ha sido finalizada.`)){
            message.channel.send('Este sorteo ya ha sido finalizado!');
        } else {
            console.error(e);
            message.channel.send('Error...');
        }
    });

};

module.exports.help = {
    name: "gend",
    description: "Terminar un sorteo",
    usage: ".gend [ID]",
    category: "giveaway",
    aliases: ["gend"]
  };