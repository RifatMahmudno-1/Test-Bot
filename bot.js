const express = require("express");
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
    var greet
    if (hour >= 24) {
        hour = (hour - 24)
    }
    if (hour >= 12 && hour < 16) {
        greet = 'Good Noon'
    } else if (hour >= 16 && hour < 18) {
        greet = 'Good Afternoon'
    } else if (hour >= 18 && hour < 20) {
        greet = 'Good Evening'
    } else if (hour >= 20 && hour <= 23) {
        greet = 'Good Night'
    } else if (hour >= 0 && hour < 6) {
        greet = 'Good Night'
    } else if (hour >= 6 && hour < 12) {
        greet = 'Good Morning'
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

async function gotMessage(msg) {
    let tokens = msg.content.split(' ');

    if (tokens[0] === '/admin') {
        msg.channel.send('Admin is <@715938370840166433>')
    } else if (tokens[0] === '/hi' || tokens[0] === '/hello') {
        if (tokens.length == 1) {
            let aa = 6;
            msg.reply(greeting(aa))
        } else if (tokens.length == 2) {
            let aa = parseFloat(tokens[1])
            msg.reply(greeting(aa))
        } else {
            msg.reply(`Type correctly. For help type /help`)
        }
    } else if (tokens[0] === '/gif') {
        let keywords = 'cute anime girl'
        if (tokens.length > 1) {
            keywords = tokens.slice(1, tokens.length).join(' ')
        }
        let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORAPI}&contentfilter=off`
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length)
        msg.reply(json.results[index].url);
    } else if (tokens[0] === '/help') {
        msg.channel.send(
            `**Type**
            **(1)**'/hi' or '/hello' for greetings accoeding to GMT+6
            **(2)**'/hi <GMT>' or '/hello <GMT>' for greetings accoeding to provided GMT such as '/hi +3' '/hello -5'
            **(3)**'/gif <search>' for gif such as '/gif dog' '/gif cute kitten'
            **(4)**'/time' to get time of GMT+6
            **(5)**'/time <GMT>' such as '/time +6' or '/time +8' etc to get your timezone's time.`
        )
    } else if (tokens[0] === '/time') {
        if (tokens.length == 1) {
            let aa = 6
            msg.channel.send(`It's ${time(aa)[0]}:${time(aa)[1]} ${time(aa)[2]} now in GMT '${aa}'`)
        } else if (tokens.length == 2) {
            let aa = parseFloat(tokens[1])
            msg.channel.send(`It's ${time(aa)[0]}:${time(aa)[1]} ${time(aa)[2]} now in GMT '${aa}'`)
        } else {
            msg.reply(`Type correctly. For help type /help`)
        }
    }
}