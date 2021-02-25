const greeting = require('./greeting.js')
let emtypes = ['rich', 'image', 'video', 'gifv', 'article', 'link']
let badwords = ['sex', 'fuck', 'fucking', 'sexy', 'sucking', 'suck', 'horny', 'fuckoff', 'fuckup', 'dick', 'ass']
module.exports = function (msg, tokens, prefix, otfn) {
    if (otfn.greew().includes(tokens[0])) {
        greeting(msg, tokens, prefix, otfn)
        msg.react(otfn.reac())
    } else if (badwords.some(ai => tokens.includes(ai))) {
        msg.delete();
        msg.reply(`Please, don't use bad words.`)
    } else if (tokens.includes('like') || tokens.includes('love') || tokens.includes('adore') || tokens.includes('cute')) {
        msg.react(otfn.reac())
    } else if (msg.attachments.size > 0) {
        msg.react(otfn.reac())
    } else if (msg.embeds[0] && emtypes.includes(msg.embeds[0].type)) {
        msg.react(otfn.reac())
    } else {}
}