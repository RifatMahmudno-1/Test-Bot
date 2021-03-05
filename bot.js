const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();
client.login(process.env.TOKEN)
client.on('ready', readyDiscord)

const keepalive = require('./main/keepalive')
function readyDiscord() {
    console.log('Application has started');
    client.user.setPresence({
        activity: {
            name: `Help others`,
            type: 0
        }
    })
        keepalive.alive();
}
const messageCommands = require('./main/messageCommands');
client.on('message', messageCommands)
const welcome = require('./main/welcome')
client.on('guildMemberAdd', welcome)
const bye = require('./main/bye')
client.on('guildMemberRemove', bye)
client.on("error", () => { client.login(token) });
const reactionAdd = require('./main/reaction')
client.on('messageReactionAdd', reactionAdd)