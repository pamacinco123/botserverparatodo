const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  if (message.channel.id == "747037992509767691"){
      
  } else {
    return message.reply("Para ejecutar los comandos, por favor use <#747037992509767691>").then(m => m.delete(5000))
  
  }
    const embed = new Discord.RichEmbed()
      .setTitle("Normativa De Server Para Todo")
      .setColor('RED')
      .setDescription("La [Normativa](https://discord.gg/8eVtmQ2qwg), Del Servidor, Se Encuentra En El Canal De <#829365349019025481> Recuerda Respetar La Normativa Para No Ser Sancionado!")
      .setFooter("Server Para Todo", client.user.avatarURL)
      .setThumbnail('https://images-ext-2.discordapp.net/external/GR1pAKHclhf_XV2CtNRD4TLxtCL030WVojFYPaGJGNU/%3Fwidth%3D115%26height%3D115/https/images-ext-1.discordapp.net/external/6fuqSY0RtqCbVVY6gpA3mPkD2IdBtFjsk3V5pNDvEZo/https/cdn.discordapp.com/icons/746998503883931728/6928aa17820cfd725105c8b21cfa82eb.png?width=103&height=103')
      .setTimestamp()
      .setURL("https://discord.gg/8eVtmQ2qwg")
      
      message.channel.send ({embed});
        
    }
      module.exports.help = {
        name: "normas",
        category: "advertising",
    
    }