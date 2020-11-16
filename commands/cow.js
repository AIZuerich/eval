const { Command } = require('discord.js-commando');
const cows = require('cows');
const rn = require('random-number');

module.exports.run = async (bot, message, args) => {

    const channel = message.channel;
channel.startTyping();
setTimeout(()=> channel.send("cow").then(m=>m.delete({ timeout: 6000 })).then(()=> channel.stopTyping()), 5000);

}
module.exports.help = {
  name: "cow"
}