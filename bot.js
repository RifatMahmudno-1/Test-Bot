/*const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Keep Alive!"));

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);
/*--------------------------------------*/
const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();
const fetch = require('node-fetch')
client.login(process.env.TOKEN)

client.on('ready', readyDiscord)

function readyDiscord() {
    console.log('me');
}

client.on('message', gotMessage)

function time(a) {
    var date = new Date();
    var hour = date.getHours() + a;
    var minute = date.getMinutes();
    var ampm
    if (hour >= 24) {
        hour = (hour - 24)
    }
    if (hour >= 12) {
        ampm = 'pm'
    } else if (hour >= 0) {
        ampm = 'am'
    }
    if (hour > 12) {
        hour = (hour - 12)
    } else if (hour == 0) {
        hour = 12
    }
    return [hour, minute, ampm];
}

function greeting(a) {
    var date = new Date();
    var hour = date.getHours() + a;
    var greet = 'hello';
    if (hour >= 24) {
        hour = (hour - 24)
    }
    if (hour >= 0 && hour < 7) {
        greet = 'Good Night'
    } else if (hour >= 7 && hour < 12) {
        greet = 'Good Morning'
    } else if (hour >= 12 && hour <= 16) {
        greet = 'Good Afternoon'
    } else if (hour > 16 && hour <= 18) {
        greet = 'Good Evening'
    } else if (hour >= 19 && hour <= 23) {
        greet = 'Good Night'
    }
    return greet
}
/*
function gff(a, b) {
    str = a.content.slice(0, b);
    return str;
}

function gii(a, b) {
    sub = a.content.substring(b);
    return sub;
}*/
function del(msg) {
    msg.channel.messages.fetch({
        limit: 1
    }).then(results => {
        msg.channel.bulkDelete(results)
    })
}
const prefix = process.env.PREFIX;
async function gotMessage(msg) {
    let tokens = msg.content.split(' ');
    if (tokens[0].slice(0, 1) == prefix) {
        tokens[0] = tokens[0].substring(1)
        if (tokens[0] === 'admin') {
            msg.channel.send('Admin is <@715938370840166433>')
        } else if (tokens[0] === 'hi' || tokens[0] === 'hello') {
            if (tokens.length == 1) {
                let aa = 6;
                msg.reply(greeting(aa))
            } else if (tokens.length == 2) {
                let aa = parseFloat(tokens[1])
                msg.reply(greeting(aa))
            } else {
                msg.reply(`Type correctly. For help type '${prefix}help'`)
            }
        } else if (tokens[0] === 'gif') {
            let keywords = 'cute anime girl'
            if (tokens.length > 1) {
                keywords = tokens.slice(1, tokens.length).join(' ')
            }
            let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORAPI}&contentfilter=off`
            let response = await fetch(url);
            let json = await response.json();
            const index = Math.floor(Math.random() * json.results.length)
            msg.reply(json.results[index].url);
        } else if (tokens[0] === 'help') {
            msg.channel.send(
                `**Type**
            **(1)** '${prefix}hi' or '${prefix}hello' for greetings according to GMT+6
            **(2)** '${prefix}hi <GMT>' or '${prefix}hello <GMT>' for greetings according to provided GMT such as '${prefix}hi +3' '${prefix}hello -5'
            **(3)** '${prefix}gif <search>' for gif such as '${prefix}gif dog' '${prefix}gif cute kitten'
            **(4)** '${prefix}time' to get time of GMT+6
            **(5)** '${prefix}time <GMT>' such as '${prefix}time +6' or '${prefix}time +8' etc to get your timezone's time.
            **(6)** '${prefix}clear' to delete previous message. It has some other functionality that only administrators are allowed to perform.
            **(7)** if you type '${prefix}bhf <@mension> <Type your text>' then the bot will say on your behalf. Such as- '${prefix}bhf  @Rifat is admin' etc.
            **(8)** if you type '${prefix}avt' then the bot will reply your avatar.
            **(9)** if you type '${prefix}avt @mention @mention ...' then the bot will reply their avater.
            **(10)** if you type '${prefix}cha <channel name> <Your message>' then the bot will send that message to that specific channel. Such as- '${prefix}cha general How are you??' etc..
            **(11)** type '${prefix}kick <reason in one word. For more words join them by hyfen or underscore> <Mention them whom you want to kick>'. Such as-'${prefix}kick for_testing_purpose @Rifat @Anilist Bot @My Test'
            ** (12) ** type '${prefix}ban <reason in one word. For more words join them by hyfen or underscore> <Mention them whom you want to ban>'.Such as - '${prefix}ban for_testing_purpose @Rifat @Anilist Bot @My Test'
            **(13)** type '${prefix}snick <mention user whose nickname you want to change> <nickname>'. Such as- '${prefix}snick @Rifat admin' or, '${prefix}snick @Rifat admin @My test BOT' etc.. 
            **(14)**type '${prefix}rnick <mention user which nickname you want to remove>'. Such as- '${prefix}rnick @admin @BOT' etc..
            `
            )
        } else if (tokens[0] === 'time') {
            if (tokens.length == 1) {
                let aa = 6
                msg.channel.send(`It's ${time(aa)[0]}:${time(aa)[1]} ${time(aa)[2]} now in GMT '${aa}'`)
            } else if (tokens.length == 2) {
                let aa = parseFloat(tokens[1])
                msg.channel.send(`It's ${time(aa)[0]}:${time(aa)[1]} ${time(aa)[2]} now in GMT '${aa}'`)
            } else {
                msg.reply(`Type correctly. For help type '${prefix}help'`)
            }
        } else if (tokens[0] === 'clear') {
            if (tokens.length == 1) {
                let xy = 2
                msg.channel.messages.fetch({
                    limit: xy
                }).then(results => {
                    msg.channel.bulkDelete(results)
                })
            } else if (msg.member.hasPermission('ADMINISTRATOR') && tokens[1] === 'all') {
                msg.channel.messages.fetch().then(results => {
                    msg.channel.bulkDelete(results)
                })
            } else if (msg.member.hasPermission('ADMINISTRATOR') && tokens.length == 2) {
                let xy = parseInt(tokens[1]) + 1
                msg.channel.messages.fetch({
                    limit: xy
                }).then(results => {
                    msg.channel.bulkDelete(results)
                })
            }
        } else if (tokens[0] === 'bhf') {
            if (tokens.length <= 2) {
                msg.reply(`Type correctly. For help type '${prefix}help'`)
            } else if (tokens.length >= 3) {
                del(msg)
                let aa = tokens.slice(2, tokens.length).join(' ')
                msg.channel.send(tokens[1] + ' ' + aa)
            }
        } else if (tokens[0] === 'avt') {
            if (tokens.length == 1) {
                msg.reply(msg.author.displayAvatarURL() + '?size=2048');
            } else if (tokens.length > 1) {
                let userArray = msg.mentions.users.array();
                userArray.forEach(function (el) {
                    msg.reply(el.displayAvatarURL() + '?size=2048');
                })
            }
        } else if (tokens[0] === 'cha') {
            let chann = msg.guild.channels.cache;
            let arrname = [];
            let arrid = [];
            let channelsArray = chann.array();
            for (var i = 3; i < channelsArray.length; i++) {
                arrname.push(channelsArray[i].name);
                arrid.push(channelsArray[i].id);
            }
            if (arrname.includes(tokens[1]) == true) {
                var index = arrname.indexOf(tokens[1])
                var idd = arrid[index]
                var keywords = tokens.slice(2, tokens.length).join(' ')
                chann.get(idd).send(`${keywords}`);
            } else {
                msg.reply(`Type Correctly. For help type '${prefix}help'`)
            }
        } else if (tokens[0] === 'kick') {
            if (msg.member.hasPermission('ADMINISTRATOR') || msg.member.hasPermission('KICK_MEMBERS')) {
                if (tokens.length > 1) {
                    let userArray = msg.mentions.users.array();
                    userArray.forEach(function (el) {
                        msg.guild.members.cache.get(el.id).kick()
                        msg.channel.send(`${el.username} was kicked from this server successfully ${tokens[1]}.`)
                    })
                } else {
                    msg.reply(`Type correctly. For help type '${prefix}help'`)
                }
            } else {
                msg.reply(`You don't have permission to kick any user.`)
            }
        } else if (tokens[0] === 'ban') {
            if (msg.member.hasPermission('ADMINISTRATOR') || msg.member.hasPermission('KICK_MEMBERS')) {
                if (tokens.length > 1) {
                    let userArray = msg.mentions.users.array();
                    userArray.forEach(function (el) {
                        msg.channel.send(`${el.username} was banned from this server successfully ${tokens[1]}.`)
                        msg.guild.members.cache.get(el.id).ban()
                    })
                } else {
                    msg.reply(`Type correctly. For help type '${prefix}help'`)
                }
            } else {
                msg.reply(`You don't have permission to ban any user.`)
            }
        } else if (tokens[0] === 'snick') {
            if (msg.member.hasPermission('ADMINISTRATOR') || msg.member.hasPermission('CHANGE_NICKNAME')) {
                let userArray = msg.mentions.users.array();
                let count = 0;
                for (var i = 0; i < userArray.length; i++) {
                    count += 2
                    msg.guild.members.cache.get(userArray[i].id).setNickname(tokens[count])
                    msg.channel.send(`I've set the nickname of ${userArray[i].username} to ${tokens[count]}`)
                }
            } else {
                msg.reply(`You don't have permission to change nicknames.`)
            }
        } else if (tokens[0] === 'rnick') {
            if (msg.member.hasPermission('ADMINISTRATOR') || msg.member.hasPermission('CHANGE_NICKNAME')) {
                let userArray = msg.mentions.users.array();
                for (var i = 0; i < userArray.length; i++) {
                    msg.guild.members.cache.get(userArray[i].id).setNickname(' ')
                    msg.channel.send(`I've removed the nickname of ${userArray[i].username}`)
                }
            } else {
                msg.reply(`You don't have permission to reset nicknames.`)
            }
        }
    }
}