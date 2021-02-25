const Discord = require('discord.js');
module.exports = async function (msg, tokens) {
    msg.guild.members.fetch()
        .then(result => {
            let user = result.map(r => r)
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

        })
    /*msg.guild.members.fetch()
        .then(result => {
            let user = result.map(r => r)
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
                .setTitle('Member Details')
            if (tokens.includes(`all`)) {
                for (var i = 0; i < user.length; i++) {
                    embed.addFields({
                        name: `Member`,
                        value: `${Uname[i]}`,
                        inline: true
                    }, {
                        name: `ID`,
                        value: `${Uid[i]}`,
                        inline: true
                    }, {
                        name: `Roles`,
                        value: `${Uroles[i]}`,
                        inline: true
                    })
                }
            } else {
                for (var i = 0; i < user.length; i++) {
                    embed.addFields({
                        name: `Member`,
                        value: `${Uname[i]}`,
                        inline: true
                    }, {
                        name: `Roles`,
                        value: `${Uroles[i]}`,
                        inline: true
                    }, {
                        name: '\u200B',
                        value: '\u200B',
                        inline: true
                    })
                }
            }
            msg.channel.send(embed)
        })
    /*var user = msg.guild.members.cache
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
        .setTitle('Member Details')
    if (tokens.includes(`all`)) {
        for (var i = 0; i < user.length; i++) {
            embed.addFields({
                name: `Member`,
                value: `${Uname[i]}`,
                inline: true
            }, {
                name: `ID`,
                value: `${Uid[i]}`,
                inline: true
            }, {
                name: `Roles`,
                value: `${Uroles[i]}`,
                inline: true
            })
        }
    } else {
        for (var i = 0; i < user.length; i++) {
            embed.addFields({
                name: `Member`,
                value: `${Uname[i]}`,
                inline: true
            }, {
                name: `Roles`,
                value: `${Uroles[i]}`,
                inline: true
            }, {
                name: '\u200B',
                value: '\u200B',
                inline: true
            })
        }
    }
    msg.channel.send(embed)
*/
}