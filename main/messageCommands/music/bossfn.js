const helperr = require('./helperr.js')
module.exports = {
    valiadd: function (msg, ytdl, voiceChannel, Int, Int1, maindb, guildID, yts, args, helperr, willAdd, cmd) {
        if (willAdd === 'add') {
            yts(args)
                .then(getVids => {
                    let video = getVids.all.filter(x => x.type === 'live' || x.type === 'video')[0]
                    if (video.length < 1) return msg.channel.send(helperr.veliadd1());
                    let obj = {
                        title: (() => {
                            let aa = video.title.replace(/[`*]+/g, '')
                            if (aa.length > 40) aa = aa.slice(0, 35) + '...'
                            return aa
                        })(),
                        url: video.url,
                        channel: video.author.name,
                        timestamp: video.timestamp,
                        time: video.seconds || 0
                    }
                    maindb.findById(guildID)
                        .then(hs => {
                            if (hs == null) {
                                new maindb({
                                    _id: guildID,
                                    data: [obj],
                                    playing: 1
                                }).save()
                                msg.channel.send(helperr.veliadd2())
                            } else {
                                let oldDt = hs.data
                                if (oldDt.length >= 50) return msg.channel.send(helperr.veliadd3())
                                oldDt.push(obj)
                                maindb.findByIdAndUpdate(guildID, {
                                    data: oldDt
                                }, function (err) {
                                    if (err) throw err
                                })
                                msg.channel.send(helperr.veliadd2())
                            }
                        })
                        .catch(() => console.log('Error in DB'))
                })
                .then(() => {
                    this.playNOW(cmd, msg, ytdl, voiceChannel, Int, Int1, maindb, guildID)
                })
                .catch(() => {
                    msg.channel.send(helperr.veliadd4())
                })
        } else if (willAdd === 'noadd') {
            this.playNOW(cmd, msg, ytdl, voiceChannel, Int, Int1, maindb, guildID)
        }
    },
    playNOW: function (cmd, msg, ytdl, voiceChannel, Int, Int1, maindb, guildID) {
        if (!cmd) return;
        setTimeout(() => {
            maindb.findById(guildID)
                .then(hs => {
                    if (hs == null) {
                        msg.channel.send(helperr.replay1())
                    } else {
                        let aa = hs.data.length;
                        if (cmd === 'play') this.setVid(aa, msg, ytdl, voiceChannel, Int, Int1, maindb, guildID)
                        if (cmd === 'resume') this.setVid(hs.playing, msg, ytdl, voiceChannel, Int, Int1, maindb, guildID)
                    }
                });
        }, 500);
    },
    setVid: function (n, msg, ytdl, voiceChannel, Int, Int1, maindb, guildID) {
        setTimeout(() => {
            maindb.findByIdAndUpdate(guildID, {
                playing: n
            }, (err) => {
                if (err) throw err;
            })
            setTimeout(() => {
                maindb.findById(guildID)
                    .then(hs => {
                        let video = hs.data[hs.playing - 1]
                        this.playVid([video.url, video.title, video.channel, video.timestamp, video.time], msg, ytdl, voiceChannel, Int, Int1, maindb, guildID)
                    })
                    .catch(() => msg.channel.send(helperr.setVid1()))
            }, 100);
        }, 100);
    },
    playVid: async function (xx, msg, ytdl, voiceChannel, Int, Int1, maindb, guildID) {
        if (xx[4] === 0) {
            msg.channel.send(helperr.playVid2(xx))
        } else {
            msg.channel.send(helperr.playVid2(xx))
        }
        let stream = await ytdl(xx[0])
        const connection = await voiceChannel.join();
        connection.voice.setSelfDeaf(true);
        clearInterval(Int);
        clearTimeout(Int1);
        Int = setInterval(() => {
            if (msg.guild.voice.channel && msg.guild.voice.channel.members.size <= 1) {
                msg.channel.send(helperr.playVid3())
                Int1 = setTimeout(async () => {
                    if (msg.guild.voice.channel && msg.guild.voice.channel.members.size <= 1) {
                        clearInterval(Int)
                        await voiceChannel.leave()
                        msg.channel.send(helperr.playVid4()).then(r => r.react('😭'))
                    }
                }, 60000);
            }
        }, 60000);
        connection
            .play(stream, {
                type: 'opus',
                seek: 0,
                volume: 1
            })
            .on('finish', () => {
                clearInterval(Int)
                msg.channel.send(helperr.playVid5(xx));
                this.onFinish(msg, ytdl, voiceChannel, Int, Int1, maindb, guildID)
            })
    },
    onFinish: function (msg, ytdl, voiceChannel, Int, Int1, maindb, guildID) {
        maindb.findById(guildID)
            .then(hs => {
                if (hs == null) {
                    msg.channel.send(helperr.onFinish1())
                    this.StOp(Int, Int1, voiceChannel, msg)
                } else {
                    let data = hs.data.length;
                    if (data === hs.playing) {
                        msg.channel.send(helperr.onFinish2())
                        this.StOp(Int, Int1, voiceChannel, msg)
                    } else if (hs.playing < data) {
                        msg.channel.send(helperr.onFinish3())
                        this.setVid(hs.playing + 1, msg, ytdl, voiceChannel, Int, Int1, maindb, guildID)
                    }
                }
            })
    },
    StOp: async function (Int, Int1, voiceChannel, msg) {
        clearInterval(Int);
        clearTimeout(Int1);
        msg.channel.send(helperr.stop1()).then(r => r.react('😭'))
        await voiceChannel.leave();
    },
}