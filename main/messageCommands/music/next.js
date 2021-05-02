module.exports = function (msg, ytdl, voiceChannel, Int, Int1, fnh, chaID, maindb, guildID, bossfn, helperr) {
    maindb.findById(guildID)
        .then(hs => {
            if (hs === null) {
                msg.channel.send(helperr.list1())
            } else if (hs.data.length <= 0) {
                msg.channel.send(helperr.list1())
            } else if (hs.data.length > 1 && hs.playing < hs.data.length) {
                bossfn.setVid(hs.playing + 1, msg, ytdl, voiceChannel, Int, Int1, fnh, chaID, maindb, guildID)
            } else {
                msg.channel.send(helperr.next1())
            }
        })
}