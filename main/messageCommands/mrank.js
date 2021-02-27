const Discord = require('discord.js');
module.exports = async function (msg, counter, tokens) {
    function rank(aa) {
        let user = aa.id
        if (counter[user].count !== undefined) {
            let total = counter[user].count;
            let nextlvl = Math.ceil(Math.cbrt(counter[user].count))
            let nowlvl = Math.trunc(Math.cbrt(counter[user].count))
            let req = Math.pow(nextlvl, 3);
            let reqnx = req - total;
            let percent = Math.trunc(total * 100 / req) + '%';
            function rraa() {
                var mem = msg.guild.members.cache.map(r => r.id)
                let arrcou = []
                for (var i = 0; i < mem.length; i++) {
                    if (counter[mem[i]] !== undefined) {
                        arrcou.push(counter[mem[i]].count)
                        arrcou = arrcou.sort((a, b) => b - a);
                    }
                }
                return [arrcou.indexOf(total) + 1, mem.length]
            }
            const Embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle(`Rank ${rraa()[0]}`)
                .setAuthor(aa.username, aa.displayAvatarURL())
                .addFields(
                    { name: 'Your level', value: nowlvl, inline: true },
                    { name: 'Total Sent Messages', value: total, inline: true },
                    { name: '\u200B', value: '\u200B', inline: true },
                    { name: `level ${nextlvl} requirement`, value: req, inline: true },
                    { name: 'Required to reach next level', value: reqnx, inline: true },
                    { name: '\u200B', value: '\u200B', inline: true },
                    { name: 'Your progress towards next level', value: percent },
                    { name: 'Your rank', value: rraa()[0] + ' in ' + rraa()[1] },
                )
                .setTimestamp()
                .setDescription('Counting was started from 26-Feb-2021')
            msg.channel.send(Embed)
        } else { msg.channel.send(`@<${user}> hasn't send a single message since 26-Feb-2021 in any of the servers where I'm added.`) }
    }
    if (tokens.length == 1) {
        rank(msg.author)
    } else if (tokens.length > 1) {
        let userArray = msg.mentions.users.array();
        userArray.forEach(function (el) {
            rank(el)
        })
    }

}