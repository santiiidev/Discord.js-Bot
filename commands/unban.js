exports.run = async(client, message, args) => {
        if(!message.member.hasPermission("BAN_MEMBERS")) {
          return message.channel.send(`**${message.author.username}**, No tienes permiso para unbanear gente :x:`)
        }
        
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
          return message.channel.send(`**${message.author.username}**, No tengo suficientes permisos para poder unbanear gente :x:`)
        }
        
        let userID = args[0]
        message.guild.fetchBans().then(bans=> {
        if(bans.size == 0) return 
        let bUser = bans.find(b => b.user.id == userID)
        if(!bUser) return
        message.guild.members.unban(bUser.user).reply(bUser+', Fue unbaneado del servidor :mega:')
    })
        
      ;}
      module.exports.help = {
          name: "",
          description: "",
          usage: "",
          category: "",
          aliases: [""]
        };