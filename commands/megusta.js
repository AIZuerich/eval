const Discord = require("discord.js")
 
module.exports.run = async (bot, message, args) => {

let megustafac =  new Discord.MessageEmbed()
.setColor("#00ff00")

message.channel.send(megustafac)

message.delete();

}
module.exports.help = {
  name: "megusta"
}