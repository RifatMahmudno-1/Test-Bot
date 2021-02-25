module.exports = function (msg, tokens) {
    if (tokens[0] === 'snick') {
        if (msg.member.hasPermission('ADMINISTRATOR') || msg.member.hasPermission('CHANGE_NICKNAME')) {
            let userArray = msg.mentions.users.array();
            let count = 0;
            for (var i = 0; i < userArray.length; i++) {
                count += 2
                msg.guild.members.cache.get(userArray[i].id).setNickname(tokens[count])
                msg.channel.send(`I've set the nickname of ${userArray[i].username} to ${tokens[count]}`)
            }
        } else {
            msg.reply(`You don't have permission to change nicknames.`)
        }
    } else if (tokens[0] === 'rnick') {
        if (msg.member.hasPermission('ADMINISTRATOR') || msg.member.hasPermission('CHANGE_NICKNAME')) {
            let userArray = msg.mentions.users.array();
            for (var i = 0; i < userArray.length; i++) {
                msg.guild.members.cache.get(userArray[i].id).setNickname(' ')
                msg.channel.send(`I've removed the nickname of ${userArray[i].username}`)
            }
        } else {
            msg.reply(`You don't have permission to reset nicknames.`)
        }
    }
}