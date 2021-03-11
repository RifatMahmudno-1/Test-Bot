module.exports = function (msg, tokens, Discord) {
    let userArray = msg.mentions.users.array();
    if (userArray.length >= 1) {
        userArray.forEach(function (el) {
            const embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
            let userdtl = msg.guild.members.cache.find(i => i.id === (`${el.id}`))
            ban = userdtl.bannable;
            dname = userdtl.displayName;
            joinedat = userdtl.guild.joinedAt;
            jointimestamp = userdtl.guild.joinedTimestamp;
            id = userdtl.id;
            kick = userdtl.kickable;
            nick = userdtl.nickname;
            role = userdtl._roles;
            for (var i = 0; i < role.length; i++) {
                role[i] = (`<@&${role[i]}>`)
            }
            preS = userdtl.presence.status;
            embed.setTitle(`${dname}'s details:`);
            embed.addFields({
                name: 'Name',
                value: dname,
                inline: true
            }, {
                name: 'Banable',
                value: ban,
                inline: true
            }, {
                name: 'Kickable',
                value: kick,
                inline: true
            }, {
                name: 'ID',
                value: id,
                inline: true
            }, {
                name: 'Nickname',
                value: nick,
                inline: true
            }, {
                name: 'Status',
                value: preS,
                inline: true
            }, {
                name: 'Join Date',
                value: joinedat,
                inline: true
            }, {
                name: 'Join Timestamp',
                value: jointimestamp,
                inline: true
            }, {
                name: 'Roles',
                value: role.join(', '),
                inline: true
            })
            msg.channel.send(embed)
        })
    } else if (tokens.length == 1) {
        const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
        Gname = msg.guild.name;
        Gid = msg.guild.id;
        Gcdate = msg.guild.createdAt;
        Groles = msg.guild.roles.cache.map(a => a.id);
        for (var i = 0; i < Groles.length; i++) {
            Groles[i] = (`<@&${Groles[i]}>`)
        }
        Gchan = msg.guild.channels.cache.map(a => a.name);

        embed.setTitle(`${Gname}'s details:`);
        embed.addFields({
            name: 'Name',
            value: Gname,
            inline: true
        }, {
            name: 'ID',
            value: Gid,
            inline: true
        }, {
            name: 'Guild Create Date',
            value: Gcdate,
            inline: true
        }, {
            name: 'All Roles',
            value: Groles.join(', '),
            inline: true
        }, {
            name: 'All Channels',
            value: Gchan.join(', '),
            inline: true
        })
        msg.channel.send(embed)
    }

}