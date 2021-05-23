const GoogleImages = require('google-images');
const google = new GoogleImages(`${process.env.GOOGLEID}`, `${process.env.GOOGLEAPI}`);
module.exports = function (msg, tokens, prefix) {
    if (tokens.length > 1) {
        let keywords = tokens.slice(1, tokens.length).join(' ')
        var random = Math.floor(Math.random() * 10)
        if (msg.channel.nsfw) {
            google.search(keywords)
                .then(images => {
                    msg.channel.send(keywords)
                        .then(() => msg.channel.send(images[random].url))
                }).catch(() => {
                    msg.channel.send(`Some errors have occured. Please type correctly.`)
                });
        } else {
            google.search(keywords, {
                    safe: "active"
                })
                .then(images => {
                    if (!images || images.length == 0) return msg.channel.send(`Couldn't find any safe image. If you are searching bad images use nsfw channel.`)
                    msg.channel.send(keywords)
                        .then(() => msg.channel.send(images[random].url))
                }).catch(() => {
                    msg.channel.send(`Some errors have occured. Please type correctly.`)
                });
        }
    } else {
        msg.reply(`Please type correctly. For help type '${prefix}help'`)
    }

}