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

    function devide(num, div, sendd) {
        let mArray = [];
        times = Math.ceil(num / div)
        for (var i = 0; i < times; i++) {
            if (num > div) {
                mArray.push(div)
                num = num - div
            } else {
                mArray.push(num)
            }
        }
        let count = -div - 1;
        for (var i = 0; i < mArray.length; i++) {
            count += div
            sendd(mArray[i], count)
        }
    }
    if (tokens.length == 1) {
        msg.reply(`Type '${prefix}mem all' to get all members name, id and roles. Type '${prefix}mem names' to get all members 'names. Type '${prefix}mem roles' to get all members roles. Type '${prefix}mem ids' to get all members ids. But total member shouldn't be more than 500.`)
    } else {
        if (tokens[1] === 'names') {
            function sendd(value, count) {
                let bigarr = [];
                for (var i = 0; i < value; i++) {
                    count++;
                    bigarr.push(Uname[count])
                }
                joinnames = bigarr.join(', ')
                msg.channel.send(joinnames)
            }
            devide(user.length, 100, sendd)
        } else if (user.length <= 100) {
            if (tokens[1] === 'all') {
                function sendd(value, count) {
                    const embed = new Discord.MessageEmbed()
                        .setColor('#0099ff')
                        .setTitle('Member Details')
                    for (var i = 0; i < value; i++) {
                        count++;
                        embed.addFields({
                            name: `Member`,
                            value: `${Uname[count]}`,
                            inline: true
                        }, {
                            name: `Ids`,
                            value: `${Uid[count]}`,
                            inline: true
                        }, {
                            name: `Roles`,
                            value: `${Uroles[count]}`,
                            inline: true
                        })
                    }
                    msg.channel.send(embed)
                }
                devide(user.length, 8, sendd)
            } else if (tokens[1] === 'roles') {
                function sendd(value, count) {
                    const embed = new Discord.MessageEmbed()
                        .setColor('#0099ff')
                        .setTitle('Member Details')
                    for (var i = 0; i < value; i++) {
                        count++;
                        embed.addFields({
                            name: `Member`,
                            value: `${Uname[count]}`,
                            inline: true
                        }, {
                            name: `Roles`,
                            value: `${Uroles[count]}`,
                            inline: true
                        }, {
                            name: `\u200B`,
                            value: '\u200B',
                            inline: true
                        })
                    }
                    msg.channel.send(embed)
                }
                devide(user.length, 8, sendd)
            } else if (tokens[1] === 'ids') {
                function sendd(value, count) {
                    const embed = new Discord.MessageEmbed()
                        .setColor('#0099ff')
                        .setTitle('Member Details')
                    for (var i = 0; i < value; i++) {
                        count++;
                        embed.addFields({
                            name: `Member`,
                            value: `${Uname[count]}`,
                            inline: true
                        }, {
                            name: `Roles`,
                            value: `${Uid[count]}`,
                            inline: true
                        }, {
                            name: `\u200B`,
                            value: '\u200B',
                            inline: true
                        })
                    }
                    msg.channel.send(embed)
                }
                devide(user.length, 8, sendd)
            } else {
                msg.reply(`Please type correctly. For help type '${prefix}help' or '${prefix}mem'`)
            }
        } else if (user.length <= 500) {
            if (tokens[1] === 'all') {
                function sendd(value, count) {
                    let bigarr = [];
                    for (var i = 0; i < value; i++) {
                        count++;
                        bigarr.push(`Member: ${Uname[count]}, ID: ${Uid[count]}, Roles: ${Uroles[count]}`)
                    }
                    msg.channel.send(bigarr)
                }
                devide(user.length, 20, sendd)
            } else if (tokens[1] === 'roles') {
                function sendd(value, count) {
                    let bigarr = [];
                    for (var i = 0; i < value; i++) {
                        count++;
                        bigarr.push(`Member: ${Uname[count]}, Roles: ${Uroles[count]}`)
                    }
                    msg.channel.send(bigarr)
                }
                devide(user.length, 25, sendd)
            } else if (tokens[1] === 'ids') {

                function sendd(value, count) {
                    let bigarr = [];
                    for (var i = 0; i < value; i++) {
                        count++;
                        bigarr.push(`Member: ${Uname[count]}, ID: ${Uid[count]}`)
                    }
                    msg.channel.send(bigarr)
                }
                devide(user.length, 25, sendd)
            } else {
                msg.reply(`Please type correctly. For help type '${prefix}help' or '${prefix}mem'. But because of haning more than 100 members in your server the messages won't be formatted.`)
            }
        } else {
            msg.channel.send(`You have more then 500 members. If you run this command then it will send more then 50 messages. That is why you cannot run this command. You can only run '${prefix}mem names' to get a list of all members of your server. For help type '${prefix}help'`)
        }
    }

}