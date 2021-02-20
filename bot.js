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
    var hour = date.getHours();
    var minute = date.getMinutes();
    var ampm;
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
    str = a.content;
    str = str.slice(0, b);
    return str;
}
async function gotMessage(msg) {
    //individual function
    gff(msg, 4);
    //------------------------------------------------------------
    if (msg.content === '/name') {
        msg.reply('Rifat')
    } else if (msg.content === '/time') {
        msg.reply(`It's ${time()[0]}:${time()[1]} ${time()[2]} now`)
        //msg.channel.send(`It's ${time()[0]}:${time()[1]} ${time()[2]} now`)
    } else if (msg.content === 'Hi' || msg.content === 'Hello' || msg.content === 'hi' || msg.content === 'hello') {
        msg.reply(greeting())
    } else if (str === '/gif') {
        var keywords = msg.content;
        keywords = keywords.substring(5);
        let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORAPI}&limit=8`
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length)
        msg.reply(json.results[index].url);
    } else if (msg.content === '/help') {
        msg.channel.send(
            `Type '/time' to get time
            '/hi' or '/hello' for greetings
            '/gif <search> for gif'`
        )
    }
}