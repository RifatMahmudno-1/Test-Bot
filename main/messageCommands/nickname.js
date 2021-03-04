module.exports = async function (msg, tokens, prefix) {
    if (tokens[0] === 'snick' && tokens.length >= 3) {
        if (msg.member.hasPermission('ADMINISTRATOR') || msg.member.hasPermission('CHANGE_NICKNAME')) {
            let userArray = msg.mentions.users.array();
            let count = 0;
            for (var i = 0; i < userArray.length; i++) {
                count += 2;
                let user = msg.guild.members.cache.get(userArray[i].id)
                damn(count, user)
            }

            function damn(count, user) {
                user.setNickname(tokens[count]).then(success).catch(error);

                function error() {
                    msg.channel.send(`I don't have permission to set, remove or change nickname of ${user.user.username}`)
                }

                function success() {
                    msg.channel.send(`I've set the nickname of ${user.user.username} to ${tokens[count]}`)
                }
            }
        } else {
            msg.reply(`You don't have permission to change nicknames.`)
        }
    } else if (tokens[0] === 'rnick' && tokens.length >= 2) {
        if (msg.member.hasPermission('ADMINISTRATOR') || msg.member.hasPermission('CHANGE_NICKNAME')) {
            let userArray = msg.mentions.users.array();
            for (var i = 0; i < userArray.length; i++) {
                let user = msg.guild.members.cache.get(userArray[i].id)
                user.setNickname(' ').then(success).catch(error);

                function error() {
                    msg.channel.send(`I don't have permission to set, remove or change nickname of ${user.user.username}`)
                }

                function success() {
                    msg.channel.send(`I've removed the nickname of ${user.user.username}`)
                }
            }
        } else {
            msg.reply(`You don't have permission to reset nicknames.`)
        }
    } else {
        msg.channel.send(`Please type correctly. For help type '${prefix}help'.`)
    }
}