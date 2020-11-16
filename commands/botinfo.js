const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let inline = true
    let bicon = bot.user.displayAvatarURL;
    let usersize = bot.users.size
    let chansize = bot.channels.size
    let uptimxd = bot.uptime 
    let servsize = bot.guilds.size
    let botembed = new Discord.MessageEmbed()
    .setColor("#00ff00")
    .setThumbnail(bicon)
    .addField("Bot Name", `${bot.user.username}`, inline)
    .addField("Servers", `🛡 ${bot.guilds.cache.size}`, inline)
    .addField("Channels", `📁 ${bot.channels.cache.size}`, inline)
    .addField("Created On", bot.user.createdAt)
    .setTimestamp()
    
    message.channel.send(botembed);

}

module.exports.help = {
  name:"botinfo"
}