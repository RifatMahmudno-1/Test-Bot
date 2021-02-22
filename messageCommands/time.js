module.exports = function (msg, tokens, prefix, otfn) {
    if (tokens.length == 1) {
        let aa = 6
        msg.channel.send(`It's ${otfn.time(aa)[0]}:${otfn.time(aa)[1]} ${otfn.time(aa)[2]} now in GMT '${aa}'`)
    } else if (tokens.length >= 2 && isNaN(parseFloat(tokens[1])) == false) {
        let aa = parseFloat(tokens[1])
        msg.channel.send(`It's ${otfn.time(aa)[0]}:${otfn.time(aa)[1]} ${otfn.time(aa)[2]} now in GMT '${aa}'`)
    } else {
        msg.reply(`Type correctly. For help type '${prefix}help'`)
    }
}