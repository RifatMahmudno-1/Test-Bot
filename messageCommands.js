const prefix = process.env.PREFIX;
const fetch = require('node-fetch')
//messageCommands
//start
const otfn = require('./messageCommands/otherfunctions.js')
const help = require('./messageCommands/help.js')
const gif = require('./messageCommands/gif.js')
const time = require('./messageCommands/time.js')
const clear = require('./messageCommands/clear.js')
const greeting = require('./messageCommands/greeting.js')
const bhf = require('./messageCommands/behalf.js')
const avtcha = require('./messageCommands/avaterChannel.js')
const kickban = require('./messageCommands/kickban.js')
const nickname = require('./messageCommands/nickname.js')
//end
/*commands = {
    help,
    gif,
    time,
    clear,
    greeting,
    bhf,
    avt,
    kickban,
    nickname
}*/

module.exports = async function (msg) {
    let tokens = msg.content.split(' ');
    if (tokens[0].slice(0, 1) === prefix) {
        tokens[0] = tokens[0].substring(1)
        //var command = tokens[0]
        if (tokens[0] === 'admin') {
            msg.channel.send('Admin is <@715938370840166433>')
        } else if (tokens[0] === 'time') {
            time(msg, tokens, prefix, otfn)
        } else if (tokens[0] === 'gif') {
            gif(msg, tokens, fetch)
        } else if (tokens[0] === 'help') {
            help(msg, prefix)
        } else if (tokens[0] === 'clear') {
            clear(msg, tokens)
        } else if (tokens[0] === 'bhf') {
            bhf(msg, tokens, prefix, otfn)
        } else if (tokens[0] === 'avt' || tokens[0] === 'cha') {
            avtcha(msg, tokens, prefix)
        } else if (tokens[0] === 'kick' || tokens[0] === 'ban') {
            kickban(msg, tokens, prefix)
        } else if (tokens[0] === 'snick' || tokens[0] === 'rnick') {
            nickname(msg, tokens)
        }
    }
    if (tokens[0] === 'hi' || tokens[0] === 'hello' || tokens[0] === 'hlw' || tokens[0] === 'Hi' || tokens[0] === 'Hello' || tokens[0] === 'bye' || tokens[0] === 'Goodbye' || tokens[0] === 'GoodBye') {
        greeting(msg, tokens, prefix, otfn)
    }
}