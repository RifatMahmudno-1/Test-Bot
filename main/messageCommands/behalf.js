module.exports = function (msg, tokens, prefix, otfn) {
    if (tokens.length >= 2) {
        otfn.del(msg);
        let aa = tokens.slice(1, tokens.length).join(' ')
        let user = msg.member.id
        msg.channel.send(`"${aa}" 
        --by <@${user}>`)
    } else {
        msg.reply(`Type correctly. For help type '${prefix}help'`)
    }

}