module.exports = function (msg, mongoose, lvl) {
    const format = require('./format.js')
    let guild = `${msg.guild.name} --> ${msg.guild.id}`
    let Uid = msg.author.id.toString()
    let Uname = msg.author.username;
    const maindb = mongoose.model(guild, format(mongoose));

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
    .then(delete mongoose.connection.models[guild])
    .catch((err)=>console.log(err))

    /*maindb.find({
        _id: Uid
    }).then(r => console.log(r[0].count))*/
}