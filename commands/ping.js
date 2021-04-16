module.exports = {

    run: async (client, message, args) => {
        const msg = await message.channel.send(`🏓 Buscando Ping....`);

        msg.edit(`🏓 Pong!
        La Latencia Es De ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms
        La API Latencia Es De ${Math.round(client.ping)}ms`);
    }

}
module.exports.help = {
    name: "ping",
    aliases: []
}
    