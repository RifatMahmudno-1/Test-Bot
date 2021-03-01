module.exports = function (msg, fetch, prefix, tYpE, NaMe, Discord) {
    var query = `
    query ($search: String, $type: MediaType) {
        Media(search: $search, type: $type, isAdult:false) {
        siteUrl
        title {
            romaji
            english
        }
        coverImage {
            extraLarge
        }
        status(version:2)
        description(asHtml: false)
        averageScore
        genres
        popularity
        favourites
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
            let tiTleE = all['title'].english
            let sts = all.status;
            let des = all.description.replace(/<\/?[^>]+(>|$)/g, "");
            let scr = all.averageScore;
            let fav = all.favourites; let pop = all.popularity;
            let gen = all.genres.join(', ');
            const embed = new Discord.MessageEmbed()
            embed.setColor('#0099ff')
            embed.setTitle(tiTle).setURL(url)
            embed.setDescription(des)
            embed.setImage(cimg)
            embed.addFields({
                name: `Avarge Score`,
                value: `${scr}%`,
                inline: true
            }, {
                name: `popularity`,
                value: pop,
                inline: true
            }, {
                name: `favourites`,
                value: fav,
                inline: true
            }, {
                name: `Status`,
                value: `${sts.toLowerCase()}`,
                inline: true
            }, {
                name: `Genres`,
                value: `${gen}`,
                inline: true
            }, {
                name: `Titles`,
                value: `Romaji- ${tiTle}, 
                English- ${tiTleE}`,
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