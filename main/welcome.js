const fetch = require('node-fetch')
module.exports = async function (memAdd) {
    var aa = memAdd.guild.channels.cache.find(i => i.type === `text`);
    aa.send(`Everyone please welcome <@${memAdd.id}> in our server. Hope you will have a great time with us.>`)
    let url = `https://g.tenor.com/v1/search?q=welcome&key=${process.env.TENORAPI}&contentfilter=off`
    let response = await fetch(url);
    let json = await response.json();
    const index = Math.floor(Math.random() * json.results.length)
    aa.send(json.results[index].url);
}