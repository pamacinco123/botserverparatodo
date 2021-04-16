const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  if (message.channel.id == "747037992509767691"){
      
  } else {
    return message.reply("Para ejecutar los comandos, por favor use <#747037992509767691>").then(m => m.delete(5000))
  
  }
    const embed = new Discord.RichEmbed()
      .setTitle("Informacion General Del Servidor")
      .setColor('RED')
      .setDescription("Este Servidor, Es Un Servidor Para Estar De Chill Paneo Etc.. ||Server Para Todo|| Fundado Por Pamacinco & AndrewKLK Y GALLEGO Puedes Visitar Las <#747105704837513277>, Los <#754442211265085440> Y Las <#828377600007077898> Tambien Puedes Invitar A Tus Amigos Usando La Invitacion https://discord.gg/7gGaGyCMZY")
      .setFooter("Server Para Todo", client.user.avatarURL)
      .setThumbnail('https://images-ext-1.discordapp.net/external/6fuqSY0RtqCbVVY6gpA3mPkD2IdBtFjsk3V5pNDvEZo/https/cdn.discordapp.com/icons/746998503883931728/6928aa17820cfd725105c8b21cfa82eb.png?width=115&height=115')
      .setTimestamp()
      .setURL("https://discord.gg/7gGaGyCMZY")
      
      message.channel.send ({embed});
        
    }
      module.exports.help = {
        name: "informacion",
        category: "advertising",
    
    }