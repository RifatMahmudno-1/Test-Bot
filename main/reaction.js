module.exports = function (reac, user) {
    if (reac.emoji.name === '❌' && reac.count == 2) {
        reac.message.delete()
    } else if (reac.emoji.name === '❌' && reac.count == 1) {
        setTimeout(() => {
            if (!reac.message.deleted) {
                reac.remove()
            }
        }, 10000)
    }
}