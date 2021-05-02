module.exports = function (msg, tokens, maindb, guildID, helperr) {
    if (tokens.length < 2 || isNaN(tokens[2])) return msg.channel.send(helperr.delete1())
    let num = parseInt(tokens[2])
    maindb.findById(guildID)
        .then(hs => {
            let aa = hs.data.length
            let bb = hs.data;
            if (aa <= 1) return msg.channel.send(helperr.delete2())
            if (num > aa || num === 0) return msg.channel.send(helperr.delete3(num))
            bb.splice(num - 1, 1)
            maindb.findByIdAndUpdate(guildID, {
                data: bb
            }, function (err) {
                if (err) throw err
            })
            msg.channel.send(helperr.delete4(num))
        })
}