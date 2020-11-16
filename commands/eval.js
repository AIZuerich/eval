const config = require("../config.json");
const Canvas = require('canvas');
function escapeRegExp(str) {
	return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
}
const { inspect } = require("util");
const { stripIndents } = require("common-tags");
const { VultrexHaste } = require("vultrex.haste");
const haste = new VultrexHaste({url:""});
var listnames = []
  module.exports.run = async(client,message,args) =>{

     function exec(cmd, handler = function(error, stdout, stderr){message.channel.send(stdout);if(error !== null){console.log(stderr)}})
{
    const childfork = require('child_process');
    return childfork.exec(cmd, handler);
}

function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}

  class Deck {
  constructor(){
    this.deck = []
    this.dealt_cards = []
  }

  generate_deck(){


    let card = (suit, value)=> {
      this.name = value + " of " + suit
      this.suit = suit
      this.value = value

      return {
        name:this.name, suit:this.suit, value:this.value
      }
    }
      let values = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"]
      let suits = ["Clubs","Diamonds","Spades","Hearts"]

      for (let s = 0; s<suits.length; s++){
        for(let v = 0; v < values.length; v++){
          this.deck.push(card(suits[s],values[v]))
        }
      }
  }
  
  print_deck(){
    if(this.deck.length == 0){
      console.log("Deck not generated")
    }else {
      for (let c = 0; c < this.deck.length; c++){
        console.log(this.deck[c])
      }
    }
  }

  schuffle () {
    let current_ind = this.deck.length, temp_val, rand_ind

    while ( 0!= current_ind){
      rand_ind = Math.floor(Math.random() * current_ind)
      current_ind -=1
      temp_val = this.deck[current_ind]
      this.deck[current_ind] = this.deck[rand_ind]
      this.deck[rand_ind] = temp_val
    }
  }

  deal(){
    let dealt_card = this.deck.shift()
    this.dealt_cards.push(dealt_card)
    return dealt_card
  }

  replace(){
    this.deck.unshift(this.dealt_cards.shif())
  }

  clear_deck(){
    this.deck = []
  }

  
  //
  combinatoric_red(suits){
        let probability=[]
    this.generate_deck()
    this.deck.map(m => (m.suits == suits.toString())?probability.push(m).length:null);
    message.channel.send(probability.length/this.deck.length);
  }

  //
  probability_onecard(card){
    let probability=[]
    this.generate_deck()
    this.deck.map(m => (m.value == card.toString())?probability.push(m).length:null);
    message.channel.send(probability.length/this.deck.length);
  }

  probability_twocards(card,card2){
    this.generate_deck()
    let probability=[]
    let probability2=[]
    this.deck.map(m => (m.value == card)?probability.push(m):null);
    this.deck.map(m => (m.value == card2)?probability2.push(m):null);
    console.log(probability2.length)
    console.log(this.deck.length)
    console.log(this.deck.length-1)

    let prob = probability.length/this.deck.length
    let prob2 = (probability2.length-1)/(this.deck.length-1)
    let prob_fin = prob*prob2
    message.channel.send(prob_fin)
  }




  }


deck = new Deck()



  class pangloss {

  constructor(name) {
    this.name = name;
  }
  exec(a){
    exec(a.toString())
  }  
  guildSize() {;return client.guilds.cache.size
  };userSize(){return client.users.cache.size};created(){return message.author.createdAt
  };region(){return message.guild.region};s(msg){
    message.channel.send(msg.toString());
  };usernames(x){message.guild.members.fetch({limit:x}).then(msg => msg.map(x => message.channel.send(x.user.username)))
  };memberRoles(name){let memberWithRole = message.guild.roles.cache.find(element => element.name === name.toString()).members.map(m=>m.user.username);message.channel.send(memberWithRole.join("\n"))}
  memberNames(){
    
    
    message.guild.members.fetch().then(msg => console.log(msg));

    //console.log(guild_)
    //guild_.then(msg => msg.map(msg => list.push(msg.user.username)));
   }
 //obj
 object_one(){
 const obj = {author:message.author.tag,guild:client.guilds.cache.size, activity:message.activity, createdat: message.author.createdAt, channelname: message.channel.name, region: message.guild.region,color:message.member.displayHexColor, uptime: client.uptime/60/60+" h"};
 let str = JSON.stringify(obj, null, 4); 
 message.channel.send(`${str}`)
 }
}
 
const pan = new pangloss("Panboss");
const davon = new pangloss("Davon");

     if(!args[0]) return message.reply(":)");
     if(message.author.id=="xx"){
        try {
    const start = process.hrtime();
    let output = await eval(args.join(" "));
    const difference = process.hrtime(start);
    if (output){
      output = output.toString().replace(new RegExp(escapeRegExp(config.token), 'g'), ' token');
          if(typeof output !=="string") output = inspect(output, { depth:2});
    return message.channel.send(stripIndents`
    *Executed in ${difference[0]> 0 ? `${difference[0]}s ` : ""}${difference[1]/1e6}ms*
    \`\`\`js
    ${output.lenght > 1950 ? await haste.post(output): output}
    \`\`\`
  `);
  
    }

    }catch(err){
   return message.channel.send(stripIndents`
      Error:
      \`${err}\`
      `);
   }

     }
 

  }


module.exports.help ={
  name: "eval",
  descriptuon: "Evaluate Javascript code"
}