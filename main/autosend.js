const quote = require("./messageCommands/quote")
const fetch = require('node-fetch');
module.exports = function (auto, Discord) {
    var guilds = auto.guilds.cache.map(r => r)

    function Time() {
        let date = new Date();
        var hour = date.getHours()
        return hour
    }

    //quote
    function Quote(guilds) {
        guilds.forEach(function (el) {
            if (Time() + 6 == 18)
                quote(fetch, Discord, el.channels.cache.find(i => i.type === `text`), 'https://zenquotes.io/api/today')
        })
    }
    //greetings
    function Greeting(guilds) {
        guilds.forEach(function (el) {
            var aaa = el.channels.cache.find(i => i.type === `text`);
            if (Time() + 6 == 8) {
                aaa.send(`Good Morning, @everyone. Hope you will have a great day.`)
            } else if (Time() + 6 == 16) {
                aaa.send(`Good Afternoon, <@everyone>.`)
            } else if (Time() + 6 == 18) {
                aaa.send(`Good Evening, <@everyone>.`)
            } else if (Time() + 6 == 23) {
                aaa.send(`Good night, <@everyone>. Now, stop scrolling the internet and go to bed.`)
            }
        })
    }
    //call immediately
    Quote(guilds);
    Greeting(guilds)

    //interval 1 hour
    setInterval(() => {
        guilds = auto.guilds.cache.map(r => r)
        Quote(guilds)
        Greeting(guilds)
    }, 3600000);
}