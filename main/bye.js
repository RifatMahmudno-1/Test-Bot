const fetch = require('node-fetch')
module.exports = async function (memAdd, Discord) {
    var aa = memAdd.guild.channels.cache.find(i => i.type === `text`);
    let dname = memAdd.user.username;
    let avater = `https://cdn.discordapp.com/avatars/${memAdd.user.id}/${memAdd.user.avatar}.webp?size=2048`
    let uname = `${memAdd.user.username}%23${memAdd.user.discriminator}`
    let bye = `https://shot.screenshotapi.net/screenshot?&url=https%3A%2F%2Ftest-bot.rifatno1.repl.co%2F&width=700&height=200&output=json&file_type=webp&image_quality=99&css=%20%20%20%20%40import%20url('https%3A%2F%2Ffonts.googleapis.com%2Fcss2%3Ffamily%3DSignika%26display%3Dswap')%3B%0A%0A%20%20%20%20*%20%7B%0A%20%20%20%20%20%20%20%20margin%3A%200%3B%0A%20%20%20%20%20%20%20%20padding%3A%200%3B%0A%20%20%20%20%20%20%20%20box-sizing%3A%20border-box%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20.main%20%7B%0A%20%20%20%20%20%20%20%20height%3A%20200px%3B%0A%20%20%20%20%20%20%20%20width%3A%20700px%3B%0A%20%20%20%20%20%20%20%20display%3A%20grid%3B%0A%20%20%20%20%20%20%20%20grid-template-columns%3A%20200px%20500px%3B%0A%20%20%20%20%20%20%20%20justify-items%3A%20center%3B%0A%20%20%20%20%20%20%20%20align-items%3A%20center%3B%0A%20%20%20%20%20%20%20%20background%3A%20linear-gradient(90deg%2C%20rgb(8%2C%202%2C%2063)%2C%20rgb(53%2C%201%2C%2050))%3B%0A%20%20%20%20%20%20%20%20font-size%3A%2022px%3B%0A%20%20%20%20%20%20%20%20font-family%3A%20'Signika'%2C%20sans-serif%3B%0A%20%20%20%20%20%20%20%20color%3A%20%23fff%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20.ima%20%7B%0A%20%20%20%20%20%20%20%20height%3A%20180px%3B%0A%20%20%20%20%20%20%20%20width%3A%20180px%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20img%20%7B%0A%20%20%20%20%20%20%20%20object-fit%3A%20cover%3B%0A%20%20%20%20%20%20%20%20height%3A%20100%25%3B%0A%20%20%20%20%20%20%20%20border-radius%3A%2050%25%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20.txt%20%7B%0A%20%20%20%20%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20%20%20%20%20height%3A%20100%25%3B%0A%20%20%20%20%20%20%20%20display%3A%20grid%3B%0A%20%20%20%20%20%20%20%20grid-template-rows%3A%20auto%20auto%20auto%3B%0A%20%20%20%20%20%20%20%20align-items%3A%20center%3B%0A%20%20%20%20%20%20%20%20padding%3A%202.5%25%204%25%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20span%20%7B%0A%20%20%20%20%20%20%20%20color%3A%20aqua%3B%0A%20%20%20%20%7D&custom_html=%3Cdiv%20class%3D%22main%22%3E%0A%20%20%20%20%3Cdiv%20class%3D%22ima%22%3E%3Cimg%20src%3D%22${avater}%22%20alt%3D%22Image%20couldn't%20be%20found%2F%20loaded.%22%3E%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%20class%3D%22txt%22%3E%0A%20%20%20%20%20%20%20%20%3Ch3%3E%20%3Cspan%3E${dname}%3C%2Fspan%3E%20has%20left%20the%20server.%20%F0%9F%98%A2%3C%2Fh3%3E%0A%20%20%20%20%20%20%20%20%3Ch4%3EUSERNAME%3A%20%3Cspan%3E${uname}%3C%2Fspan%3E%3C%2Fh4%3E%0A%20%20%20%20%20%20%20%20%3Ch4%3EHope%20to%20see%20you%20soon.%3C%2Fh4%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%3C%2Fdiv%3E`
    fetch(bye)
        .then(r => r.json())
        .then(r => {
            aa.send(new Discord.MessageAttachment(r.screenshot))
        })
}