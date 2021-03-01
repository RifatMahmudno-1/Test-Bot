module.exports = function (msg, fetch, prefix, Discord, NaMe) {
    var query =
        `query ($search: String) {
        Studio(search: $search) {
            id
            name
            siteUrl
            favourites
            media (isMain: true, sort: POPULARITY_DESC, perPage: 15) {
                nodes {
                    siteUrl
                    title {
                        romaji
                    }
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
            let all = r.data['Studio'];
            let nAmE = all.name;
            let url = all.siteUrl;
            let fav = all.favourites;
            let aniurl = all['media']['nodes'].map(r => r.siteUrl)
            let aniname = all['media']['nodes'].map(r => r['title'].romaji)
            const embed = new Discord.MessageEmbed()
            embed.setColor('#0099ff')
            embed.setTitle(`Popular Animes of '${nAmE}' Studio`)
            for (var i = 0; i < aniname.length; i++) {
                embed.addField(aniname[i], `[${aniname[i]}](${aniurl[i]})`, true)
            }
            embed.addField(`Favourites`, fav, true)
            embed.addField(`Studio`, `[${nAmE}](${url})`, true)
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
    /*
    function handleData(data) {
        console.log([data].media);
    }*/
}