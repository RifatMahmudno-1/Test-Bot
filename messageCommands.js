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
const auto = require('./messageCommands/auto.js')
const roles = require('./messageCommands/roles.js')


module.exports = async function (msg) {
    let tokens = msg.content.split(' ');
    if (msg.channel.id !== '813476929268351007' && !msg.author.bot) {
        //for Discord Server
        if (tokens[0].slice(0, 1) === prefix) {
            //command
            tokens[0] = tokens[0].substring(1)
            if (tokens[0] === 'hi' || tokens[0] === 'hello' || tokens[0] === 'hlw' || tokens[0] === 'Hi' || tokens[0] === 'Hello' || tokens[0] === 'bye' || tokens[0] === 'Goodbye' || tokens[0] === 'GoodBye') {
                greeting(msg, tokens, otfn)
                msg.react(otfn.reac())
            } else if (tokens[0] === 'time') {
                time(msg, tokens, prefix, otfn)
                msg.react(otfn.reac())
            } else if (tokens[0] === 'gif') {
                gif(msg, tokens, fetch)
                msg.react(otfn.reac())
            } else if (tokens[0] === 'help') {
                help(msg, tokens, prefix)
                msg.react(otfn.reac())
            } else if (tokens[0] === 'clear') {
                clear(msg, tokens)
            } else if (tokens[0] === 'bhf') {
                bhf(msg, tokens, prefix, otfn)
            } else if (tokens[0] === 'avt' || tokens[0] === 'cha') {
                avtcha(msg, tokens, prefix)
                msg.react(otfn.reac())
            } else if (tokens[0] === 'kick' || tokens[0] === 'ban') {
                kickban(msg, tokens, prefix)
            } else if (tokens[0] === 'snick' || tokens[0] === 'rnick') {
                nickname(msg, tokens)
            } else if (tokens[0] === 'roles') {
                roles(msg, tokens)
                msg.react(otfn.reac())
            } else {
                msg.reply(`If you want me to help you with anything then type correctly. For help type ${prefix}help`)
            }
        } else {
            auto(msg, tokens, prefix, otfn, fetch)
        }
    } else if (msg.channel.id === '813476929268351007' && !msg.author.bot) {
        //For DMChannels
        if (tokens[0].slice(0, 1) !== prefix) {
            if (tokens[0] === 'gif') {
                gif(msg, tokens, fetch)
                msg.react(otfn.reac())
            } else if (tokens[0] === 'help') {
                help(msg, prefix)
                msg.react(otfn.reac())
            } else if (tokens[0] === 'avt') {
                avtcha(msg, tokens, prefix)
                msg.react(otfn.reac())
            } else if (tokens[0] === 'time') {
                time(msg, tokens, prefix, otfn)
                msg.react(otfn.reac())
            } else {
                msg.channel.send(`You can't use this command here. You can only use gif, help, avt, time command here.`)
                msg.react(otfn.reac())
            }
        } else if (tokens[0].slice(0, 1) === prefix && msg.channel.id === '813476929268351007' && !msg.author.bot) {
            tokens[0] = tokens[0].substring(1)
            if (tokens[0] === 'gif') {
                gif(msg, tokens, fetch)
                msg.react(otfn.reac())
            } else if (tokens[0] === 'help') {
                help(msg, prefix)
                msg.react(otfn.reac())
            } else if (tokens[0] === 'avt') {
                avtcha(msg, tokens, prefix)
                msg.react(otfn.reac())
            } else if (tokens[0] === 'time') {
                time(msg, tokens, prefix, otfn)
                msg.react(otfn.reac())
            } else {
                msg.channel.send(`You can't use this command here. You can only use '${prefix}gif', '${prefix}help', '${prefix}avt', '${prefix}time' command here.`)
                msg.react(otfn.reac())
            }
        }
    }
}