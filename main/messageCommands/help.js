//https://www.codegrepper.com/code-examples/javascript/discord.js+embed+builder
module.exports = function (msg, tokens, prefix, Discord) {
    const embed1 = new Discord.MessageEmbed()
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
            value: `'${prefix}'${prefix}clear <number but must be less than 80>'. '${prefix}clear 50' to delete pevious 50 messages.`,
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
            value: `You must type reason in one word. For more than one words, add them with Underscore or hyfen to make it one. '${prefix}kick for_beaking_rules @Rifat @Bot @Helper'=> The bot will kick Rifat, Bot, Helper for for_beaking_rules. You can add more or less members.`,
        }, {
            name: `'${prefix}ban <reason> <days> <mention users> ...'`,
            value: `You must type reason in one word. For more than one words, add them with Underscore or hyfen to make it one. '${prefix}ban for_beaking_rules 3 @Rifat @Bot @Helper'=> The bot will ban Rifat, Bot, Helper for_beaking_rules for 3days. If you don't add days then the bot will ban that member for 1day. You can add more or less members and days.`,
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
        })
    const embed2 = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .addFields({
            name: `'${prefix}mem all'`,
            value: `Type '${prefix}mem all' to get list of all members' name, id and roles.`
        }, {
            name: `'${prefix}mem roles'`,
            value: `Type '${prefix}mem roles' to get list of all members' roles.`
        }, {
            name: `'${prefix}mem names'`,
            value: `Type '${prefix}mem names' to get all members' name.`
        }, {
            name: `'${prefix}mem ids'`,
            value: `Type '${prefix}mem ids' to get all members' id.`
        }, {
            name: `'${prefix}abt'`,
            value: `Type '${prefix}abt' to info about this Guild/Server.`
        }, {
            name: `'${prefix}abt <mention users>'`,
            value: `Type '${prefix}abt <mention users>' to get their info about this guild. Such as- Type '${prefix}abt @Helper @Rifat' to get this bot and Rifat's info. You can add more or less roles and members`
        }, 
        /*{
            name: `'${prefix}rank'`,
            value: `Type '${prefix}rank' to get info about your total sent messages, level and rank etc.`
        }, {
            name: `'${prefix}rank <mention users...>'`,
            value: `Type '${prefix}rank and mention users' to get info about their total sent messages, level and rank etc. such as=> '${prefix}rank @Rifat @Tasfin @Galib'`
        },*/
        {
            name: `'${prefix}a' or '${prefix}anime'`,
            value: `Type '${prefix}a' or '${prefix}anime' to get info of that anime from Anilist. Such as=> ${prefix}anime Death Note'`
        }, {
            name: `'${prefix}m' or '${prefix}manga'`,
            value: `Type '${prefix}m' or '${prefix}manga' to get info of that mange from Anilist. Such as=> ${prefix}manga Death Note'`
        }, {
            name: `'${prefix}c' or '${prefix}character'`,
            value: `Type '${prefix}c' or '${prefix}character' to get info of that character from Anilist. Such as=> ${prefix}c Aqua'`
        }, {
            name: `'${prefix}u' or '${prefix}user'`,
            value: `Type '${prefix}u' or '${prefix}user' to get info of that anilist user. Such as=> ${prefix}user rifatal'`
        }, {
            name: `'${prefix}p' or '${prefix}staff'`,
            value: `Type '${prefix}c' or '${prefix}character' to get info of that person from Anilist. Such as=> ${prefix} Hiroshi Kamiya'`
        }, {
            name: `'${prefix}std' or '${prefix}studio'`,
            value: `Type '${prefix}std' or '${prefix}studio' to get most popular 15 animes of that studio. Such as=> ${prefix}std MAPPA'`
        }, {
            name: `'${prefix}rd <wod>'`,
            value: `You can only get memes or posts on meme, anime, cosplay, thought, wallpaper, art, pic. Like for meme type '${prefix}rd meme'. All the contents are from reddit.`
        }, {
            name: `'${prefix}gimg <search>'`,
            value: `Type '${prefix}gimg' to get first google image from that search and send it. such as- '${prefix}gimg cat' to get a image of cat.`
        }, {
            name: `'${prefix}quote'`,
            value: `Type '${prefix}quote' to get a random quote.`
        }, {
            name: `'${prefix}slow <time in seconds> <reason>'`,
            value: `Type '${prefix}slow <time in seconds> <reason>' to enable. Like '${prefix}slow 5 because I wanted that.' to limit one message every 5 seconds. Reason isn't necessary.`
        }, {
            name: `'${prefix}slow 0' or '${prefix}slow off'`,
            value: `Type '${prefix}slow 0' or '${prefix}slow off' to disable slow mode.`
        })
        .addField('Automated', 'Bot will autimatically respond if someone types hi, hello, hlw, bye, Goodbye or any offensive words. Bot will autimatically respond if someone is added or kicked or banned from this server. Bot will autimatically react to certain messages. Bot will automatic send quotes and wishes.', false)
        .addField('Reaction info', 'In those messages where bot has reacted ❌, there if you click on that reaction and increase the number then the message will be deleted. After 8second the bot will auto remove that emoji.', false)
        .addField('Add this bot in your server', `[Click and authorize pemission to add this bot in your server](https://discord.com/api/oauth2/authorize?client_id=812537560030117928&permissions=8&scope=bot)`, false)

        .setFooter('Have a nice time');
    if (tokens[1] === 'here') {
        msg.channel.send(embed1)
        msg.channel.send(embed2)
    } else {
        if (msg.channel.id !== '813476929268351007') {
            msg.reply(`Check. You have received a message from me. Everything is written there.`)
        }
        msg.author.send(embed1);
        msg.author.send(embed2);
    }
}