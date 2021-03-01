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
    function count(aaa) {
        let math;
        if (Math.trunc(user.length / aaa) == 0) {
            math = 1
        } else {
            math = Math.trunc(user.length / aaa)
        }
        return math
    }
    if (tokens.length == 1) {
        msg.reply(`Type '${prefix}mem all' to get all members name, id and roles. Type '${prefix}mem names' to get all members 'names. Type '${prefix}mem roles' to get all members roles. Type '${prefix}mem ids' to get all members ids. But total member shouldn't be more than 500.`)
    } else if (user.length <= 500 && tokens.length == 2) {
        if (tokens.includes('all') && user.length <= 100) {
            let arra = [];
            var abc = user.length;
            let jkl = -1;
            for (var xyz = 0; xyz < count(8); xyz++) {
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
            for (var xyz = 0; xyz < count(8); xyz++) {
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
            let arra = [];
            var abc = user.length;
            let jkl = -1;
            for (var xyz = 0; xyz < count(20); xyz++) {
                if (abc >= 20) {
                    bb = 20
                    arra.push(bb)
                    abc = abc - 20
                    let sendArr = [];
                    for (var sdf = 0; sdf < arra[xyz]; sdf++) {
                        jkl += 1
                        sendArr.push(`Member: ${Uname[jkl]}, Role: ${Uroles[jkl]}`)
                    }
                    msg.channel.send(sendArr)
                }
                if (abc < 20) {
                    arra.push(abc)
                    let sendArr = [];
                    for (var sdf = 0; sdf < abc; sdf++) {
                        jkl += 1
                        sendArr.push(`Member: ${Uname[jkl]}, Role: ${Uroles[jkl]}`)
                    }
                    msg.channel.send(sendArr)
                }
            }
        } else if (tokens.includes('names')) {
            let arra = [];
            var abc = user.length;
            let jkl = -1;
            for (var xyz = 0; xyz < count(100); xyz++) {
                if (abc >= 100) {
                    bb = 100
                    arra.push(bb)
                    abc = abc - 100
                    let sendArr = [];
                    for (var sdf = 0; sdf < arra[xyz]; sdf++) {
                        jkl += 1;
                        sendArr.push(Uname[jkl])
                    }
                    let all = sendArr.join(', ')
                    msg.channel.send(all)
                }
                if (abc < 100) {
                    arra.push(abc)
                    let sendArr = [];
                    for (var sdf = 0; sdf < abc; sdf++) {
                        jkl += 1;
                        sendArr.push(Uname[jkl])
                    }
                    let all = sendArr.join(', ')
                    msg.channel.send(all)
                }
            }
        } else if (tokens.includes('ids')) {
            let arra = [];
            var abc = user.length;
            let jkl = -1;
            for (var xyz = 0; xyz < count(20); xyz++) {
                if (abc >= 20) {
                    bb = 20
                    arra.push(bb)
                    abc = abc - 20
                    let sendArr = [];
                    for (var sdf = 0; sdf < arra[xyz]; sdf++) {
                        jkl += 1
                        sendArr.push(`Member: ${Uname[jkl]}, ID: ${Uid[jkl]}`)
                    }
                    msg.channel.send(sendArr)
                }
                if (abc < 20) {
                    arra.push(abc)
                    let sendArr = [];
                    for (var sdf = 0; sdf < abc; sdf++) {
                        jkl += 1
                        sendArr.push(`Member: ${Uname[jkl]}, ID: ${Uid[jkl]}`)
                    }
                    msg.channel.send(sendArr)
                }
            }
        } else {
            msg.reply(`Please type correctly. For help type '${prefix}help'`)
        }
    } else { msg.channel.send('You have more then 500 members. If you run this command then it will send more then 50 messages. That is why you cannot run this command.') }

}