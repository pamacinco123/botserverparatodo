const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete().catch() 
  if (message.channel.id == "747037992509767691"){
      
  } else {
    return message.reply("Para ejecutar los comandos, por favor use <#747037992509767691>").then(m => m.delete(5000))
  }
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Informacion del bot")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Nombre del Bot:", bot.user.username)
    .addField("Dueño:", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
    .addField("Prefix:", "!")
    .addField("Necesitas ayuda?:", "Usa el comando !comandos y tendrás los comandos que puedes usar en el servidor")
    .addField("Creado:", bot.user.createdAt);

    message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}