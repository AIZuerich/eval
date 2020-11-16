const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


    let inline = true
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.MessageEmbed()
    .setColor("#00ff00")
    .setThumbnail(sicon)
    .setAuthor(message.guild.name)
    .addField("Name", message.guild.name, inline)
    .addField("ID", message.guild.id, inline)
    .addField("Owner", message.guild.owner, inline)
    .addField("Region", message.guild.region, inline)
    .addField("Members", `${message.guild.memberCount}`, inline)
    .addField("Roles", message.guild.roles.cache.size, inline)
    .addField("Channels", message.guild.channels.cache.size, inline)
    .addField("You Joined", message.member.joinedAt)


    message.channel.send(serverembed);

    message.delete();
}

module.exports.help = {
  name:"serverinfo"
}