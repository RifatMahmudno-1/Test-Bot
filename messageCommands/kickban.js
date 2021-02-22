module.exports = function (msg, tokens, prefix) {
    if (tokens[0] === 'kick') {
        if (msg.member.hasPermission('ADMINISTRATOR') || msg.member.hasPermission('KICK_MEMBERS')) {
            if (tokens.length >= 3) {
                let userArray = msg.mentions.users.array();
                userArray.forEach(function (el) {
                    msg.guild.members.cache.get(el.id).kick()
                    msg.channel.send(`${el.username} was kicked from this server successfully ${tokens[1]}.`)
                })
            } else {
                msg.reply(`Type correctly. For help type '${prefix}help'`)
            }
        } else {
            msg.reply(`You don't have permission to kick any user.`)
        }
    } else if (tokens[0] === 'ban') {
        if (msg.member.hasPermission('ADMINISTRATOR') || msg.member.hasPermission('KICK_MEMBERS')) {
            if (tokens.length >= 2) {
                let userArray = msg.mentions.users.array();
                userArray.forEach(function (el) {
                    msg.channel.send(`${el.username} was banned from this server successfully ${tokens[1]}.`)
                    msg.guild.members.cache.get(el.id).ban()
                })
            } else {
                msg.reply(`Type correctly. For help type '${prefix}help'`)
            }
        } else {
            msg.reply(`You don't have permission to ban any user.`)
        }
    }
}