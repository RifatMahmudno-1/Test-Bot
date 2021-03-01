module.exports = function (msg, tokens, prefix) {
    if (tokens[0] === 'kick') {
        if (msg.member.hasPermission('ADMINISTRATOR') || msg.member.hasPermission('KICK_MEMBERS')) {
            if (tokens.length >= 3) {
                let userArray = msg.mentions.users.array();
                userArray.forEach(function (el) {
                    msg.guild.members.cache.get(el.id).kick({ reason: tokens[1] })
                    msg.channel.send(`${el.username} was kicked from this server successfully ${tokens[1]}.`)
                })
                msg.channel.send(`If anyone wasn't kicked that means I don't have permission to kick him.`)
            } else {
                msg.reply(`Type correctly. For help type '${prefix}help'`)
            }
        } else {
            msg.reply(`You don't have permission to kick any user.`)
        }
    } else if (tokens[0] === 'ban') {
        if (msg.member.hasPermission('ADMINISTRATOR') || msg.member.hasPermission('KICK_MEMBERS')) {
            if (tokens.length >= 3) {
                let userArray = msg.mentions.users.array();
                let Days = 1;
                if (parseFloat(tokens[3]) == Number) Days = parseFloat(tokens[3])
                userArray.forEach(function (el) {
                    msg.guild.members.cache.get(el.id).ban({ days: Days, reason: tokens[1] })
                    msg.channel.send(`${el.username} was banned from this server successfully ${tokens[1]}.`)
                })
                msg.channel.send(`If anyone wasn't banned that means I don't have permission to kick him.`)
            } else {
                msg.reply(`Type correctly. For help type '${prefix}help'`)
            }
        } else {
            msg.reply(`You don't have permission to ban any user.`)
        }
    }
}