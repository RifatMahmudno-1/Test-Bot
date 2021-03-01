module.exports = async function (msg, tokens, fetch) {
    let keywords = 'cute anime girl'
    if (tokens.length > 1) {
        keywords = tokens.slice(1, tokens.length).join(' ')
    }
    let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORAPI}&contentfilter=off`
    let response = await fetch(url);
    let json = await response.json();
    const index = Math.floor(Math.random() * json.results.length)
    msg.reply(json.results[index].url).then(r => r.react('❌'));
}