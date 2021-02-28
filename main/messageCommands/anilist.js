const Discord = require('discord.js');
module.exports = function (msg, tokens, fetch, prefix) {
    if (tokens.length >= 2 && tokens[0] === 'a' || tokens[0] === 'anime' && tokens.length >= 2) {
        let NaMe = tokens.slice(1, tokens.length).join(' ')
        maan(msg, 'ANIME', NaMe)
    } else if (tokens.length >= 2 && tokens[0] === 'm' || tokens[0] === 'manga' && tokens.length >= 2) {
        let NaMe = tokens.slice(1, tokens.length).join(' ')
        maan(msg, 'MANGA', NaMe)
    } else if (tokens.length >= 2 && tokens[0] === 'c' || tokens[0] === 'character' && tokens.length >= 2) {
        let NaMe = tokens.slice(1, tokens.length).join(' ')
        chastf(msg, NaMe, tokens)
    } else if (tokens.length >= 2 && tokens[0] === 'u' || tokens[0] === 'user' && tokens.length >= 2) {
        let NaMe = tokens.slice(1, tokens.length).join(' ')
        user(msg, NaMe)
    } else if (tokens.length >= 2 && tokens[0] === 'p' || tokens[0] === 'staff' && tokens.length >= 2) {
        let NaMe = tokens.slice(1, tokens.length).join(' ')
        chastf(msg, NaMe, tokens)
    } else {
        msg.channel.send(`Please type correctly. For help type '${prefix}help'`)
    }
    function maan(msg, tYpE, NaMe) {
        var query = `
        query ($search: String, $type: MediaType) {
            Media(search: $search, type: $type, isAdult:false) {
            siteUrl
            title {
                romaji
            }
            coverImage {
                extraLarge
            }
            status(version:2)
            description(asHtml: false)
            averageScore
            genres
        }
    }`;

        var variables = {
            search: NaMe,
            type: tYpE
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
                let all = r.data['Media'];
                let url = all.siteUrl
                let cimg = all['coverImage'].extraLarge
                let tiTle = all['title'].romaji
                let sts = all.status;
                let des = all.description.replace(/<\/?[^>]+(>|$)/g, "");
                let scr = all.averageScore;
                let gen = all.genres;
                const embed = new Discord.MessageEmbed()
                embed.setColor('#0099ff')
                embed.setTitle(tiTle).setURL(url)
                embed.setDescription(des)
                embed.setImage(cimg)
                embed.addFields({
                    name: `Popularity`,
                    value: `${scr}%`,
                    inline: true
                }, {
                    name: `Status`,
                    value: `${sts.toLowerCase()}`,
                    inline: true
                }, {
                    name: `Genres`,
                    value: `${gen}`,
                    inline: true
                })
                msg.channel.send(embed)
            })
            .catch(handleError);
        function handleError() {
            msg.channel.send(`Not found. Try to seach clearly. For help type '${prefix}help'`)
        }
        function handleResponse(response) {
            return response.json().then(function (json) {
                return response.ok ? json : Promise.reject(json);
            });
        }
        /*
        function handleData(data) {
            console.log([data].media);
        }*/
    }
    function chastf(msg, NaMe, tokens) {
        let aaa;
        if (tokens[0] === 'c' || tokens[0] === 'character') { aaa = 'Character' } else if (tokens[0] === 'p' || tokens[0] === 'staff') { aaa = 'Staff' }
        var query =
            `query ($search: String) {
            ${aaa}(search: $search) {
                siteUrl
                name {
                    first
                    last
                }
                image {
                    large
                }
                favourites
                description(asHtml: false)
            }
        }`;

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
                let name12;
                let all = r.data[aaa];
                let url = all.siteUrl
                let img = all['image'].large
                let name1 = all['name'].first
                let name2 = all['name'].last
                let des = all.description;
                let fav = all.favourites
                if (name2 === null) { name12 = `${name1}` } else { name12 = `${name1} ${name2}` }
                const embed = new Discord.MessageEmbed()
                embed.setColor('#0099ff')
                embed.setTitle(name12).setURL(url)
                embed.setDescription(des)
                embed.setImage(img)
                embed.addField('Favourites', `${fav}`)
                msg.channel.send(embed)
            })
            .catch(handleError);
        function handleError() {
            msg.channel.send(`Not found. Try to seach clearly. For help type '${prefix}help'`)
        }

        function handleResponse(response) {
            return response.json().then(function (json) {
                return response.ok ? json : Promise.reject(json);
            });
        }
        /*
        function handleData(data) {
            console.log([data].media);
        }*/
    }
    function user(msg, NaMe) {
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
                msg.channel.send(embed)
            })
            .catch(handleError);
        function handleError() {
            msg.channel.send(`Not found. Try to seach clearly. For help type '${prefix}help'`)
        }

        function handleResponse(response) {
            return response.json().then(function (json) {
                return response.ok ? json : Promise.reject(json);
            });
        }
    }
}