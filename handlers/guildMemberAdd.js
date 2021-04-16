const {client} = require('../pama5')

client.on("guildMemberAdd", function(member){
    client.channels.get("747105704837513277").send({embed:{
        color: 3066993,
        title: `🎊 Nuevo Miembro! 🎊`,
        description: `Bienvenido ${member}`,
        thumbnail: {
            url: member.user.avatarURL || "https://images-ext-1.discordapp.net/external/JOgFs4FpMVRmm0VTt9pwuJaxTpL9FliVxMR1xepWO48/https/images-ext-1.discordapp.net/external/jp7rgZ8utNFQ_9pv4pqnRRzyM1z7SzhW3nQwtym07qs/https/media.discordapp.net/attachments/758753669377425451/758763137549205525/TEAM_DARKX.PNG?width=475&height=475"
        },
        fields: [
            {
                name: "Información",
                value: "Por favor leer nuestras <#758759702594060338>."
            },
            {
                name: "Te gustaría pertenecer a nuestro team?",
                value: "visita nuestro canal de <#759532160804716595> para postularte!"
            },
            {
                name: `Solicita tu prueba ahora!`,
                value: "Reacciona en nuestro canal de  <#759532160804716595> para solicitar tu prueba, suerte!!"
            }
        ],
        footer: {
            text: member.guild.name,
            icon_url: member.guild.iconURL,
        }
    }})
    console.log(`${client.user.tag} connected to Discord`);
    var role = member.guild.roles.find("id", "758957167142502410");
    member.addRole(role);
})

client.on("guildMemberAdd", function(member){
    var channel = client.channels.get("759531828087881820").send({embed:{
        color: 3066993,
        author: {
            name: member.user.tag,
            icon_url: member.user.avatarURL
        },
        description: `${member.user.tag} a entrado al servidor`,
        thumbnail: {
            url: member.user.avatarURL || member.guild.iconURL
        },
        footer: {
            text: `User ID: ${member.id}`,
        }
    }})
})