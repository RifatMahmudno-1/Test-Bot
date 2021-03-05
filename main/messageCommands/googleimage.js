const Discord = require('discord.js');
const gis = require('g-i-s');
module.exports = function (msg, tokens) {
    let keywords = tokens.slice(1, tokens.length).join(' ')
    gis(keywords, logResults);

    function logResults(error, results) {
        if (error) {
            msg.channel.send('Some errors have occured. Try again.')
        } else {
            var image = JSON.stringify(results[0].url, null, '  ')
            image = image.replace(/["]/g, '')
            const atta = new Discord.MessageAttachment()
            atta.setFile(image)
            msg.channel.send(keywords, atta)
        }
    }
}