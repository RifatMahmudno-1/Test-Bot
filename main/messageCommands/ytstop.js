module.exports = async function (msg) {
    let voiceChannel = msg.member.voice.channel;
    if (!voiceChannel) return msg.channel.send("You need to be in a voice channel to stop the music!");
    msg.channel.send('Leaving channel and stopping music').then(r => r.react('😭'))
    await voiceChannel.leave();
}