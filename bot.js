const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();
client.login(process.env.TOKEN)
client.on('ready', readyDiscord)

//const keepalive = require('./keepalive')

function readyDiscord() {
    console.log('Application has started');
    //keepalive.alive();
}
const messageCommands = require('./messageCommands');
client.on('message', messageCommands)
const welcome = require('./welcome')
client.on('guildMemberAdd', welcome)
const bye = require('./bye')
client.on('guildMemberRemove', bye)
/*client.on('messageReactionAdd', (reaction, user) => {
    if (reaction.emoji.name === '❌') {
        console.log(user);
    }
});*/