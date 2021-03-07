module.exports = async function (msg, tokens, prefix) {
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
            if (roleArray.length !== 0 && userArray.length !== 0) {
                roleArray.forEach(function (el) {
                    let role = el.id
                    userArray.forEach(function (el) {
                        el.roles.add(role)
                            .then(function () {
                                msg.channel.send(`I've given <@&${role}> role to <@${el.id}>`)
                            })
                            .catch(function () {
                                msg.reply(`I don't have permission to give <@&${role}> role to <@${el.id}>.`)
                            })
                    })
                })
            } else {
                msg.reply(`Make sure to mention the roles and members whom you want to give those roles.`)
            }
        } else {
            msg.reply(`You don't have permission to add, remove or give roles.`)
        }
    } else if (tokens.length >= 4 && tokens[1] === 'remove') {
        if (msg.member.hasPermission('ADMINISTRATOR') || msg.member.hasPermission('MANAGE_ROLES')) {
            let roleArray = msg.mentions.roles.array();
            let userArray = msg.mentions.members.array();
            if (roleArray.length !== 0 && userArray.length !== 0) {
                roleArray.forEach(function (el) {
                    let role = el.id
                    userArray.forEach(function (el) {
                        el.roles.remove(role)
                            .then(function () {
                                msg.channel.send(`I've removed <@&${role}> role from <@${el.id}>`)
                            })
                            .catch(function () {
                                msg.reply(`I don't have permission to remove <@&${role}> role from <@${el.id}>.`)
                            })
                    })
                })
            } else {
                msg.reply(`Make sure to mention the roles and members from whom you want to remove those roles.`)
            }
        } else {
            msg.reply(`You don't have permission to add, remove or give roles.`)
        }
    } else {
        msg.reply(`Please type correctly. For help type '${prefix}help'`)
    }
}