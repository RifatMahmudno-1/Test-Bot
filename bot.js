//https://cloud.mongodb.com/v2#/org/60599c11c01d53693cf02ce0/projects
require('dotenv').config();
const Discord = require('discord.js');
//for mongodb
const mongoose = require('mongoose')
const dbURL = process.env.MONGODB;
//mongo end
const client = new Discord.Client();
client.login(process.env.TOKEN)
client.on('ready', readyDiscord)
const autosend = require('./main/autosend')

const keepalive = require('./main/keepalive')

function readyDiscord() {
    console.log('Application has started');
    //for mongodb
    mongoose.connect(dbURL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false
        })
        .then(() => console.log(`Connected to DB`))
        .catch((err) => console.log(err))
    //mongo end
    client.user.setPresence({
        activity: {
            name: `Help others`,
            type: 0
        }
    })
    autosend(client, Discord)
    keepalive();
}
const messageCommands = require('./main/messageCommands');
client.on('message', msg => {
    messageCommands(msg, mongoose, Discord)
})
const welcome = require('./main/welcome')
client.on('guildMemberAdd', welcome)
const bye = require('./main/bye')
client.on('guildMemberRemove', bye)
client.on("error", () => {
    client.login(process.env.TOKEN)
});
const reactionAdd = require('./main/reaction')
client.on('messageReactionAdd', reactionAdd)