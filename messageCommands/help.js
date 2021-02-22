const Discord = require('discord.js');
//https://www.codegrepper.com/code-examples/javascript/discord.js+embed+builder
module.exports = function (msg, prefix) {
    const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Help')
        .setAuthor('My Test', 'https://cdn.discordapp.com/avatars/812537560030117928/c9e5292e1ef8e3d41f5265e2d3c9be58.webp')
        .setDescription('Use it in the perfect way.')
        .addFields({
            name: `'hi', 'hello, 'hlw' `,
            value: ` type 'hi <GMT>', 'hello <GMT>','hlw <GMT>' to get welcome text according to your timezone. Such as 'hi +5' or 'hello -6' etc. Otherwise it will respond according to GMT +6 timezone.`
        }, {
            name: `'${prefix}gif'`,
            value: `${prefix}gif <search>' for gif such as '${prefix}gif dog' '${prefix}gif cute kitten'`,
        }, {
            name: `'${prefix}time'`,
            value: `'${prefix}time' to get time accoding to GMT+6. To get time according to your time zone type '${prefix}time <GMT>'. Such as '${prefix}time +6', '${prefix}time -3'`,
        }, {
            name: `'${prefix}clear'`,
            value: `'${prefix}clear' to delete previous message.
            It has some other functionality that only administrators are allowed to perform. Such as- Type '${prefix}clear <number but must be less than 100.>' => Type '${prefix}clear 50' to delete pevious 50 messages. Type '${prefix}clear all' to delete previous several messages.`,
        }, {
            name: `'${prefix}bhf'`,
            value: `If you type '${prefix}bhf <@mension> <Type your text>' then the bot will say on your behalf. Such as- '${prefix}bhf  @Rifat I'm well' etc.`,
        }, {
            name: `'${prefix}avt'`,
            value: `if you type '${prefix}avt' then the bot will send your avatar. If you type '${prefix}avt @mention @mention ...' then the bot will reply their avaters one by one.`,
        }, {
            name: `'${prefix}cha'`,
            value: `If you type '${prefix}cha <channel name> <Your message>' then the bot will send that message to that specific channel. Such as- '${prefix}cha general How are you??' etc..`,
        }, {
            name: `'${prefix}kick'`,
            value: `Type '${prefix}kick <reason in one word. For more words join them by hyfen or underscore> <Mention them whom you want to kick>'. Such as-'${prefix}kick for_testing_purpose @Rifat @Anilist Bot @My Test'`,
        }, {
            name: `'${prefix}ban'`,
            value: `Type '${prefix}ban <reason in one word. For more words join them by hyfen or underscore> <Mention them whom you want to kick>'. Such as-'${prefix}ban for_testing_purpose @Rifat @Anilist Bot @My Test'`,
        }, {
            name: `'${prefix}snick'`,
            value: `Type '${prefix}snick <mention user whose nickname you want to change> <nickname>'. Such as- '${prefix}snick @Rifat dev' or, '${prefix}snick @Rifat dev @My test BOT' etc.. `,
        }, {
            name: `'${prefix}rnick'`,
            value: `Type '${prefix}rnick <mention user which nickname you want to remove>'. Such as- '${prefix}rnick @admin @BOT' etc..`,
        })
        .addField('Automated', 'Bot will autimatically respond if someone types hi, hello, hlw, bye, Goodbye etc.', false)
        .setFooter('Have a nice time');

    msg.channel.send(embed);
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