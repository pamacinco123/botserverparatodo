const {client} = require('../pama5');

client.on('messageReactionRemove', async (reaction, user) => {
    if(user.bot) return;


// mensaje inicial
    if (reaction.message.id == "759540511546802176") {
        /* Template
            if (reaction.emoji.id == "EMOJI ID"){
                reaction.message.guild.members.get(user.id).addRole("ROLE ID", "ReactionRole -> ROLE NAME");
                client.channels.get("656363899012251648").send(user + ", you were added to the ROLE NAME Role!").then(m => m.delete(5000))
            }
        */
        if (reaction.emoji.id == "759515241909714974"){
            reaction.message.guild.members.get(user.id).removeRole("758755748318019624", "ReactionRole -> verificado").then(reaction.message.guild.members.get(user.id).addRole('758957167142502410'));
            client.channels.get("758755624238055434").send(user + ", Malas noticias ya no eres verificado!!!").then(m => m.delete(5000))
        }
    };

});