exports.run = (client, message, args) => {
    const backup = require("discord-backup");
    backup.list().then((backups) => {
    console.log(backups); // Expected Output [ "BC5qo", "Jdo91", ...]
    
});
}
module.exports.help = {
    name: "b-list",
    description: "Shows in console a list of all backups",
    usage: ".backup-list",
    category: "backup",
    aliases: ["b-list"]
  };