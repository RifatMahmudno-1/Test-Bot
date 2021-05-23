module.exports = function (msg, maindb, guildID, helperr) {
    maindb.findById(guildID)
        .then(hs => {
            if (hs == null) {
                msg.channel.send(helperr.list1())
            } else {
                if (hs.data.length <= 0) {
                    msg.channel.send(helperr.list1())
                } else {
                    let all = hs.data
                    let title = [];
                    all.forEach(function (el) {
                        title.push(el.title)
                    })
                    helperr.list2(title).forEach(function (el) {
                        if (el !== undefined) setTimeout(() => {
                            msg.channel.send(el)
                        }, 1);
                    })
                }
            }
        })
}