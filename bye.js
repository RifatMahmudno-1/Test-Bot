const fetch = require('node-fetch')
module.exports = async function (mem) {
    var aa = mem.guild.channels.cache.find(i => i.type === `text`);
    aa.send(`<@${mem.id}>, Sorry to see you go.`)
    let url = `https://g.tenor.com/v1/search?q=sad&key=${process.env.TENORAPI}&contentfilter=off`
    let response = await fetch(url);
    let json = await response.json();
    const index = Math.floor(Math.random() * json.results.length)
    aa.send(json.results[index].url);
}