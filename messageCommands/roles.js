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
    } else if (tokens.length >= 3) {
        let roleArray = msg.mentions.roles.array();
        let userArray = msg.mentions.members.array();
        roleArray.forEach(function (el) {
            let role = el.id
            userArray.forEach(function (el) {
                el.roles.add(role)
            })
        })
    }
}