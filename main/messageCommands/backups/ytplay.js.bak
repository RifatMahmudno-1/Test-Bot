const ytdl = require('ytdl-core-discord');
const yts = require('yt-search');
module.exports = async function (msg, Discord) {
    let tokens = msg.content.split(' ')
    if (tokens.length <= 1) return msg.channel.send('Please provide a video title or YouTube video url')
    let voiceChannel = msg.member.voice.channel;
    if (!voiceChannel) return msg.channel.send('You need to be in a channel to play this music');
    let args = tokens.slice(1).join(' ')
    //get video
    yts(args)
        .then((getVids) => {
            let video = getVids.all.filter(x => x.type === 'live' || x.type === 'video')[0]
            if (video.length < 1) return msg.channel.send(`Couldn't find any video. Please provide correct title or url and try again.`);
            playVid([video.url, video.title, video.author.name, video.timestamp, video.seconds || 0])
        })
        .catch(() => {
            msg.channel.send(`Couldn't find any video. Please provide correct title or url and try again.`)
        })
    async function playVid(xx) {
        if (xx[4] === 0) {
            msg.channel.send(`Playing music "**${xx[1]}**" from "**${xx[2]}**" YouTube Channel. **It's a live stream**. *Starting may take a few seconds.*`)
        } else {
            msg.channel.send(`Playing music "**${xx[1]}**" from "**${xx[2]}**" YouTube Channel. **Duration: ${xx[3]}.** *Starting may take a few seconds.*`)
        }
        let stream = await ytdl(xx[0])
        const connection = await voiceChannel.join();
        let chaID = msg.member.voice.channel.id;
        let Int;
        clearInterval(Int);
        Int = setInterval(() => {
            if (msg.guild.channels.cache.find(i => i.id === chaID).members.find(i => i.user.bot == true) !== undefined && msg.guild.channels.cache.find(i => i.id === chaID).members.size <= 1) {
                clearInterval(Int)
                voiceChannel.leave()
                msg.channel.send('*Left the voice channel because none was there.*').then(r => r.react('😭'))
            }
        }, 60000);
        connection
            .play(stream, {
                type: 'opus',
                seek: 0,
                volume: 1
            })
            .on('finish', () => {
                clearInterval(Int)
                voiceChannel.leave();
                msg.channel.send(`Full music played "${xx[1]}" from ${xx[2]} YouTube Channel.`);
            })
        /*
        //for 'ytdl-core'
        let stream = ytdl(xx[0], {
            filter: 'audioonly'
        });
        const connection = await voiceChannel.join();
        connection.play(stream, {
                seek: 0,
                volume: 1
            })
            .on('finish', () => {
                voiceChannel.leave();
                msg.channel.send(`Full music played "${xx[1]}" from ${xx[2]} YouTube Channel.`);
            })*/

        /*if (args.slice(0, 8) === 'https://' || args.slice(0, 7) === 'http://' || args.slice(0, 7) === 'www.you') {
        yts({
                videoId: args.match(/=[\w+-_+=]+/g)[0].slice(1)
            })
            .then((video) => {
                playVid([video.url, video.title, video.author.name, video.timestamp, video.seconds])
            })
            .catch(() => {
                msg.channel.send(`Couldn't find any video. Please provide correct title or url and try again.`)
            })
    } else {
    let getVids = await yts(args);
    let video = getVids.all.filter(x => x.type === 'live' || x.type === 'video')[0]
    if (video.length < 1) return msg.channel.send(`Couldn't find any video. Please provide correct title or url and try again.`);
    playVid([video.url, video.title, video.author.name, video.timestamp, video.seconds || 0])
    }*/
    }
}