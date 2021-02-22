module.exports = async function (msg, tokens) {
    if (tokens.length == 1) {
        let xy = 2
        msg.channel.messages.fetch({
            limit: xy
        }).then(results => {
            msg.channel.bulkDelete(results)
        })
    } else if (msg.member.hasPermission('ADMINISTRATOR') && tokens[1] === 'all') {
        msg.channel.messages.fetch().then(results => {
            msg.channel.bulkDelete(results)
        })
    } else if (msg.member.hasPermission('ADMINISTRATOR') && tokens.length >= 2) {
        let xy = parseInt(tokens[1]) + 1
        msg.channel.messages.fetch({
            limit: xy
        }).then(results => {
            msg.channel.bulkDelete(results)
        })
    }
}