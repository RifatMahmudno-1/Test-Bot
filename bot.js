const express = require("express");
const app = express();
const port = 3000;
var aliive = 0;

function aliivee() {
    aliive += 1;
    app.get("/", (req, res) => res.send(`Keep Alive!--->> ${aliive}`));
    return aliive;
}
setInterval(() => {
    aliivee()
}, 300000);
aliivee();

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

function time() {
    var date = new Date();
    var hour = date.getHours() + 6;
    var minute = date.getMinutes();
    var ampm;
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

function tim(a) {
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

function greeting() {
    var date = new Date();
    var hour = date.getHours();
    var greet
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

function gff(a, b) {
    str = a.content.slice(0, b);
    return str;
}

function gii(a, b) {
    sub = a.content.substring(b);
    return sub;
}

async function gotMessage(msg) {
    if (msg.content === '/admin') {
        msg.channel.send('Admin is <@715938370840166433>')
    } else if (msg.content === '/time') {
        msg.channel.send(`It's ${time()[0]}:${time()[1]} ${time()[2]} now in GMT'+6'`)
    } else if (msg.content === '/Hi' || msg.content === '/Hello' || msg.content === '/hi' || msg.content === '/hello') {
        msg.reply(greeting())
    } else if (gff(msg, 4) === '/gif') {
        var keywords = gii(msg, 5);
        //keywords = keywords.substring(5);
        let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORAPI}&limit=8`
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length)
        msg.reply(json.results[index].url);
    } else if (msg.content === '/help') {
        msg.channel.send(
            `Type '/time' to get time of GMT+6
            '/hi' or '/hello' or '/Hi' or '/Hello' for greetings
            '/gif <search>' for gif
            '/time<GMT>' such as '/time+6' or 'time+8' etc to get your timezone's time.`
        )
    } else if (gff(msg, 5) === '/time') {
        var aa = parseFloat(gii(msg, 5))
        msg.channel.send(`It's ${tim(aa)[0]}:${tim(aa)[1]} ${tim(aa)[2]} now in GMT '${aa}'`)
    }
}