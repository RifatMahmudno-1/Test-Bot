const Discord = require('discord.js');
module.exports = function (msg, counter, tokens) {
    let total = counter[msg.author.id].count;
    let nextlvl = Math.ceil(Math.cbrt(counter[msg.author.id].count))
    let nowlvl = Math.trunc(Math.cbrt(counter[msg.author.id].count))
    let req = Math.pow(nextlvl, 3);
    let reqnx = req - total;
    let percent = Math.trunc(total * 100 / req) + '%';
    const Embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Rank')
        .setAuthor(msg.author.username, msg.author.displayAvatarURL())
        .addFields(
            { name: 'Your level', value: nowlvl, inline: true },
            { name: 'Total Sent Messages', value: total, inline: true },
            { name: '\u200B', value: '\u200B', inline: true },
            { name: `level ${nextlvl} requirement`, value: req, inline: true },
            { name: 'Required to reach next level', value: reqnx, inline: true },
            { name: '\u200B', value: '\u200B', inline: true },
            { name: 'Your progress towards next level', value: percent },
        )
        .setTimestamp()
        .setDescription('Counting was started from 26-Feb-2021')
    msg.channel.send(Embed)
}