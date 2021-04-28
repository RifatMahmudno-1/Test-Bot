const maan = require('./anilist/manani.js');
const uSEr = require('./anilist/user.js');
const chastuf = require('./anilist/chastuf.js');
const std = require('./anilist/studio.js')
module.exports = function (msg, tokens, fetch, prefix, Discord) {
    if (tokens.length >= 2) {
        let NaMe = tokens.slice(1, tokens.length).join(' ')
        if (tokens[0] === 'a' || tokens[0] === 'anime') {
            maan(msg, fetch, prefix, 'ANIME', NaMe, Discord)
        } else if (tokens[0] === 'm' || tokens[0] === 'manga') {
            maan(msg, fetch, prefix, 'MANGA', NaMe, Discord)
        } else if (tokens[0] === 'anicharacter') {
            chastuf(msg, fetch, prefix, Discord, 'Character', NaMe)
        } else if (tokens[0] === 'aniuser') {
            uSEr(msg, fetch, prefix, Discord, NaMe)
        } else if (tokens[0] === 'anistaff') {
            chastuf(msg, fetch, prefix, Discord, 'Staff', NaMe)
        } else if (tokens[0] === 'anistudio') {
            std(msg, fetch, prefix, Discord, NaMe)
        }
    } else {
        msg.channel.send(`Please type correctly. For help type '${prefix}help'`)
    }
}