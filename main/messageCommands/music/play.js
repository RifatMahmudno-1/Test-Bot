module.exports = function (msg, ytdl, voiceChannel, Int, Int1, fnh, chaID, maindb, guildID, bossfn, tokens, yts, args, helperr) {
    if (tokens[1] === 'play') {
        if (tokens.length < 3 || tokens[2].length <= 2) msg.channel.send(helperr.play1())
        else bossfn.valiadd(msg, maindb, guildID, yts, args)
    } else if (tokens[1] === 'resume') {
        msg.channel.send(helperr.play2())
    }
    setTimeout(() => {
        maindb.findById(guildID)
            .then(hs => {
                if (hs == null) {
                    msg.channel.send(helperr.replay1())
                } else {
                    let aa = hs.data.length;
                    if (tokens[1] === 'play') bossfn.setVid(aa, msg, ytdl, voiceChannel, Int, Int1, fnh, chaID, maindb, guildID)
                    if (tokens[1] === 'resume') bossfn.setVid(hs.playing, msg, ytdl, voiceChannel, Int, Int1, fnh, chaID, maindb, guildID)
                }
            });
    }, 8000);
}