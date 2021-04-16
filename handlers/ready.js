const {client} = require('../pama5');
const {message} = require('../pama5')
const config = require("../config.json");
const prefix = config.prefix

client.on("ready", async () => {
        console.log("Estoy listo!");
        client.user.setActivity(`Viendo Mi MD Para Soporte! | Server Para Todo!`, { type: 'Watching'})
        console.log(prefix);

})

