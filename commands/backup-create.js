const backup = require("discord-backup");
const Discord= require('discord.js')
settings = {
    prefix: "."
};

exports.run = (client, message, args) => {
        // Check member permissions
        if(!message.member.hasPermission("ADMINISTRATOR")){
            return message.channel.send(":x:*** | Tiens que tener el permiso `ADMINISTRATOR` para crear copias de seguridad!***");
        }
        // Create the backup
        backup.create(message.guild, {
            jsonBeautify: true
        }).then((backupData) => {
            // And send informations to the backup owner
            message.author.send("La copia de seguridad fue creada! Para usarla, escribe este comando en el servidor que quieras: `"+settings.prefix+"backup-load "+backupData.id+"`!");
            message.channel.send(":white_check_mark: Copia de seguridad creada. La ID fue enviada a tus mensajes!");
        });
    }
    module.exports.help = {
        name: "b-create",
        description: "Creates a backup",
        usage: ".backup-create",
        category: "backup",
        aliases: ["b-create"]
      };