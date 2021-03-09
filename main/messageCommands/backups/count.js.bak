module.exports = function (msg, counter, fs) {
    let user = msg.author.id;
    if (counter[user] == undefined) {
        counter[user] = {
            count: 1
        }
        fs.writeFile('./main/messageCommands/counter.json', JSON.stringify(counter, null, 4), err => {
            if (err) throw err;
        })
    } else if (counter[user] !== undefined) {
        counter[user] = {
            count: counter[user].count + 1
        }
        fs.writeFile("./main/messageCommands/counter.json", JSON.stringify(counter, null, 4), err => {
            if (err) throw err;
        })
    }
    if (Number.isInteger(Math.cbrt(counter[user].count)) == true) {
        msg.channel.send(`<@${user}>, You have reached level ${Math.cbrt(counter[user].count)}.`)
    }
}