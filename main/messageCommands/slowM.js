module.exports = function (msg, tokens, prefix) {
    if (msg.member.hasPermission('ADMINISTRATOR') || msg.member.hasPermission('MANAGE_CHANNELS')) {
        let keywords;
        if (tokens.length > 3) {
            keywords = tokens.slice(1, tokens.length).join(' ')
        } else {
            keywords = tokens[2]
        }
        if (parseInt(tokens[1]) >= 1) {
            msg.channel.setRateLimitPerUser(parseInt(tokens[1]), reason()).then(on)
        } else if (tokens[1] === 'off' || parseInt(tokens[1]) < 1) {
            msg.channel.setRateLimitPerUser(0, '').then(off)
        } else {
            msg.reply(`Please type correctly. Type '${prefix}slow <time in seconds> <reason>' to enable. Like '${prefix}slow 5 keep quite.' Reason isn't necessary. Type '${prefix}slow off' to disable. For help type '${prefix}help'.`)
        }
    } else {
        msg.reply(`You don't have administrator permission or manage channels permission.`)
    }

    function reason() {
        var aa;
        tokens[2] == true ? aa = keywords : aa = `Because the admin wanted that.`
        return aa;
    }

    function off() {
        msg.channel.send(`Slow mode is now turned off`)
    }

    function on() {
        msg.channel.send(`Slow mode is now enabled and the limitation is one message every ${tokens[1]}s.`)
    }
}