module.exports = function (msg, fetch, prefix, Discord, NaMe) {
    var query = `
    query ($search: String) {
    User(name: $search) {
        name
        siteUrl
        avatar {
        large
        }
        about(asHtml: false)
        statistics {
        anime {
            minutesWatched
            meanScore
            episodesWatched
            count
        }
        manga {
            chaptersRead
            meanScore
            count
        }
        }
    }
    }
`;

    var variables = {
        search: NaMe
    };

    var url = 'https://graphql.anilist.co',
        options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: query,
                variables: variables
            })
        };

    fetch(url, options).then(handleResponse)
        .then(r => {
            let all = r.data['User'];
            let url = all.siteUrl
            let img = all['avatar'].large
            let Name = all.name
            var desp, des;
            if (all.about === null) {
                des = `Description wasn't provided.`
            } else {
                desp = all.about.replace(/[\\~]/g, '').split(' ')
                des = [];
                if (desp.length >= 80) {
                    for (var i = 0; i < 80; i++) {
                        des.push(desp[i])
                    }
                    des.push('... ... ...')
                    des = des.join(' ')
                } else if (desp.length < 80) {
                    for (var i = 0; i < desp.length; i++) {
                        des.push(desp[i])
                    }
                    des = des.join(' ')
                }
            }
            let stat = all['statistics']
            let ani = stat['anime'].minutesWatched
            let ascr = stat['anime'].meanScore
            let aepi = stat['anime'].episodesWatched
            let acount = stat['anime'].count;
            let man = stat['manga'].chaptersRead;
            let mscr = stat['manga'].meanScore;
            let mcount = stat['manga'].count;
            const embed = new Discord.MessageEmbed()
            embed.setColor('#0099ff')
            embed.setTitle(Name).setURL(url)
            embed.setDescription(des)
            embed.setImage(img)
            embed.addFields({
                name: `Anime Watched:`,
                value: `${Math.round(ani / 60)} hours`,
                inline: true
            }, {
                name: `Episode Watched:`,
                value: `${aepi}`,
                inline: true
            }, {
                name: `Mean Score:`,
                value: `${ascr}`,
                inline: true
            }, {
                name: `Title watched`,
                value: `${acount}`,
                inline: true
            }, {
                name: `\u200B`,
                value: '\u200B',
                inline: true
            }, {
                name: `\u200B`,
                value: '\u200B',
                inline: true
            })
            embed.addFields({
                name: `Manga Read:`,
                value: `${man} chapters`,
                inline: true
            }, {
                name: `Title Read:`,
                value: `${mcount}`,
                inline: true
            }, {
                name: `Mean Score:`,
                value: `${mscr}`,
                inline: true
            })
            msg.channel.send(embed).then(r => r.react('❌'))
        })
        .catch(handleError);
    function handleError() {
        msg.channel.send(`Not found. Try not to make any spelling mistakes and type clearly. For help type '${prefix}help'`)
    }

    function handleResponse(response) {
        return response.json().then(function (json) {
            return response.ok ? json : Promise.reject(json);
        });
    }
}