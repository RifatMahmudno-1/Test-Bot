const Discord = require('discord.js');
module.exports = async function (msg, counter, tokens) {
    let guild = `${msg.guild.name} --> ${msg.guild.id}`

    function rank(aa) {
        let user = aa.id
        //------------------
        function allmem(aa) {
            return counter[guild].filter(obj => {
                return (obj.user === aa)
            })
        }
        var already = allmem(user)
        var ccc = counter[guild].indexOf(already[0])
        //----------------------
        if (counter[guild][ccc] !== undefined) {
            let total = counter[guild][ccc].count;
            let nextlvl = Math.ceil(Math.cbrt(counter[guild][ccc].count))
            let nowlvl = Math.trunc(Math.cbrt(counter[guild][ccc].count))
            let nowlvlms = Math.pow(nowlvl, 3);
            let req = Math.pow(nextlvl, 3);
            let nextlvlms = req - nowlvlms
            let reqnx = req - total;
            let percent = Math.trunc((total - nowlvlms) * 100 / nextlvlms);
            if(isNaN(percent)==true){
              percent=100;
            }

            function rraa() {
                let sortmem = [];
                let rankpos = [];
                for (var i = 0; i < counter[guild].length; i++) {
                    sortmem.push(counter[guild][i].count)
                }
                sortmem = sortmem.sort((a, b) => b - a);
                for (var i = 0; i < sortmem.length; i++) {
                    if (nowlvl == Math.trunc(Math.cbrt(sortmem[i]))) {
                        rankpos.push(Math.cbrt(sortmem[i]))
                    }
                }
                return [rankpos.indexOf(Math.cbrt(counter[guild][ccc].count)) + 1, rankpos.length, sortmem.indexOf(total) + 1, sortmem.length];
            }

            const Embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle(`Level:${nowlvl},    Rank:${rraa()[0]}`)
                .setAuthor(aa.username, aa.displayAvatarURL())
                .addFields({
                    name: 'Your level',
                    value: nowlvl,
                    inline: true
                }, {
                    name: 'Total Sent Messages',
                    value: total,
                    inline: true
                }, {
                    name: '\u200B',
                    value: '\u200B',
                    inline: true
                }, {
                    name: `level ${nextlvl} requirement`,
                    value: req,
                    inline: true
                }, {
                    name: 'Required to reach next level',
                    value: reqnx,
                    inline: true
                }, {
                    name: 'Your progress',
                    value: percent+'%',
                    inline: true
                }, {
                    name: 'Your rank',
                    value: rraa()[0] + ' in ' + rraa()[1],
                    inline: true
                }, {
                    name: 'Your rank among all the perticipated members',
                    value: rraa()[2] + ' in ' + rraa()[3],
                    inline: true
                })
                .setTimestamp()
                .setDescription('Counting was started from 26-Feb-2021')
            msg.channel.send(Embed)
        } else {
            msg.channel.send(`<@${user}> hasn't send a single message since 26-Feb-2021 in any of the servers where I'm added.`)
        }
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