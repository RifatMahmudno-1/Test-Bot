const redditImageFetcher = require('reddit-image-fetcher')
module.exports = function (msg, tokens, prefix) {
    if (tokens[0] === 'meme') {
        if (tokens.length == 1) {
            sendd('meme', [], '😂')
        } else if (tokens.length == 2 && tokens[1] == 'anime') {
            sendd('custom', ['Animemes', 'animememes'], '😂')
        } else {
            msg.reply(`Please type correctly. You can only get anime, meme. Type '${prefix}meme' for meme. Type '${prefix}meme anime' for meme on anime. For help type '${prefix}help'`)
        }
    } else if (tokens[0] === 'wallpaper') {
        sendd('custom', ['wallpapers'], '❤')
    }
    async function sendd(aaa, bbb, ccc) {
        await redditImageFetcher.fetch({
                type: aaa,
                total: 1,
                addSubreddit: bbb
            })
            .then(result => {
                msg.channel.send(result[0].title).then(msg.channel.send(result[0].image).then(r => r.react(ccc)))
            }).catch(() => {
                msg.channel.send(`Failed to load. Plz try again.`).then(r => r.react('😭'))
            })
    }
}