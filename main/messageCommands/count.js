module.exports = function (msg, counter, fs) {
    if (counter[msg.author.id] == undefined) {
        counter[msg.author.id] = {
            count: 1
        }
        fs.writeFile('./main/messageCommands/counter.json', JSON.stringify(counter, null, 4), err => {
            if (err) throw err;
        })
        msg.channel.send(`<@${msg.author.id}>, You have reached level 1.`)
    } else if (counter[msg.author.id] !== undefined) {
        counter[msg.author.id] = {
            count: counter[msg.author.id].count + 1
        }
        fs.writeFile("./main/messageCommands/counter.json", JSON.stringify(counter, null, 4), err => {
            if (err) throw err;
        })
        if (Number.isInteger((counter[msg.author.id].count) / 30) == true) {
            msg.channel.send(`<@${msg.author.id}>, You have reached level ${((counter[msg.author.id].count) / 30) + 1}.`)
        }
    }
}