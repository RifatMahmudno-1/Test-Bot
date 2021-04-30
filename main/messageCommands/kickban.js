module.exports = function (msg, tokens, prefix) {
    if (tokens[0] === 'kick') {
        if (msg.member.hasPermission('ADMINISTRATOR') || msg.member.hasPermission('KICK_MEMBERS')) {
            if (tokens.length >= 2) {
                let userArray = msg.mentions.users.array();
                userArray.forEach(function (el) {
                    msg.guild.members.cache.get(el.id).kick()
                        .then(handleResponse)
                        .catch(handleError);

                    function handleError() {
                        msg.channel.send(`I don't have permission to kick ${el.username}.`)
                    }

                    function handleResponse() {
                        msg.channel.send(`${el.username} was kicked from this server successfully ${tokens[1]}.`)
                    }
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
                    msg.guild.members.cache.get(el.id).ban()
                        .then(handleResponse)
                        .catch(handleError);

                    function handleError() {
                        msg.channel.send(`I don't have permission to ban ${el.username}.`)
                    }

                    function handleResponse() {
                        msg.channel.send(`${el.username} was banned from this server successfully ${tokens[1]}.`)
                    }
                })
            } else {
                msg.reply(`Type correctly. For help type '${prefix}help'`)
            }
        } else {
            msg.reply(`You don't have permission to ban any user.`)
        }
    }
}