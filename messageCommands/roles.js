module.exports = function (msg) {
    /*let rolemap = msg.guild.roles.cache
            .sort((a, b) => b.position - a.position)
            .map(r => r)
            .join(",");
        if (rolemap.length > 1024) rolemap = "To many roles to display";
        if (!rolemap) rolemap = "No roles";
        msg.channel.send(rolemap);*/
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
}