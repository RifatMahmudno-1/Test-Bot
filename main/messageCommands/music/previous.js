module.exports = function (msg, ytdl, voiceChannel, Int, Int1, maindb, guildID, bossfn, helperr) {
    maindb.findById(guildID)
        .then(hs => {
            if (hs === null) {
                msg.channel.send(helperr.list1())
            } else if (hs.data.length <= 0) {
                msg.channel.send(helperr.list1())
            } else if (hs.data.length > 1 && hs.playing > 1) {
                bossfn.setVid(hs.playing - 1, msg, ytdl, voiceChannel, Int, Int1, maindb, guildID)
            } else {
                msg.channel.send(helperr.previous1())
            }
        })
}