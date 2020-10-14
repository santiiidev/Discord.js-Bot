const ms = require('ms');
const config = require('C:\\Users\\santino\\Desktop\\Important\\Discord Bot\\config.json')
exports.run = async (client, message, args) => {

    // If the member doesn't have enough permissions
    if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "All perms")){
        return message.channel.send('Necesitas el permiso `MANAGE_MESSAGES` para poder iniciar sorteos.');
    }

    // Giveaway channel
    let giveawayChannel = message.mentions.channels.first();
    // If no channel is mentionned
    if(!giveawayChannel){
        return message.channel.send('Menciona un canal valido!');
    }

    // Giveaway duration
    let giveawayDuration = args[1];
    // If the duration isn't valid
    if(!giveawayDuration || isNaN(ms(giveawayDuration))){
        return message.channel.send('Especifica una duracion para el sorteo!');
    }

    // Number of winners
    let giveawayNumberWinners = args[2];
    // If the specified number of winners is not a number
    if(isNaN(giveawayNumberWinners) || (parseInt(giveawayNumberWinners) <= 0)){
        return message.channel.send('Tienes que mencionar la cantidad de ganadores del sorteo!');
    }

    // Giveaway prize
    let giveawayPrize = args.slice(3).join(' ');
    // If no prize is specified
    if(!giveawayPrize){
        return message.channel.send('Tines que especificar cual sera el premio del sorteo!');
    }

    // Start the giveaway
    client.giveawaysManager.start(giveawayChannel, {
        // The giveaway duration
        time: ms(giveawayDuration),
        // The giveaway prize
        prize: giveawayPrize,
        // The giveaway winner count
        winnerCount: giveawayNumberWinners,
        // Who hosts this giveaway
        hostedBy: config.hostedBy ? message.author : null,
        // Messages
        messages: {
            //giveaway: (config.everyoneMention ? "\n\n" : "")+"🎉 **Sorteo iniciado** 🎉",
            //giveawayEnded: (config.everyoneMention ? "\n\n" : "")+"🎉 **Sorteo terminado** 🎉",
            timeRemaining: "Tiempo restante: **{duration}**!",
            inviteToParticipate: "Reacciona con 🎉 para participar!",
            winMessage: "Felicidades, {winners}! Ganaste **{prize}**!",
            embedFooter: "Sorteos",
            noWinner: "Sorteo cancelado, participantes no validos.",
            hostedBy: "Hecho por: {user}",
            winners: "ganador(es)",
            endedAt: "Termina",
            units: {
                seconds: "segundos",
                minutes: "minutos",
                hours: "horas",
                days: "dias",
                pluralS: false // Not needed, because units end with a S so it will automatically removed if the unit value is lower than 2
            }
        }
    });

    message.channel.send(`Giveaway started in ${giveawayChannel}!`);

};
module.exports.help = {
    name: "gstart",
    description: "Iniciar un sorteo",
    usage: ".gstart [canal] [tiempo] [ganadores] [premio]",
    category: "giveaway",
    aliases: ["giveawaystart"]
  };