module.exports = function (msg, ytdl, voiceChannel, Int, Int1, fnh, chaID, maindb, guildID, bossfn, tokens, helperr) {
    if (tokens.length < 2 || isNaN(tokens[2])) return msg.channel.send(helperr.select1())
    let num = parseInt(tokens[2])
    maindb.findById(guildID)
        .then(hs => {
            if (hs === null) {
                msg.channel.send(helperr.select2())
            } else if (num >= 1 && num <= hs.data.length) {
                bossfn.setVid(num, msg, ytdl, voiceChannel, Int, Int1, fnh, chaID, maindb, guildID)
            } else {
                msg.channel.send(helperr.select3(num))
            }
        })
}