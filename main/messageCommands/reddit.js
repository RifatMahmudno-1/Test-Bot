const redditFetch = require('reddit-fetch');
module.exports = function (msg, tokens, prefix, Discord) {
    const embed = new Discord.MessageEmbed()
    if (tokens[1] === 'meme') {
        main(['funny', 'memes', 'wholesomememes', 'trippinthroughtime', 'dankmemes', 'teenagers', 'AdviceAnimals'], '😂');
    } else if (tokens[1] === 'pic') {
        main(['itookapicture'], '👍');
    } else if (tokens[1] === 'art') {
        main(['Art', 'drawing'], '👍');
    } else if (tokens[1] === 'cosplay') {
        main(['cosplay', 'cosplaygirls'], '👍');
    } else if (tokens[1] === 'showerthoughts' || tokens[1] === 'thought') {
        main(['Showerthoughts'], '🤔');
    } else if (tokens[1] === 'anime') {
        main(['Animemes', 'animememes'], '😂');
    } else if (tokens[1] === 'wallpaper') {
        main(['wallpapers', 'WallpaperMax', 'wallpaper'], '💖');
    } else(msg.reply(`Please type correctly. You can only get anime, meme, wallpaper, thought, art, pic, cosplay. Type '${prefix}rd <word>'.Like for meme type '${prefix}rd meme. For help type '${prefix}help'`))

    function subre(aa) {
        return aa[Math.floor(Math.random() * aa.length)]
    }

    function hottop() {
        aa = ['hot', 'top']
        return aa[Math.floor(Math.random() * aa.length)]
    }

    function main(xx, em) {
        redditFetch({
            subreddit: subre(xx),
            sort: hottop(),
            allowNSFW: true,
            allowModPost: false,
            allowCrossPost: true,
            allowVideo: false
        }).then(post => {
            Url = post.url;
            Author = post.author;
            Title = post.title;
            Ups = post.ups;
            Downs = post.downs;
            SubRe = post.subreddit_name_prefixed;
            Color = post.author_flair_background_color;
            if (['meme', 'anime', 'wallpaper', 'pic', 'cosplay', 'art'].includes(tokens[1])) {
                Color == true ? embed.setColor(Color) : embed.setColor('#0099ff')
                if (Title) embed.setTitle(Title)
                embed.setFooter(`Ups👍: ${Ups} -- Downs👎:${Downs}
                ${SubRe}`)
                if (Url) embed.setImage(Url)
                msg.channel.send(embed).then(r => r.react(em))
            } else if (post.is_reddit_media_domain == false) {
                Color == true ? embed.setColor(Color) : embed.setColor('#0099ff')
                if (Title) embed.setTitle(`${Title}.  
                --${Author}`)
                embed.setFooter(`Ups👍: ${Ups} -- Downs👎:${Downs}
                ${SubRe}`)
                msg.channel.send(embed).then(r => r.react(em))
            } else {
                msg.reply(`Failed to load. Plz try again.`).then(r => r.react('😭'))
            }
        }).catch(() => {
            msg.channel.send(`Failed to load. Some errors may have occured. Plz try again.`).then(r => r.react('😭'))
        });
    }
}
/*Url.slice(-3) === 'jpg' || Url.slice(-3) === 'png' || Url.slice(-3) === 'gif' || Url.slice(-4) === 'jpeg' || Url.slice(-4) === 'webp'*/