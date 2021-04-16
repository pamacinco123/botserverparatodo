const {client} = require('../pama5');

client.on("guildMemberRemove", function(member){
    var channel = client.channels.get("759531828087881820").send({embed:{ //channel ID
        color: 15158332,
        author: {
            name: member.user.tag,
            icon_url: member.user.avatarURL || "https://images-ext-1.discordapp.net/external/JOgFs4FpMVRmm0VTt9pwuJaxTpL9FliVxMR1xepWO48/https/images-ext-1.discordapp.net/external/jp7rgZ8utNFQ_9pv4pqnRRzyM1z7SzhW3nQwtym07qs/https/media.discordapp.net/attachments/758753669377425451/758763137549205525/TEAM_DARKX.PNG?width=475&height=475"
        },
        description: `Un miembro de nuestro discord se ha ido! ${member.user.tag}`,
        thumbnail: {
            url: member.user.avatarURL || member.guild.iconURL
        },
        footer: {
            text: `User ID: ${member.id}`,
        }
    }})
})