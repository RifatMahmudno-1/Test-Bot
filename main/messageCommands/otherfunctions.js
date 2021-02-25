/*
function gff(a, b) {
    str = a.content.slice(0, b);
    return str;
}

function gii(a, b) {
    sub = a.content.substring(b);
    return sub;
}*/
module.exports = {
    time: function (a) {
        var date = new Date();
        var hour = date.getHours() + a;
        var minute = date.getMinutes();
        var ampm
        if (hour >= 24) {
            hour = (hour - 24)
        }
        if (hour >= 12) {
            ampm = 'pm'
        } else if (hour >= 0) {
            ampm = 'am'
        }
        if (hour > 12) {
            hour = (hour - 12)
        } else if (hour == 0) {
            hour = 12
        }
        return [hour, minute, ampm];
    },
    greeting: function (a) {
        var date = new Date();
        var hour = date.getHours() + a;
        if (hour >= 24) {
            hour = (hour - 24)
        }
        greet = 'Hello!!'
        if (hour >= 0 && hour < 7) {
            greet = 'Hello!!'
        } else if (hour >= 7 && hour < 12) {
            greet = 'Good Morning'
        } else if (hour >= 12 && hour <= 16) {
            greet = 'Good Afternoon'
        } else if (hour > 16 && hour <= 18) {
            greet = 'Good Evening'
        } else if (hour >= 19 && hour <= 23) {
            greet = 'Hello!!'
        }
        return greet
    },
    del: function (msg) {
        msg.channel.messages.fetch({
            limit: 1
        }).then(results => {
            msg.channel.bulkDelete(results)
        })
    },
    reac: function () {
        var rea = ['💖', '❤', '👍', '😊', '👏'];
        let ran = Math.floor(Math.random() * 5)
        return rea[ran];
    },
    greew: function () {
        greetwords = ['hi', 'hello', 'hlw', 'Hi', 'Hello', 'bye', 'Bye', 'Goodbye', 'goodbye', 'GoodBye'];
        return greetwords;
    }
}