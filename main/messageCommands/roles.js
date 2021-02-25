module.exports = function (msg, tokens) {
    if (tokens.length == 1) {
        rolemap = msg.guild.roles.cache
            .map(a => a)
        var nameID = [];
        for (var i = 0; i < rolemap.length; i++) {
            let bb = rolemap[i].name
            let cc = rolemap[i].id
            if (bb.slice(0, 1) === "@") {
                bb = bb.substring(1)
            }
            nameID.push(`${bb} => <@&${cc}>`)
        }
        msg.channel.send(nameID)
    } else if (tokens.length >= 4 && tokens[1] === 'add') {
        if (msg.member.hasPermission('ADMINISTRATOR') || msg.member.hasPermission('MANAGE_ROLES')) {
            let roleArray = msg.mentions.roles.array();
            let userArray = msg.mentions.members.array();
            roleArray.forEach(function (el) {
                let role = el.id
                userArray.forEach(function (el) {
                    el.roles.add(role)
                })
            })
        } else {
            msg.reply(`You don't have permission to add, remove or give roles.`)
        }
    } else if (tokens.length >= 4 && tokens[1] === 'remove') {
        if (msg.member.hasPermission('ADMINISTRATOR') || msg.member.hasPermission('MANAGE_ROLES')) {
            let roleArray = msg.mentions.roles.array();
            let userArray = msg.mentions.members.array();
            roleArray.forEach(function (el) {
                let role = el.id
                userArray.forEach(function (el) {
                    el.roles.remove(role)
                })
            })
        } else {
            msg.reply(`You don't have permission to add, remove or give roles.`)
        }
    } else {
        msg.reply(`Please type correctly. For help type '${prefix}help'`)
    }
}