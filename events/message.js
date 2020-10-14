const prefix = "."  
const Discord = require('discord.js')
const client = new Discord.Client()
 exports.run = async(client, message) => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix)) {
    
 let messageArray = message.content.split(" "),
     cmd = messageArray[0],
     args = messageArray.slice(1),
     commandfile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)));
  
if(!commandfile) return;    
    commandfile.run(client,message,args);  
  
    if(commandfile){
      console.log(`Command: ${cmd} | User: ${message.author.username}#${message.author.discriminator} | Server: ${message.guild.name} | User ID: ${message.author.id}`)
  }           
  }}

/*
  exports.run = (client, message, args) => {
	let messageArray = message.content.split(" "),
	cmd = messageArray[0]

	let command;

	if (message.author.client || !message.guild) return;

	// If the message.member is uncached, message.member might return null.
	// This prevents that from happening.
	// eslint-disable-next-line require-atomic-updates
	if (!message.member) message.member = message.guild.fetchMember(message.author);

	if (!message.content.startsWith(prefix)) return;

	if (cmd.length === 0) return;
	if (client.commands.has(cmd)) command = client.commands.get(cmd);
	else if (client.aliases.has(cmd)) command = client.commands.get(client.aliases.get(cmd));

	if (command) command.run(client, message, args);
}
*/