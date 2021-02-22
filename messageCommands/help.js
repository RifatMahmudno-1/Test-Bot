module.exports = function (msg, prefix) {
    msg.channel.send(
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
}