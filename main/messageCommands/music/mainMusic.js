module.exports = async function (msg, mongoose) {
    let voiceChannel = msg.member.voice.channel;
    if (!voiceChannel.joinable) return msg.channel.send(`I don't have permission to join that voice channel.`)
    if (!voiceChannel) return msg.channel.send('You need to be in a channel to play this music');
    //all modules
    const ytdl = require('ytdl-core-discord');
    const yts = require('yt-search');
    //mongodb setup
    const format = require('./format.js')
    let maindb;
    if (mongoose.connection.models.musics) {
        maindb = mongoose.connection.models.musics
    } else {
        maindb = mongoose.model('musics', format(mongoose));
    }
    const guildID = `${msg.guild.id}`
    //Interval and Timeout variables
    let Int = null,
        Int1 = null;
    //token and args
    let tokens = msg.content.split(' ')
    if (tokens[1]) tokens[1] = tokens[1].toLowerCase()
    let args = tokens.slice(2).join(' ')
    //files
    const del = require('./delete.js')
    const list = require('./list.js')
    const playlist = require('./playlist.js')
    const bossfn = require('./bossfn')
    const select = require('./select.js')
    const previous = require('./previous.js')
    const next = require('./next.js')
    const playres = require('./play.js')
    const helperr = require('./helperr.js')
    //end
    //is in any voice channel
    let selfVoice;
    if (msg.guild.voice && msg.guild.voice.connection) {
        selfVoice = msg.guild.voice.connection.channel;
    }
    if (selfVoice && tokens[1] === 'stop' && tokens[2] === 'force') {
        if (msg.member.hasPermission('ADMINISTRATOR')) return bossfn.StOp(Int, Int1, selfVoice, msg)
        else {
            return msg.channel.send(helperr.noadmin())
        }
    }
    if (selfVoice && selfVoice.id !== voiceChannel.id) return msg.channel.send(helperr.isVoice(selfVoice.name))
    //else if
    if (tokens[1] === 'add') {
        if (tokens.length <= 2 || tokens[2].length <= 2) return msg.channel.send(helperr.add1())
        bossfn.valiadd(msg, ytdl, voiceChannel, Int, Int1, maindb, guildID, yts, args, helperr, 'add', undefined)
    } else if (tokens[1] === 'sel' || tokens[1] === 'select') {
        select(msg, ytdl, voiceChannel, Int, Int1, maindb, guildID, bossfn, tokens, helperr)
    } else if (tokens[1] === 'del' || tokens[1] === 'delete') {
        del(msg, tokens, maindb, guildID, helperr)
    } else if (tokens[1] === 'list') {
        list(msg, maindb, guildID, helperr)
    } else if (tokens[1] === 'previous') {
        previous(msg, ytdl, voiceChannel, Int, Int1, maindb, guildID, bossfn, helperr)
    } else if (tokens[1] === 'next') {
        next(msg, ytdl, voiceChannel, Int, Int1, maindb, guildID, bossfn, helperr)
    } else if (tokens[1] === 'play' || tokens[1] === 'resume') {
        playres(msg, ytdl, voiceChannel, Int, Int1, maindb, guildID, bossfn, tokens, yts, args, helperr)
    } else if (tokens[1] === 'replay') {
        maindb.findById(guildID)
            .then(hs => {
                if (hs == null) {
                    msg.channel.send(helperr.replay1())
                } else {
                    bossfn.setVid(1, msg, ytdl, voiceChannel, Int, Int1, maindb, guildID)
                }
            })
    } else if (tokens[1] === 'pause') {
        msg.channel.send(helperr.pause1())
        bossfn.StOp(Int, Int1, voiceChannel, msg)
    } else if (tokens[1] === 'stop') {
        bossfn.StOp(Int, Int1, voiceChannel, msg)
    } else if (tokens[1] === 'clearlist') {
        maindb.deleteOne({
            _id: guildID
        }, function (err) {
            if (err) throw err
        });
        msg.channel.send(helperr.clearlist1())
    } else if (tokens[1] === 'playlist') {
        playlist(yts, msg, tokens, maindb, guildID, helperr)
    } else if (tokens[1] === 'help') {
        msg.channel.send(helperr.help())
    } else {
        msg.channel.send(helperr.help1())
    }
}