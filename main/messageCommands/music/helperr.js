const Discord = require('discord.js')
const prefix = process.env.PREFIX
module.exports = {
    construct: function () {
        const embed = new Discord.MessageEmbed()
        embed.setColor('#0099ff')
        return embed
    },
    add1: function () {
        let embed = this.construct()
        embed.setDescription(`**Please provide a video title or YouTube video url**`)
        return embed
    },
    replay1: function () {
        let embed = this.construct()
        embed.setDescription(`You didn't add any video in your list. **${prefix}msc add <video title/url>** to add to add that music to the list or **${prefix}msc play <video title/url>** to play that music now!!`)
        return embed
    },
    pause1: function () {
        let embed = this.construct()
        embed.setDescription(`Paused playing. The playlist will be saved and You can continue from there whenever you want. To resume type **${prefix}msc resume**`)
        return embed
    },
    help1: function () {
        let embed = this.construct()
        embed.setDescription(`Please type correctly. For help type **${prefix}help music** or **${prefix}msc help**`)
        return embed
    },
    veliadd1: function () {
        let embed = this.construct()
        embed.setDescription(`Couldn't find any video. Please provide correct title or url and try again.`)
        return embed
    },
    veliadd2: function () {
        let embed = this.construct()
        embed.setDescription(`Added to the playlist. Type **${prefix}msc list** to view the list`)
        return embed
    },
    veliadd3: function () {
        let embed = this.construct()
        embed.setDescription(`You can only add 100 video in your list. No videos were added. Type **${prefix}msc del <music number from your list>** to delete that music. Like **${prefix}msc del 2** to delete 2nd music of your list. Type **${prefix}msc clearlist** to delete your list.`)
        return embed
    },
    veliadd4: function () {
        let embed = this.construct()
        embed.setDescription(`Couldn't find any video. Please provide correct title or url and try again.`)
        return embed
    },
    setVid1: function () {
        let embed = this.construct()
        embed.setDescription(`Some errors have occured in playing video.`)
        return embed
    },
    playVid2: function (xx) {
        let embed = this.construct()
        embed
            .setTitle('Playing Music')
            .addFields({
                name: '```Music Title```',
                value: `**${xx[1]}**`,
                inline: true
            }, {
                name: '```Youtube Channel```',
                value: `**${xx[2]}**`,
                inline: true
            }, {
                name: '```Duration```',
                value: `**${xx[3]}**`,
                inline: true
            }, )
            .setDescription('*Starting may take a few seconds.*')
        return embed
    },
    playVid3: function () {
        let embed = this.construct()
        embed.setDescription(`There is no member in this voice channel. If none joins in the next 1 minute, I'll leave but the playlist will be saved.`)
        return embed
    },
    playVid4: function () {
        let embed = this.construct()
        embed.setDescription('*Left the voice channel because none was there.*')
        return embed
    },
    playVid5: function (xx) {
        let embed = this.construct()
        embed
            .setTitle('Full Music Played')
            .addFields({
                name: '```Music Title```',
                value: `**${xx[1]}**`,
                inline: true
            }, {
                name: '```Youtube Channel```',
                value: `**${xx[2]}**`,
                inline: true
            })
        return embed
    },
    stop1: function () {
        let embed = this.construct()
        embed.setDescription('Leaving voice channel.')
        return embed
    },
    onFinish1: function () {
        let embed = this.construct()
        embed.setDescription(`There is no music in your playlist. I'm leaving. If you  wanna add any music in your list type **${prefix}msc add <vidoe title or url>**. Type **${prefix}msc help** or **${prefix}help msc** for additional Help.`)
        return embed
    },
    onFinish2: function () {
        let embed = this.construct()
        embed.setDescription(`I've player the full list. So, Now I'm leaving. If you wanna replay the list type **${prefix}msc replay**. Type **${prefix}msc list** to view your playlist.`)
        return embed
    },
    onFinish3: function () {
        let embed = this.construct()
        embed.setDescription(`Playing the next music.`)
        return embed
    },
    delete1: function () {
        let embed = this.construct()
        embed.setDescription(`Provide video number from your list. Like- **${prefix}**msc sel 1`)
        return embed
    },
    delete2: function () {
        let embed = this.construct()
        embed.setDescription(`There is only one music in your list. You cannot empty your list. To delete your list type **${prefix}msc** clearlist`)
        return embed
    },
    delete3: function (num) {
        let embed = this.construct()
        embed.setDescription(`Music number ${num} isn't available. Please check your list again by typing **${prefix}msc list**`)
        return embed
    },
    delete4: function (num) {
        let embed = this.construct()
        embed.setDescription(`Deleted video no${num} from your list`)
        return embed
    },
    list1: function () {
        let embed = this.construct()
        embed.setDescription(`There is no video in this list. Type **${prefix}msc add <url or video title>** to add that video in your list.`)
        return embed
    },
    list2: function (title) {
        for (var i = 0; i < title.length; i++) {
            title[i] = `**${i+1})** ${title[i]}`
        };
        let embed = this.construct();
        let embed1;
        let embed2;
        let aa = title.slice(0, 34)
        embed.setTitle(`Your music playlist.(0-${aa.length})`)
        embed.setDescription(aa)

        let bb = title.slice(34, 67)
        if (bb && bb.length > 0) {
            embed1 = this.construct();
            embed1.setTitle(`Your music playlist.(35-${34+bb.length})`)
            embed1.setDescription(bb)
        }
        let cc = title.slice(67, title.length)
        if (cc && cc.length > 0) {
            embed2 = this.construct();
            embed2.setTitle(`Your music playlist.(68-${67+cc.length})`)
            embed2.setDescription(cc)
        }
        return [embed, embed1, embed2]
    },
    previous1: function () {
        let embed = this.construct()
        embed.setDescription(`There is no previous music in your list.`)
        return embed
    },
    next1: function () {
        let embed = this.construct()
        embed.setDescription(`There is no next music in your list.`)
        return embed
    },
    clearlist1: function () {
        let embed = this.construct()
        embed.setDescription('Cleared the playlist.')
        return embed
    },
    play1: function () {
        let embed = this.construct()
        embed.setDescription(`You didn't provide any title or url. Resuming from that last played music. Select specific music from list-> **${prefix}msc list**`)
        return embed
    },
    play2: function () {
        let embed = this.construct()
        embed.setDescription(`Resuming from the last played music.`)
        return embed
    },
    select1: function () {
        let embed = this.construct()
        embed.setDescription(`Provide video number from your list. Like- **${prefix}**msc sel 1`)
        return embed
    },
    select2: function () {
        let embed = this.construct()
        embed.setDescription(`There is no video in this list. Type **${prefix}msc add <url or video title>** to add that video in your list.`)
        return embed
    },
    select3: function (num) {
        let embed = this.construct()
        embed.setDescription(`Music number ${num} isn't available. Please check the list by typing **${prefix}msc list**`)
        return embed
    },
    playlist1: function () {
        let embed = this.construct()
        embed.setDescription('There is no video in this playlist.')
        return embed
    },
    playlist2: function () {
        let embed = this.construct()
        embed.setDescription(`You can add maximum 100 videos. Only first 100 videos were added to your list from that playlist. Type **${prefix}msc list** to view your list`)
        return embed
    },
    playlist3: function () {
        let embed = this.construct()
        embed.setDescription(`You can only add 100 video in your list. No videos were added. Type **${prefix}msc del <music number from your list>** to delete that music. Like **${prefix}msc del 2** to delete 2nd music of your list. Type **${prefix}msc clearlist** to delete your list.`)
        return embed
    },
    playlist4: function (free) {
        let embed = this.construct()
        embed.setDescription(`You can add maximum 100 videos. Only first ${free} videos were added to your list from that playlist. Type **${prefix}msc list** to view your list`)
        return embed
    },
    playlist5: function () {
        let embed = this.construct()
        embed.setDescription(`All videos of that playlist were added to your list. Type **${prefix}msc list** to view your list`)
        return embed
    },
    playlist6: function (num) {
        let embed = this.construct()
        embed.setDescription(`${num} videos were added to your list from that playlist. Type **${prefix}msc list** to view your list`)
        return embed
    },
    noadmin: function () {
        let embed = this.construct()
        embed.setDescription(`You don't have administrator permission to run this command.`)
        return embed
    },
    isVoice: function (aa) {
        let embed = this.construct()
        embed.setDescription(`I'm already playing in **${aa}** voice channel. Please join that voice channel. If you have admin access you can force stop by typing ${prefix}msc stop force`)
        return embed
    },
    help: function () {
        let embed = this.construct()

        function xy(aa) {
            return '`' + prefix + 'msc ' + aa + '`'
        }
        embed
            .setTitle(`Help about playing music`)
            .setDescription('My prefix is `' + prefix + 'msc`')
            .setAuthor('Helper', 'https://cdn.discordapp.com/avatars/812537560030117928/c9e5292e1ef8e3d41f5265e2d3c9be58.webp')
            .addField('Commands', `${xy('play')}, ${xy('pause')}, ${xy('resume')}, ${xy('stop')}, ${xy('add')}, ${xy('sel')}, ${xy('select')}, ${xy('del')}, ${xy('delete')}, ${xy('list')}, ${xy('previous')}, ${xy('next')}, ${xy('replay')}, ${xy('clearlist')}, ${xy('playlist')}`, false)
            .addFields({
                name: '🌟' + xy('play') + ' and ' + xy('play <Youtube video Url or title>') + ' and ' + xy('add <Youtube video title or url>'),
                value: `
                🔰${xy('play')} => Play from last played music from your list.
                🔰${xy('play <Youtube video Url or title>')} => Play the vidoe form that title or url. like **${xy('play faded')}** to play Faded from youtube now.
                🔰${xy('add <Youtube video title or url>')} => Add that video to your list. Like **${xy('add Despacito')}** to add despacito in your list.
                `
            }, {
                name: '🌟' + xy('pause') + ' and ' + xy('resume') + ' and ' + xy('resume') + ' and ' + xy('list'),
                value: `
                🔰${xy('pause')} => To pause playing.
                🔰${xy('resume')} => To resume playing.
                🔰${xy('stop')} => To stop playing.
                🔰${xy('list')} => To get your music list.
                `
            }, {
                name: '🌟' + xy('sel <video number from your list>') + ' or ' + xy('select <video number from your list>') + ' and ' + xy('del <video number from your list>') + ' or ' + xy('delete <video number from your list>'),
                value: `
                🔰${xy('sel <video number from your list>')} => Select that video from your list and play now. Like **${xy('sel 2')}** to play the second video from your list.
                🔰${xy('del <video number from your list>')} => Delete that video from your list. Like **${xy('del 2')}** to delete the second video from your list.
                **sel and select both are same** and **del and delete both are same**
                `
            }, {
                name: '🌟' + xy('previous') + ' and ' + xy('next') + ' and ' + xy('replay'),
                value: `
                🔰${xy('previous')} => Play the previous music from your list.
                🔰${xy('next')} => Play the next music from your list.
                🔰${xy('replay')} => Replay from the begining of your list.
                `
            }, {
                name: '🌟' + xy('clearlist') + ' and ' + xy('playlist <Youtube playlist url>'),
                value: `
                🔰${xy('clearlist')} => Delete your entire list.
                🔰${xy('playlist <Youtube playlist url>')} => Add videos from that playlist to your list. Like -> **${xy('playlist https://www.youtube.com/playlist?**********')}** to add video from that playlist to your list.
                `
            }, {
                name: '⚠' + 'Desclaimer',
                value: `**You can't add more than 100 musics in your list.** If you have 100 musics in your list then you have to delete any music to add new music.
                Music starting may take a few seconds. So, please be patient.
                Any music you play will be added to your list. **One server will have only one list and all other members will be able to access and modify it.**`
            })
            .addField('Add this bot in your server', `[Click and authorize pemission to add this bot in your server](https://discord.com/api/oauth2/authorize?client_id=812537560030117928&permissions=8&scope=bot)`, false)
            .setFooter(`Hope you will have a great time with me.`)
        return embed
    }
}