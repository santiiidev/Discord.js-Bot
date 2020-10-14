const config = require('../config.json')

exports.run = (guild, user) => {

  config.logchannel.send(`${user.tag} ha sido unbaneado.`);
};