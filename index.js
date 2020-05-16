const config = require("./config");
const{Client, Collection}=require("discord.js");

const client = new Client({
  disableEveryone: true,
  shardCount: 2,
  disableEvents: ["TYPING_START"]
});

client.commands = new Collection();

const commands = require("./structures/command");
commands.run(client)
const events = require("./structures/event");
commands.run(client)

client.login(config.token)









