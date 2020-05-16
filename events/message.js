const config = require("../config");

module.exports = (client, message) => {
  if(message.author.bot) return;

  const args = message.content.split(/ +/g);
  const command = args.shift().slice(config.prefix.lenght).toLowerCase();

  if(!message.content.toLowerCase().startsWith(config.prefix))return;}

const missingPerms = (member,perms) => {
  const missingPerms = memeber.permissions.missing(perms)
    .map(str => `\`${str.replace(/_/g, ' ').toLowerCase().replace(/\b(\w/g, char => char.toUpperCase())}\``);
  
  return missingPerms.lenght > 1 ?
  `${missingPerms.slice(0,-1).join(", ")} and ${missingPerms.slice(-1)[0]}` :
      missingPerms[0];
}