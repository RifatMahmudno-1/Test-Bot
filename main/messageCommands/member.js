const Discord = require('discord.js');
module.exports = function (msg, tokens, prefix) {
    var user = msg.guild.members.cache
        .map(r => r);
    let Uname = [];
    let Uid = [];
    let Uroles = [];

    for (var i = 0; i < user.length; i++) {
        Uname.push(`<@${user[i].id}>`)
        Uid.push(user[i].id)
        Uroles.push(user[i]._roles)
        if (Uroles[i].length == undefined || Uroles[i].length == 0) {
            Uroles[i].push(`<@& No Roles>`)
        }
        for (var a = 0; a < Uroles[i].length; a++) {
            if (Uroles[i][a].slice(0, 3) !== '<@&') {
                Uroles[i][a] = (`<@&${Uroles[i][a]}>`)
            }
        }
    }
    const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Member Details');
    if (tokens.length == 1) {
        msg.reply(`Type '${prefix}mem all' to get all members name, id and roles. Type '${prefix}mem names' to get all members 'names. Type '${prefix}mem roles' to get all members roles.`)
    }
    if (tokens.includes('all') && user.length <= 100) {
        let arra = [];
        var abc = user.length;
        let jkl = -1;
        for (var xyz = 0; xyz < Math.round(user.length / 8); xyz++) {
            if (abc >= 8) {
                bb = 8
                arra.push(bb)
                abc = abc - 8
                for (var sdf = 0; sdf < arra[xyz]; sdf++) {
                    jkl += 1
                    embed.addFields({
                        name: `Member`,
                        value: `${Uname[jkl]}`,
                        inline: true
                    }, {
                        name: `ID`,
                        value: `${Uid[jkl]}`,
                        inline: true
                    }, {
                        name: `Roles`,
                        value: `${Uroles[jkl]}`,
                        inline: true
                    })
                }
                msg.channel.send(embed)
            }
            if (abc < 8) {
                arra.push(abc)
                for (var sdf = 0; sdf < abc; sdf++) {
                    jkl += 1
                    embed.addFields({
                        name: `Member`,
                        value: `${Uname[jkl]}`,
                        inline: true
                    }, {
                        name: `ID`,
                        value: `${Uid[jkl]}`,
                        inline: true
                    }, {
                        name: `Roles`,
                        value: `${Uroles[jkl]}`,
                        inline: true
                    })
                }
                msg.channel.send(embed)
            }
        }
    } else if (tokens.includes('all') && user.length > 100) {
        let sendArr = [];
        for (var i = 0; i < user.length; i++) {
            sendArr.push(`Member: ${Uname[i]}, ID: ${Uid[i]}, Roles: ${Uroles[i]}`)
        }
        msg.channel.send(sendArr)
    } else if (tokens.includes('roles') && user.length <= 100) {
        let arra = [];
        var abc = user.length;
        let jkl = -1;
        for (var xyz = 0; xyz < Math.round(user.length / 8); xyz++) {
            if (abc >= 8) {
                bb = 8
                arra.push(bb)
                abc = abc - 8
                const embed = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle('Member Details')
                for (var sdf = 0; sdf < arra[xyz]; sdf++) {
                    jkl += 1
                    embed.addFields({
                        name: `Member`,
                        value: `${Uname[jkl]}`,
                        inline: true
                    }, {
                        name: `Roles`,
                        value: `${Uroles[jkl]}`,
                        inline: true
                    }, {
                        name: `\u200B`,
                        value: '\u200B',
                        inline: true
                    })
                }
                msg.channel.send(embed)
            }
            if (abc < 8) {
                arra.push(abc)
                const embed = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle('Member Details')
                for (var sdf = 0; sdf < abc; sdf++) {
                    jkl += 1
                    embed.addFields({
                        name: `Member`,
                        value: `${Uname[jkl]}`,
                        inline: true
                    }, {
                        name: `Roles`,
                        value: `${Uroles[jkl]}`,
                        inline: true
                    }, {
                        name: `\u200B`,
                        value: '\u200B',
                        inline: true
                    })
                }
                msg.channel.send(embed)
            }
        }
    } else if (tokens.includes('roles') && user.length > 100) {
        let sendArr = [];
        for (var i = 0; i < user.length; i++) {
            sendArr.push(`Member: ${Uname[i]}, Roles: ${Uroles[i]}`)
        }
        msg.channel.send(sendArr)
    } else if (tokens.includes('names')) {
        let all = Uname.join(', ')
        msg.channel.send(all)
    } else if (tokens.includes('ids')) {
        let sendArr = [];
        for (var i = 0; i < user.length; i++) {
            sendArr.push(`Member: ${Uname[i]}=> ID: ${Uid[i]}`)
        }
        msg.channel.send(sendArr);
    } else if (tokens.length >= 2) {
        `Please type correctly. For help type '${prefix}help'`
    }

}