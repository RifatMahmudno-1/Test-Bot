const quote = require("./messageCommands/quote")
const fetch = require('node-fetch');
module.exports = function (auto, Discord) {
    var guilds = auto.guilds.cache.map(r => r)
    guilds.forEach(function (el) {
        if (el.voice && el.voice.channel) {
            el.voice.channel.join();
            el.voice.channel.leave();
        }
    })

    function Time() {
        let date = new Date();
        var hour = date.getHours();
        var minute = date.getMinutes();
        return [hour, minute]
    }

    //quote
    function Quote(guilds) {
        guilds.forEach(function (el) {
            if (Time()[0] + 6 == 18)
                quote(fetch, Discord, el.channels.cache.find(i => i.type === `text`), 'https://zenquotes.io/api/today', `Today's Quote ➡➡➡`)
        })
    }

    //greetings
    function Greeting(guilds) {
        guilds.forEach(function (el) {
            var aaa = el.channels.cache.find(i => i.type === `text`);
            if (Time()[0] + 6 == 8) {
                aaa.send(`Good Morning, everyone. Hope you will have a great day.`)
            } else if (Time()[0] + 6 == 16) {
                aaa.send(`Good Afternoon, everyone.`)
            } else if (Time()[0] + 6 == 18) {
                aaa.send(`Good Evening, everyone.`)
            } else if (Time()[0] + 6 == 24) {
                aaa.send(`Good night, everyone. Now, stop scrolling the internet and go to bed. Don't worry. I'll stay awake on yout behalf for this server's safety.`).then(r => r.react('😁'))
            }
        })
    }

    //interval 1 minute
    let minINT = setInterval(() => {
        if (Time()[1] >= 2 && Time()[1] <= 20) {
            //Greeting(guilds);
            Quote(guilds);
            hourINT(); //start hourINT
            clearInterval(minINT) //clear minINT
        }
    }, 60000);

    //interval 1 hour
    function hourINT() {
        setInterval(() => {
            guilds = auto.guilds.cache.map(r => r)
            //Greeting(guilds);
            Quote(guilds);
        }, 3600000);
    }
}