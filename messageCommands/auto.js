const greeting = require('./greeting.js')

module.exports = function (msg, tokens, prefix, otfn, fetch) {
    if (tokens[0] === 'hi' || tokens[0] === 'hello' || tokens[0] === 'hlw' || tokens[0] === 'Hi' || tokens[0] === 'Hello' || tokens[0] === 'bye' || tokens[0] === 'Goodbye' || tokens[0] === 'GoodBye') {
        greeting(msg, tokens, prefix, otfn)
    } else if (tokens.includes('sex') || tokens.includes('fuck') || tokens.includes('fucking') || tokens.includes('sexy') || tokens.includes('sucking') || tokens.includes('suck') || tokens.includes('horny')) {
        msg.delete();
        msg.reply(`Please, don't use bad words.`)
    }
}