const Discord = require("discord.js")
const Canvas = require('canvas');
const { registerFont } = require('canvas')
registerFont('fonts/SourceCodePro-Regular.ttf', { family: 'FontName' });


module.exports.run = async (client, message, args) => {

let pages = ['Page one!', 'Second page', "Thirth page", "Fourth page"]
let page = 1 
var OS = require('os');
var oldCPUTime = 0
var oldCPUIdle = 0
function getLoad() {
  var cpus = OS.cpus()
  var totalTime = -oldCPUTime
  var totalIdle = -oldCPUIdle
  for (var i = 0; i < cpus.length; i++) {
    var cpu = cpus[i]
    for (var type in cpu.times) {
      totalTime += cpu.times[type];
      if (type == "idle") {
        totalIdle += cpu.times[type];
      }
    }
  }

  var CPUload = 100 - Math.round(totalIdle / totalTime * 100)
  oldCPUTime = totalTime
  oldCPUIdle = totalIdle

  return {
    CPU: CPUload,
    mem: 100 - Math.round(OS.freemem() / OS.totalmem() * 100)
  }
}
const acpu = getLoad()


//canvas
  const used = process.memoryUsage().heapUsed / 1024 / 1024;
    let userz = message.author || message.mentions.members.first()
    const canvas = Canvas.createCanvas(340, 230);
    const ctx = canvas.getContext('2d');

    //const background = await Canvas.loadImage('./test.jpg');
    //ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    
    ctx.rect(5, 5, canvas.width*0.97, canvas.height*0.97)
    ctx.globalAlpha = 1;
    ctx.fillStyle = "#23272A";
    ctx.fill()

    // Add an exclamation point here and below
    ctx.font = '20px FontName';
    ctx.fillStyle = '#C9FEFF';
    ctx.fillText("\nHI " + message.author.username + ",\nthis is a quiz bot to\nlearn Languages.\n\n[ zzhelp commands ]", 10, 20);

    ctx.font = '11px FontName';
    ctx.fillStyle = '#C9FEFF';
    ctx.fillText(`Users: ${message.guild.memberCount} | Servers: ${client.guilds.cache.size} | RAM: ${Math.round(used * 100) / 100} MB`, 10, 215);

        ctx.strokeStyle = "#00FFFF";
    ctx.strokeRect(0, 0,  canvas.width, canvas.height);
    var attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
//
await message.channel.send(attachment)
var embed = new Discord.MessageEmbed() // Define a new embed
.setColor(0xffffff) // Set the color
.setFooter(`Page ${page} of ${pages.length}`)
await message.channel.send(embed).then(msg => {
  msg.react('⬅').then( r => {
    msg.react('➡')

    // Filters
    const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id
    const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id

    const backwards = msg.createReactionCollector(backwardsFilter, {timer: 6000})
    const forwards = msg.createReactionCollector(forwardsFilter, {timer: 6000})

    backwards.on('collect', (r, u) => {




if(page<0)return;
page--
        if (page.length) return r.users.remove(r.users.cache.filter(u => u === message.author).first())
        
     if(page===1){
      var embed1_ = new Discord.MessageEmbed()// Define a new embed
      .setColor(0xffffff) // Set the color
      .setFooter(`Page ${page} of ${pages.length}`)
      .setImage("https://cdn.discordapp.com/attachments/265156322012561408/751631163990474822/welcome-image.png")
 .addField("Info",`Users: ${message.guild.memberCount} | Servers: ${client.guilds.cache.size} | RAM: ${Math.round(used * 100) / 100} MB`, 10, 215)

        msg.edit(embed1_)
        try{r.users.remove(message.author)}catch(err){console.log(err)}}

          if(page===2){
      var embed2_ = new Discord.MessageEmbed()// Define a new embed
      .setColor(0xffffff) // Set the color
      .setFooter(`Page ${page} of ${pages.length}`)
 .addField("Info",`Users: ${message.guild.memberCount} | Servers: ${client.guilds.cache.size} | RAM: ${Math.round(used * 100) / 100} MB`, 10, 215)
      .setImage("https://cdn.discordapp.com/attachments/265156322012561408/751606194279284736/welcome-image.png")

        msg.edit(embed2_)
        try{r.users.remove(message.author)}catch(err){console.log(err)}}
           

                if(page===3){
      var embed3_ = new Discord.MessageEmbed()// Define a new embed
      .setColor(0xffffff) // Set the color
      .setFooter(`Page ${page} of ${pages.length}`)
 .addField("Info",`Users: ${message.guild.memberCount} | Servers: ${client.guilds.cache.size} | RAM: ${Math.round(used * 100) / 100} MB`, 10, 215)
      .setImage("https://cdn.discordapp.com/attachments/265156322012561408/751632882270994442/welcome-image.png")
        msg.edit(embed3_)
        try{r.users.remove(message.author)}catch(err){console.log(err)}}
           
    })

    forwards.on('collect', (r, u) => {
      
        
      msg.channel.messages.fetch({ limit: 5 }).then(msg => msg.forEach(msg => (msg.author.id=="710212974970798231"&&msg.attachments.size>0)?msg.delete():console.log("test")))

      if(page>3)return;
         page++
        if (page.length) return r.users.remove(r.users.cache.filter(u => u === message.author).first()) 
        if(page==2){
      
      var embed2 = new Discord.MessageEmbed()// Define a new embed
      .setColor(0xffffff) // Set the color
      .setFooter(`Page ${page} of ${pages.length}`)
 .addField("Info",`Users: ${message.guild.memberCount} | Servers: ${client.guilds.cache.size} | RAM: ${Math.round(used * 100) / 100} MB`, 10, 215)
      .setImage('https://cdn.discordapp.com/attachments/265156322012561408/751606194279284736/welcome-image.png');
      msg.edit(embed2)

                 //  message.channel.messages.fetch({ limit: 2 }).then(msg => { msg.forEach(m => { (m.attachments.size>0)?m.attachments.delete():m.edit(embed2) }); });
    
             try{r.users.remove(message.author)}catch(err){console.log(err)}}
      
      else if(page == 3){
        if (page.length) return r.users.remove(r.users.cache.filter(u => u === message.author).first())
        
      var embed3 = new Discord.MessageEmbed()// Define a new embed
      .setColor(0xffffff) // Set the color
      .setFooter(`Page ${page} of ${pages.length}`)
 .addField("Info",`Users: ${message.guild.memberCount} | Servers: ${client.guilds.cache.size} | RAM: ${Math.round(used * 100) / 100} MB`, 10, 215)
      .setImage("https://cdn.discordapp.com/attachments/265156322012561408/751632882270994442/welcome-image.png")

        msg.edit(embed3)
  
        try{r.users.remove(message.author)}catch(err){console.log(err)}}

            else if (page == 4){
        if (page.length) return r.users.remove(r.users.cache.filter(u => u === message.author).first())
        
      var embed4 = new Discord.MessageEmbed()// Define a new embed
      .setColor(0xffffff) // Set the color
      .setFooter(`Page ${page} of ${pages.length}`)
 .addField("Info",`Users: ${message.guild.memberCount} | Servers: ${client.guilds.cache.size} | RAM: ${Math.round(used * 100) / 100} MB`, 10, 215)
    

        msg.edit(embed4)
        try{r.users.remove(message.author)}catch(err){console.log(err)}}  
      
    })
  })
})

}
module.exports.help = {
  name: "help"
}