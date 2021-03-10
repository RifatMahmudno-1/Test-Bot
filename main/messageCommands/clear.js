module.exports = async function (msg, tokens) {
    if (tokens.length == 1) {
        msg.channel.messages.fetch({
            limit: 2
        }).then(results => {
            msg.channel.bulkDelete(results)
        })
    } else if (msg.member.hasPermission('ADMINISTRATOR') && tokens[1] === 'all') {
        msg.channel.messages.fetch().then(results => {
            msg.channel.bulkDelete(results)
        })
    } else if (tokens[1] >= 1 && tokens[1] <= 5) {
        let xy = parseInt(tokens[1]) + 1
        msg.channel.messages.fetch({
            limit: xy
        }).then(results => {
            msg.channel.bulkDelete(results)
        })
    } else if (msg.member.hasPermission('ADMINISTRATOR') && tokens[1] > 5 && tokens[1] <= 80) {
        let xy = parseInt(tokens[1]) + 1
        msg.channel.messages.fetch({
            limit: xy
        }).then(results => {
            msg.channel.bulkDelete(results)
        })
    } else if(msg.member.hasPermission('ADMINISTRATOR') && tokens[1] > 5 && tokens[1] > 80) {
        msg.reply(`You can only delete maximum of 80 messages at once.`)
    }else{
      msg.reply(`I think you don't have permission to delete lot's of messages. Only admins are permitted.`)
    }
}