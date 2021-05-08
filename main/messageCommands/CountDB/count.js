module.exports = function (msg, mongoose, lvl) {
    const format = require('./format.js')
    let guild = `${msg.guild.id}`
    let Uid = msg.author.id.toString()
    let Uname = msg.author.username;
    let maindb;
    if (mongoose.connection.models[guild]) {
        maindb = mongoose.connection.models[guild]
    } else {
        maindb = mongoose.model(guild, format(mongoose));
    }
    maindb.findById(Uid).then(hs => {
            let Count;
            if (hs == null) {
                Count = 1;
                new maindb({
                    _id: Uid,
                    name: Uname,
                    count: Count
                }).save()
            } else {
                Count = hs.count + 1;
                maindb.findByIdAndUpdate(Uid, {
                    name: Uname,
                    count: Count,
                }, function (err) {
                    if (err) {
                        throw err
                    }
                })
            }
            let abc = Math.fround(Math.pow(Count, 1 / lvl))
            if (Number.isInteger(abc) == true) {
                msg.channel.send(`<@${msg.author.id}>, You have reached level ${abc}.`)
            }
        })
        .catch((err) => console.log(err))
}