module.exports = async function (msg, mongoose, tokens, Discord, lvl) {
    const guild = `${msg.guild.name} --> ${msg.guild.id}`
    const format = require('./format.js')
    const maindb = mongoose.model(guild, format(mongoose))

    function rank(aa) {
        let User = aa.id;
        let user = `${User}`
        maindb.findById(user).then(async avail => {
            if (avail !== null) {
                const allUser = await maindb.find();
                let total;
                if (aa.id === msg.author.id) {
                    total = avail.count + 1;
                } else {
                    total = avail.count
                }
                //main
                let Invpow = Math.fround(Math.pow(total, 1 / lvl))
                let nextlvl = Math.ceil(Invpow)
                let nowlvl = Math.trunc(Invpow)
                let nowlvlms = Math.pow(nowlvl, lvl);
                let req = Math.pow(nextlvl, lvl); //nxt lvl target
                let nextlvlms = req - nowlvlms //already sent message
                let reqnx = req - total; //more needed to reach nxt
                let percent = Math.trunc((total - nowlvlms) * 100 / nextlvlms);
                if (isNaN(percent) == true) {
                    percent = 100;
                }

                function rraa() {
                    let aaa = total;
                    let sortmem = []; //big-small
                    let rankpos = [];
                    for (var i = 0; i < allUser.length; i++) {
                        sortmem.push(allUser[i].count)
                    }
                    sortmem = sortmem.sort((a, b) => b - a);
                    for (var i = 0; i < sortmem.length; i++) {
                        if (nowlvl === Math.trunc(Math.fround(Math.pow(sortmem[i], 1 / lvl)))) {
                            rankpos.push(Math.fround(Math.pow(sortmem[i], 1 / lvl)))
                        }
                    }
                    if (sortmem.indexOf(aaa) === -1) {
                        aaa = aaa - 1;
                    }
                    return [rankpos.indexOf(Math.fround(Math.pow(aaa, 1 / lvl))) + 1, rankpos.length, sortmem.indexOf(aaa) + 1, sortmem.length]
                }
                let other = rraa()
                const Embed = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle(`Level:${nowlvl},    Rank:${other[0]}`)
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
                        value: percent + '%',
                        inline: true
                    }, {
                        name: 'Your rank',
                        value: other[0] + ' in ' + other[1],
                        inline: true
                    }, {
                        name: 'Your rank among all the perticipated members',
                        value: other[2] + ' in ' + other[3],
                        inline: true
                    })
                    .setTimestamp()
                    .setDescription('Counting was started from 01-March-2021');
                msg.channel.send(Embed)
            } else {
                msg.channel.send(`<@${User}> hasn't sent a single message in this server since I've joined or that user is a Bot..`)
            }
        }).catch((err) => console.log(err))
    }
    if (tokens.length === 1) {
        rank(msg.author)
    } else if (tokens.length > 1) {
        let userArray = msg.mentions.users.array();
        userArray.forEach(function (el) {
            rank(el)
        })
    }
    delete mongoose.connection.models[guild]
}