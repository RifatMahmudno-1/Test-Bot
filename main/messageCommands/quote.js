module.exports = function (fetch, Discord, aa, bb) {
    let url = 'https://zenquotes.io/api/random'
    if (bb == undefined) bb = url;
    fetch(bb)
        .then(r => r.json())
        .then(r => {
            let result = r;
            const embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setAuthor(result[0].a)
                .setDescription(`"${result[0].q}"`)
            aa.send(embed)
        })
}