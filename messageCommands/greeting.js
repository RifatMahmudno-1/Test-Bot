module.exports = function (msg, tokens, prefix, otfn) {
    if (tokens[0] === 'hi' || tokens[0] === 'hello' || tokens[0] === 'hlw' || tokens[0] === 'Hi' || tokens[0] === 'Hello') {
        if (tokens.length == 1) {
            let user = msg.member.id;
            msg.channel.send(`${otfn.greeting(6)} <@${user}>. Have a great time.`)
        } else if (tokens.length >= 2 && isNaN(parseFloat(tokens[1])) == false) {
            let user = msg.member.id;
            let time = parseFloat(tokens[1]);
            msg.channel.send(`${otfn.greeting(time)} <@${user}>. Have a great time.`)
        } else {
            let user = msg.member.id;
            msg.channel.send(`<@${user}>, please type correctly. For help type ${prefix}help.`)
        }
    } else if (tokens[0] === 'bye' || tokens[0] === 'Goodbye' || tokens[0] === 'GoodBye') {
        let user = msg.member.id;
        msg.channel.send(`GoodBye.. <@${user}>. Hope to see you soon.`)
    }

}