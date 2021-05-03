module.exports = function (msg, ytdl, voiceChannel, Int, Int1, fnh, chaID, maindb, guildID, bossfn, tokens, yts, args, helperr) {
    if (tokens.length < 3 || tokens[2].length <= 2) {
        if (tokens[1] === 'play') {
            msg.channel.send(helperr.play1())
        } else if (tokens[1] === 'resume') {
            msg.channel.send(helperr.play2())
        }
        bossfn.valiadd(msg, ytdl, voiceChannel, Int, Int1, fnh, chaID, maindb, guildID, yts, args, helperr, 'noadd', 'resume')
    } else {
        bossfn.valiadd(msg, ytdl, voiceChannel, Int, Int1, fnh, chaID, maindb, guildID, yts, args, helperr, 'add', 'play')
    }
}