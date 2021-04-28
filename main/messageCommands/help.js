//https://www.codegrepper.com/code-examples/javascript/discord.js+embed+builder
module.exports = function (msg, tokens, prefix, Discord) {
    function xx(aa) {
        return '`' + prefix + aa + '`'
    }
    const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Help')
        .setDescription('**My prefix is `' + prefix + '`**')
        .setAuthor('My Test', 'https://cdn.discordapp.com/avatars/812537560030117928/c9e5292e1ef8e3d41f5265e2d3c9be58.webp')
        //+'`'+prefix+ 'aaa`, '
        .addField('Commands', '`' + prefix + 'help`, ' + '`' + prefix + 'gif`, ' + '`' + prefix + 'clear`, ' + '`' + prefix + 'bhf`, ' + '`' + prefix + 'avt`, ' + '`' + prefix + 'cha`, ' + '`' + prefix + 'kick`, ' + '`' + prefix + 'ban`, ' + '`' + prefix + 'snick`, ' + '`' + prefix + 'rnick`, ' + '`' + prefix + 'roles`, ' + '`' + prefix + 'mem`, ' + '`' + prefix + 'abt`, ' + '`' + prefix + 'rank`, ' + '`' + prefix + 'rd`, ' + '`' + prefix + 'gimg`, ' + '`' + prefix + 'quote`, ' + '`' + prefix + 'slow`, ' + '`' + prefix + 'time`, ' + '`' + prefix + 'a or ' + prefix + 'anime`, ' + '`' + prefix + 'm or ' + prefix + 'manga`, ' + '`' + prefix + 'anicharacter`, ' + '`' + prefix + 'anistudio`, ' + '`' + prefix + 'aniuser`, ' + '`' + prefix + 'anistaff`', false)
        .addFields({
            name: '🌟' + xx('help') + ' and ' + xx('help here'),
            value: `
            🔰${xx('help')} => Get help in DM channel
            🔰${xx('help here')} => Get help in this channel
            `,
        }, {
            name: '🌟' + xx('gif') + ' and ' + xx('gif <search>'),
            value: `
            🔰${xx('gif')} => Get a random anime gif.
            🔰${xx('gif search')} => Get a random gif from your search. **${xx('gif cute kitten')}** => get a cute kitten gif.
            `,
        }, {
            name: '🌟' + xx('clear') + ' and ' + xx('clear <how many>') + ' and ' + xx('clear all'),
            value: `
            🔰${xx('clear')}=> delete previous 1 message.
            🔰${xx('clear <how many>')}=>**${xx('clear 50')}** to delete pevious 50 messages.
            🔰${xx('clear all')}=> Delete previous several messages.
            ***You can't delete messages which are older than 14days.***
            `,
        }, {
            name: '🌟' + xx('bhf <message>'),
            value: `
            🔰The bot will send your message on your behalf. **${xx("bhf I'm well")}}** => The bot will send I'm well.
            `,
        }, {
            name: '🌟' + xx('avt') + ' and ' + xx('avt <@mention users>'),
            value: `
            🔰${xx('avt')} => The bot will send your avatar. 
            🔰${xx('avt <@mention users>')} => The bot will send their avaters one by one.`,
        }, {
            name: '🌟' + xx('cha <channel name> <message>'),
            value: `🔰The bot will send Your message to that specific channel. **${xx('cha general How are you??')}** => The bot will send "How are you??" in general channel".`,
        }, {
            name: '🌟' + xx('kick <@mention users whom you want to kick>') + ' and ' + xx('ban <@mention users whom you want to ban>'),
            value: `
            🔰${xx('kick <@mention users whom you want to kick>')} => The bot will kick the mentioned members one by one.
            🔰${xx('ban <@mention users whom you want to ban>')} => The bot will ban the mentioned members one by one.
            `,
        }, {
            name: '🌟' + xx('snick <@mention user> <nickname>') + ' and ' + xx('rnick <mention users>'),
            value: `
            🔰${xx('snick <@mention user> <nickname>')} => Type **${xx('snick @Alex Gamer @Helper Bot')}** to set Alex's nickname to Gamer and Helper's nickname to Bot. You can add more or less members.
            🔰${xx('rnick <mention users>')} => The bot will remove the nicknames of the mentioned users.
            `,
        }, {
            name: '🌟' + xx('roles') + ' and ' + xx('roles add <mention roles> <mention users>') + ' and ' + xx('roles remove <mention roles> <mention users>'),
            value: `
            🔰${xx('roles')} => Get a list of all available roles.
            🔰${xx('roles add <mantion roles> <mantion users>')} => Give the mentioned users the mentioned roles. **${xx('roles add @admin @mod @Alex @Helper')}** to give Alex and Helper the mod and Admin role. You can add more or less roles and member.
            🔰${xx('roles remove <mantion roles> <mantion users>')} => Remove the mentioned roles from the mentioned users. **${xx('roles remove @admin @mod @Alex @Helper')}** to remove the mod and Admin role from Alex and Helper. You can add more or less roles and member.`,
        }, {
            name: '🌟' + xx('mem all') + ' and ' + xx('mem roles') + ' and ' + xx('mem names') + ' and ' + xx('mem ids'),
            value: `
            🔰${xx('mem all')} => get list of all members' name, id and roles.
            🔰${xx('mem roles')} => get list of all members' roles.
            🔰${xx('mem names')} => get all members' name.
            🔰${xx('mem ids')} => get all members' id.
            `,
        }, {
            name: '🌟' + xx('abt') + ' and ' + xx('abt <mention users>'),
            value: `
            🔰${xx('abt')} => Get info about this Guild/Server.
            🔰${xx('abt <mention users>')} => Get mentioned user's info of this guild. **${xx('abt @Helper @Rifat')}** to get Helper's and Rifat's info. You can add more or less members
            `,
        }, {
            name: '🌟' + xx('rank') + ' and ' + xx('rank <@mention users>'),
            value: `
            🔰${xx('rank')} => get info about your total sent messages, level and rank etc.
            🔰${xx('rank <@mention users>')} => get info about mention users' total sent messages, level and rank etc. such as=> **${xx('rank @Rifat @Alex @Helper')}**
            `,
        }, {
            name: '🌟' + xx('rd word'),
            value: `🔰You can only get memes or posts on meme, anime, cosplay, thought, wallpaper, art, pic. Like for meme type **${xx('rd meme')}**. All the contents are from reddit.`,
        }, {
            name: '🌟' + xx('gimg <search>') + ' and ' + xx('quote'),
            value: `
            🔰${xx('gimg <search>')} =>Get first google image from that search and send it. such as- **${xx('gimg cat')}** to get a image of cat.
            🔰${xx('quote')} => Get a random Quote.
            `,
        }, {
            name: '🌟' + xx('slow <time in seconds> <reason>') + ' and ' + xx('slow 0') + ' and ' + xx('slow off'),
            value: `
            🔰${xx('slow <time in seconds> <reason>')} => Type **${xx('slow 5 to avoid spamming')}** to limit one message every 5 seconds. Here reason is 'to avoid spamming'. Reason isn't necessary.
            🔰${xx('slow 0')} => Stop slow mode.
            🔰${xx('slow off')} => Stop slow mode.
            `,
        }, {
            name: '🌟' + xx('a <anime\'s name>') + ' or ' + xx('anime <anime\'s name>') + ' and ' + xx('m <manga\'s name>') + ' or ' + xx('manga <manga\'s name>') + ' and ' + xx('anicharacter <character\'s name>') + ' and ' + xx('aniuser <username>') + ' and ' + xx("anistaff <staff's name>") + ' and ' + xx('anistudio <studio\'s name>'),
            value: `
            🔰${xx('a <anime\'s name>') + ' or ' + xx('anime <anime\'s name>')} => Get info of that anime. Example- **${xx('anime konosuba')}** or **${xx('a konosuba')}**
            🔰${xx('a <manga\'s name>') + ' or ' + xx('manga <manga\'s name>')} => Get info of that manga. Example- **${xx('anime death note')}** or **${xx('a death note')}**
            🔰${ xx('anicharacter <character\'s name>')} => Get info of that character. Such as=> **${xx('anicharacter Aqua')}**
            🔰${xx('aniuser <username>') } => Get info of that anilist user. Such as=> **${xx('aniuser rifatal')}**
            🔰${xx("anistaff <staff's name>")} => Get info of that anime/ manga writer, voice actor, director etc. Such as=> **${xx('anistaff Hiroshi Kamiya')}**
            🔰${xx('anistudio <studio\'s name>')} => Get info of that anime Studio. Such as=> **${xx('anistudio MAPPA')}**
            ***ALL DATA IS FROM ANILIST***
            `,
        })
        .addField('Automated', 'Bot will autimatically respond if someone types hi, hello, hlw, bye, Goodbye according to GMT +6. Bot will auto delete any offensive words. Bot will autimatically respond if someone is added or kicked or banned from this server. Bot will autimatically react to certain messages. Bot will automatic send a quote a day.', false)
        .addField('Reaction info', 'In those messages where bot has reacted ❌, there if you click on that reaction and increase the number then the message will be deleted. After 8second the bot will auto remove that emoji.', false)
        .addField('Add this bot in your server', `[Click and authorize pemission to add this bot in your server](https://discord.com/api/oauth2/authorize?client_id=812537560030117928&permissions=8&scope=bot)`, false)
        .setFooter('Have a nice time');
    if (tokens[1] === 'here') {
        msg.channel.send(embed)
    } else {
        if (msg.channel.id !== '813476929268351007') {
            msg.reply(`Check. You have received a message from me. Everything is written there.`)
        }
        msg.author.send(embed);
    }
}