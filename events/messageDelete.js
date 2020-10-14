exports.run = (client, message, args) => {
    if(!message.partial) {
        const channel = client.channels.cache.get('ID HERE');
        if(channel) {
            const embed = new MessageEmbed()
                .setTitle('📇 Mensaje eliminado')
                .addField('Autor', `${message.author.tag} (${message.author.id})`, true)
                .addField('Canal', `${message.channel.name} (${message.channel.id})`, true)
                .setDescription(message.content)
                .setTimestamp();
            channel.send(embed);
        }
    }
}