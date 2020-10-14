const backup = require("discord-backup");

exports.run = (client, message, args) => {
        // Check member permissions
        if(!message.member.hasPermission("ADMINISTRATOR")){
            return message.channel.send(":x: | Tienes que tener permisos de administrador para poder elimar copias de seguridad!");
        }
        let backupID = args[0];
        if(!backupID){
            return message.channel.send(":x: | Tienes que especificar una ID valida!");
        }else if(backupID){
            backup.remove(backupID) + message.channel.send(`Copia de seguridad eliminada: ${backupID}`)
        }
    };
    module.exports.help = {
        name: "b-delete",
        description: "Delete's a created backup",
        usage: ".backup-delete [ID]",
        category: "backup",
        aliases: ["b-delete"]
      };
/*        
backup.create(message.guild, {
    jsonBeautify: true
}).then((backupData) => {
    // And send informations to the backup owner
    message.author.send("The backup has been created! To load it, type this command on the server of your choice: `"+settings.prefix+"load "+backupData.id+"`!");
    message.channel.send(":white_check_mark: Backup successfully created. The backup ID was sent in dm!");
});
*/