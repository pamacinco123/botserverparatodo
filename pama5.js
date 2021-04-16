const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true});
require("./functions")(client);
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

module.exports = {
    client: client
};

// client en config.json  HEROKU
client.login('NzU4NzY2Njg1OTI2MzI2Mjkz.X2zuiw.g78VEkuZbNpcaGqtsJmU3KCnymI')
