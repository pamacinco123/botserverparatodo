const Discord = require('discord.js');
const config = require('../config.json')
const prefix = config.prefix

module.exports.run = async (client, message, args) => {
  //canal donde desea enviar a usar los comandos 
  if (message.channel.id == "747037992509767691"){
      
  } else {
    return message.reply("Para ejecutar los comandos, por favor use <#747037992509767691>").then(m => m.delete(25000))
  }
        message.channel.send('** π SΓ­guenos en nuestras redes sociales y no te pierdas las ultimas noticias! π **.\n\n'+
                        '-> π YouTube: https://www.youtube.com/channel/UCLxw9fT8VQXJ_gRVjDl4cjQ.\n'+
                        '-> π Instagram: https://www.instagram.com/marcpanyellam.\n'+
                        '-> π― Invitacion: https://discord.gg/7gGaGyCMZY\n'+
                        '-> π± Facebook: https://www.facebook.com/pamacinco.\n\n\n');
}

module.exports.help = {
    name: "redes"
  }