const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  if (message.channel.id == "747037992509767691"){
      
  } else {
    return message.reply("Para ejecutar los comandos, por favor use <#747037992509767691>").then(m => m.delete(5000))
  
  }
    const embed = new Discord.RichEmbed()
      .setTitle("Invitacion Al Discord")
      .setColor('BLUE')
      .setDescription("Esta Es La Invitacion A [Nuestro Servidor](https://discord.gg/7gGaGyCMZY)!, Recuerda Invitar A Tus Amigos Para Ser Cada Dia Una Comunidad Mas Grande! **https://discord.gg/7gGaGyCMZY** ")
      .setFooter("Server Para Todo", client.user.avatarURL)
      .setThumbnail('https://images-ext-1.discordapp.net/external/6fuqSY0RtqCbVVY6gpA3mPkD2IdBtFjsk3V5pNDvEZo/https/cdn.discordapp.com/icons/746998503883931728/6928aa17820cfd725105c8b21cfa82eb.png?width=115&height=115')
      .setTimestamp()
      .setURL("https://discord.gg/7gGaGyCMZY")
      
      message.channel.send ({embed});
        
    }
      module.exports.help = {
        name: "invitacion",
        category: "advertising",
    
    }