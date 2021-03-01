module.exports = function (msg, fetch, prefix, Discord, aaa, NaMe) {
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