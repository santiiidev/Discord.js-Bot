exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission(['ADMINISTRATOR'])) return;
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0])
    if(member.hasPermission(['ADMINISTRATOR']) && !message.member.hasPermission('ADMINISTRATOR')) return;

        let mutedRole = message.guild.roles.cache.get('763849504600096789');
        //let verifiedRole = message.guild.roles.cache.get('ROLE ID (IF YOU ALREADY HAVE A ROLE DEAFULT FOR PEOPLE WHO JOINS YOUR SERVER!)');
        if(mutedRole) {
            member.roles.add(mutedRole);
            //member.roles.remove(verifiedRole);
            message.channel.send(`El usuario ${member} ha sido muteado.`);
        }
}
module.exports.help = {
    name: "",
    description: "",
    usage: "",
    category: "",
    aliases: [""]
  };
//Muted role ID: 763849504600096789