module.exports = function (msg, counter, fs) {
    let user = msg.author.id;
    let userName = msg.author.username;
    let guild = `${msg.guild.name} --> ${msg.guild.id}`
    var UserC;
    if (counter[guild] == undefined) {
        counter[guild] = [{
            user: user,
            name: userName,
            count: 1
        }]
        fs.writeFileSync('./main/messageCommands/counter.json', JSON.stringify(counter, null, 4), err => {
            if (err) throw err;
        })
        var already = counter[guild].filter(obj => {
            return (obj.user === user)
        })
        UserC = already[0].count
    } else {
        var already = counter[guild].filter(obj => {
            return (obj.user === user)
        })

        function haha() {
            var aaa
            if (already.length == 0 || already == undefined) {
                aaa = 1
            } else {
                aaa = already[0].count
            }
            return aaa
        }
        var num = haha();
        if (already.length == 0) {
            var bbb = {
                user: user,
                name: userName,
                count: num
            }
            counter[guild].push(bbb)
            fs.writeFileSync('./main/messageCommands/counter.json', JSON.stringify(counter, null, 4), err => {
                if (err) throw err;
            })
        } else {
            var ccc = counter[guild].indexOf(already[0])
            counter[guild][ccc] = {
                user: user,
                name: userName,
                count: num + 1
            }
            fs.writeFileSync('./main/messageCommands/counter.json', JSON.stringify(counter, null, 4), err => {
                if (err) throw err;
            })
        }
        already = counter[guild].filter(obj => {
            return (obj.user === user)
        })
        UserC = already[0].count
    }
    if (Number.isInteger(Math.cbrt(UserC)) == true) {
        msg.channel.send(`<@${user}>, You have reached level ${Math.cbrt(UserC)}.`)
    }
    /*
    let user = msg.author.id;
    let userName = msg.author.username;
    let guild = `${msg.guild.name} --> ${msg.guild.id}`
    if (counter[guild] == undefined) {
        counter[guild] = [{
            [user]: {
                name: userName,
                count: 1
            }
        }]
        fs.writeFile('./main/messageCommands/counter.json', JSON.stringify(counter, null, 4), err => {
            if (err) throw err;
        })
    } else if (counter[guild] !== undefined) {
        counter[guild] = {
            [user]: {
                name: userName,
                count: counter[guild][user].count + 1
            }
        }
        fs.writeFile('./main/messageCommands/counter.json', JSON.stringify(counter, null, 4), err => {
            if (err) throw err;
        })
    }
    if (Number.isInteger(Math.cbrt(counter[guild][user].count)) == true) {
        msg.channel.send(`<@${user}>, You have reached level ${Math.cbrt(counter[guild][user].count)}.`)
    }*/
}