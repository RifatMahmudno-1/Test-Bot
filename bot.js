const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();
client.login(process.env.TOKEN)
client.on('ready', readyDiscord)

const keepalive = require('./keepalive')

function readyDiscord() {
    console.log('me');
    //keepalive.alive();
}
const messageCommands = require('./messageCommands');
client.on('message', messageCommands)