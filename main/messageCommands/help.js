const Discord = require('discord.js');
//https://www.codegrepper.com/code-examples/javascript/discord.js+embed+builder
module.exports = function (msg, tokens, prefix) {
    const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Help')
        .setAuthor('My Test', 'https://cdn.discordapp.com/avatars/812537560030117928/c9e5292e1ef8e3d41f5265e2d3c9be58.webp')
        .addFields({
            name: `'${prefix}help here'`,
            value: `The bot will send the help text in this channel. If you don't add here then the bot will send help text in you messages.`
        }, {
            name: `'${prefix}hi', '${prefix}hello, '${prefix}hlw' or 'hi', 'hello, 'hlw'`,
            value: `Get welcome text according to GMT +6`
        }, {
            name: `'hi <GMT>', 'hello <GMT>','hlw <GMT>' or '${prefix}hi <GMT>', '${prefix}hello <GMT>','${prefix}hlw <GMT>' `,
            value: `Get welcome text according to provided timezone <GMT>.'Hi +5' or '${prefix}Hi +5' => Get text according to GMT +5.'Hi -2' or '${prefix}Hi -2' => Get text according to GMT -2.`
        }, {
            name: `'${prefix}gif'`,
            value: `Get a random anime gif.`,
        }, {
            name: `'${prefix}gif <search>'`,
            value: `Get a random gif from your search. '${prefix}gif cute kitten'=> to get a cute kitten gif.`,
        }, {
            name: `'${prefix}time'`,
            value: `'${prefix}time' to get time of to GMT+6.`,
        }, {
            name: `'${prefix}time <GMT>'`,
            value: ` Get time according to provided <GMT> . '${prefix}time +2' to get time of GMT +2. '${prefix}time -3' to get time of GMT -3.'`,
        }, {
            name: `'${prefix}clear'`,
            value: `'${prefix}clear' to delete previous message.`,
        }, {
            name: `'${prefix}clear <how many>'`,
            value: `'${prefix}'${prefix}clear <number but must be less than 100>'. '${prefix}clear 50' to delete pevious 50 messages.`,
        }, {
            name: `'${prefix}clear all'`,
            value: `Delete previous several messages.`,
        }, {
            name: `'${prefix}bhf <Type your text>'`,
            value: `The bot will send your text. '${prefix}bhf I'm well' => The bot will send I'm well`,
        }, {
            name: `'${prefix}avt'`,
            value: `The bot will send your avatar. If you type '${prefix}avt @mention @mention ...' then the bot will reply their avaters one by one.`,
        }, {
            name: `'${prefix}avt <mention users> ...'`,
            value: `The bot will send all the mentioned user's avater. '${prefix}avt @Rifat @Helper'=> The bot will send Rifat and Helper's avater. You can add more or less members.`,
        }, {
            name: `'${prefix}cha <channel name> <Your message>'`,
            value: `The bot will send Your message to that specific channel. '${prefix}cha general How are you??' => The bot will send "How are you in general channel"`,
        }, {
            name: `'${prefix}kick <reason> <mention users> ...'`,
            value: `You must type reason in one word. For more than one words, add them with Underscore or hyfen to make it one. '${prefix}kick for_testing_purpose @Rifat @Bot @Helper'=> The bot will kick Rifat, Bot, Helper for for_testing_purpose. You can add more or less members.`,
        }, {
            name: `'${prefix}ban <reason> <mention users> ...'`,
            value: `You must type reason in one word. For more than one words, add them with Underscore or hyfen to make it one. '${prefix}ban for_testing_purpose @Rifat @Bot @Helper'=> The bot will ban Rifat, Bot, Helper for_testing_purpose. You can add more or less members.`,
        }, {
            name: `'${prefix}snick <mention> <nickname> <mention> <nickname>...'`,
            value: `You must type each member's nickname in one word. '${prefix}snick @Rifat dev'=> The bot will set Rifat's nickname Devloper. '${prefix}snick @Rifat dev @MBOT helper' => The bot will set Rifat's nickname Devloper and MBOT's nickname helper. You can add nicknames to more or less members.`,
        }, {
            name: `'${prefix}rnick <mention users> ...'`,
            value: `Mention users whose nickname you want to remove. '${prefix}rnick @Rifat @MBOT' => The bot will remove their nicknames. You can add more or less members.`,
        }, {
            name: `'${prefix}roles'`,
            value: `Type '${prefix}roles' to get all the role names.`,
        }, {
            name: `'${prefix}roles add <mantion roles> ... <mantion members> ...'`,
            value: `Type '${prefix}roles add <mantion roles> <mantion users>' to give them those roles. Type '${prefix}roles add @moderator @bot @Rifat @Alex' to give Rifat and Alex the moderator and bot roles. You can add more or less roles and member.`,
        }, {
            name: `'${prefix}roles remove <mantion roles> ... <mantion members> ...'`,
            value: `Type '${prefix}roles remove <mantion roles> <mantion users>' to give them those roles. Type '${prefix}roles remove @moderator @bot @Rifat @Alex' to give Rifat and Alex the moderator and bot roles. You can add more or less roles and member.`,
        }, {
            name: `'${prefix}mem all'`,
            value: `Type '${prefix}mem all' to get list of all members' name, id and roles.`
        }, {
            name: `'${prefix}mem roles'`,
            value: `Type '${prefix}mem roles' to get list of all members' roles.`
        }, {
            name: `'${prefix}mem names'`,
            value: `Type '${prefix}mem names' to get all members' name.`
        }, {
            name: `'${prefix}abt'`,
            value: `Type '${prefix}abt' to info about this Guild/Server.`
        }, {
            name: `'${prefix}abt <mention users>'`,
            value: `Type '${prefix}abt <mention users>' to get their info about this guild. Such as- Type '${prefix}abt @Helper @Rifat' to get this bot and Rifat's info. You can add more or less roles and members`
        })
        .addField('Automated', 'Bot will autimatically respond if someone types hi, hello, hlw, bye, Goodbye or any offensive words. Bot will autimatically respond if someone is added or kicked or banned from this server. Bot will autimatically react to certain messages', false)

        .setDescription('Administrator or specific permissions such as kick, ban, nickname edit, manage roles etc are needed for some functions.')
        .setFooter('Have a nice time');
    if (tokens[1] === 'here') {
        msg.channel.send(embed)
    } else {
        if (msg.channel.id !== '813476929268351007') {
            msg.reply(`Check. You have received a message from me. Everything is written there.`)
        }
        msg.author.send(embed);
    }
}
/*msg.channel.send(
        
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
    msg.channel.send(`
    **(1) and (2)** also works without '${prefix}'.
    Bot will autimatically respond if someone types hi, hello, hlw, bye, Goodbye etc.
    `)
    const embed = new Discord.MessageEmbed()
    .setTitle('Help')

msg.channel.send(embed)*/