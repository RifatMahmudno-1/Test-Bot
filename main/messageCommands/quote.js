module.exports = function (fetch, Discord, aa, bb, cc) {
    let url = 'https://zenquotes.io/api/random'
    if (bb == undefined) bb = url;
    if (cc == undefined || cc == null) cc='A random quote. ➡➡➡'
    aa.send(cc).then(()=>{
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
          .catch(()=>{console.log('Error has occured in Quote.')})
    })
}