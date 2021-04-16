const Discord = require('discord.js');
const config = require('../config.json')
const prefix = config.prefix

module.exports.run = async (client, message, args) => {
  //canal donde desea enviar a usar los comandos 
  if (message.channel.id == "747037992509767691"){
      
  } else {
    return message.reply("Para ejecutar los comandos, por favor use <#747037992509767691>").then(m => m.delete(5000))
  }
        message.channel.send('**'+message.author.username+'**, Hola aqui te dejamos unos comandos que puedes usar en nuestro servidor.\n```\n'+
                        '-> '+prefix+'invitacion   :: Muestra la invitación al servidor.\n'+
                        '-> '+prefix+'botinfo      :: Muestra información del bot.\n'+
                        '-> '+prefix+'server       :: Muestra información del servidor.\n'+
                        '-> '+prefix+'informacion  :: Muestra La Informacion Del Servidor.\n'+
                        '-> '+prefix+'ping         :: Muestra Tu Ping Actual.\n'+
                        '-> '+prefix+'redes        :: Muestra Las Redes Sociales Del Servidor.\n'+
                        '-> '+prefix+'normas       :: Muestra Las Normas Del Servidor.\n```\n\n');
}

module.exports.help = {
    name: "comandos"
  }