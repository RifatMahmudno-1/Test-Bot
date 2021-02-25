module.exports = function (msg, tokens, prefix) {
    if (tokens[0] === 'avt') {
        if (tokens.length == 1) {
            msg.reply(msg.author.displayAvatarURL() + '?size=2048');
        } else if (tokens.length > 1) {
            let userArray = msg.mentions.users.array();
            userArray.forEach(function (el) {
                msg.reply(el.displayAvatarURL() + '?size=2048');
            })
        }
    } else if (tokens[0] === 'cha') {
        if (tokens.length >= 3) {
            let keywords = tokens.slice(2, tokens.length).join(' ')
            let curr = msg.channel.name;
            let user = msg.member.id
            msg.guild.channels.cache.find(i => i.name === tokens[1]).send(`<@${user}> sent this message from ${curr} channel=>
             "**${keywords}**"`)
        } else {
            msg.reply(`Type correctly. For help type '${prefix}help'`)
        }
    }

}