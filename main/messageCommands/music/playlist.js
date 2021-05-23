module.exports = function (yts, msg, tokens, maindb, guildID, helperr) {
    if (tokens.length <= 2 || tokens[2].length <= 2) return msg.channel.send(helperr.add1())
    else if (tokens[2].slice(0, 33) !== "https://www.youtube.com/playlist?") return msg.channel.send(helperr.add1())
    let ID = tokens[2].match(/list=[\w_+-]+/g)[0].replace(/list=/, '')
    yts({
            listId: ID
        })
        .then(getVids => {
            let videos = getVids.videos
            if (videos.length < 1 || videos.length == undefined) return msg.channel.send(helperr.playlist1())
            let arr = [];
            if (videos.length <= 100) {
                for (var i = 0; i < videos.length; i++) {
                    arr.push({
                        title: (() => {
                            let aa = videos[i].title.replace(/[`*]+/g, '')
                            if (aa.length > 40) aa = aa.slice(0, 35) + '...'
                            return aa
                        })(),
                        url: `https://www.youtube.com/watch?v=${videos[i].videoId}`,
                        channel: videos[i].author.name,
                        timestamp: videos[i].duration.timestamp || 'Live Stream',
                    })
                }
            } else {
                for (var i = 0; i < 100; i++) {
                    arr.push({
                        title: (() => {
                            let aa = videos[i].title.replace(/[`*]+/g, '')
                            if (aa.length > 40) aa = aa.slice(0, 35) + '...'
                            return aa
                        })(),
                        url: `https://www.youtube.com/watch?v=${videos[i].videoId}`,
                        channel: videos[i].author.name,
                        timestamp: videos[i].duration.timestamp || 'Live Stream',
                    })
                }
            }
            maindb.findById(guildID)
                .then(hs => {
                    if (hs == null) {
                        new maindb({
                            _id: guildID,
                            data: arr,
                            playing: 1
                        }).save()
                        if (videos.length > 100) msg.channel.send(helperr.playlist2())
                        if (videos.length <= 100) msg.channel.send(helperr.playlist6(videos.length))
                    } else {
                        let oldDt = hs.data
                        if (hs.data.length >= 100) return msg.channel.send(helperr.playlist3())
                        if (hs.data.length + arr.length > 100) {
                            let free = 100 - hs.data.length
                            for (var i = 0; i < free; i++) {
                                oldDt.push(arr[i])
                            }
                            msg.channel.send(helperr.playlist4(free))
                        } else {
                            arr.forEach(function (el) {
                                oldDt.push(el)
                            })
                            msg.channel.send(helperr.playlist5)
                        }
                        maindb.findByIdAndUpdate(guildID, {
                            data: oldDt
                        }, function (err) {
                            if (err) throw err
                        })
                    }
                })
        })
}