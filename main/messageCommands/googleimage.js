//https://github.com/jimkang/g-i-s
//https://www.npmjs.com/package/google-images
const GoogleImages = require('google-images');
const google = new GoogleImages('0833af6984d7e4422', 'AIzaSyB3nVCwDDSA9Fm-e7u-oG_KmSmqAg6arrM');
module.exports = function (msg, tokens, prefix) {
    if (tokens.length > 1) {
        let keywords = tokens.slice(1, tokens.length).join(' ')
        var random = Math.floor(Math.random() * 10)
        google.search(keywords)
            .then(images => {
                msg.channel.send(keywords).then()
                msg.channel.send(images[random].url)
            }).catch(() => {
                msg.channel.send(`Some errors have occured. Please type correctly.`)
            });
    } else {
        msg.reply(`Please type correctly. For help type '${prefix}help'`)
    }

}
/*
[{
    "url": "http://steveangello.com/boss.jpg",
    "type": "image/jpeg",
    "width": 1024,
    "height": 768,
    "size": 102451,
    "thumbnail": {
        "url": "http://steveangello.com/thumbnail.jpg",
        "width": 512,
        "height": 512
    }
}]
 */