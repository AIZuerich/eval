const moment = require("moment");
const timestamp = `[${moment().format("YYYY-MM-DD HH:mm:ss")}]:`;


exports.run = async (client, message, args) => {
    
		try {
            const msg = await message.channel.send("Ping! 🏓");
            msg.edit(`Pong! 🏓\nMessage roundtrip took: \`${msg.createdTimestamp - message.createdTimestamp}ms\`.`);
        } catch (error) {
            console.error(`${timestamp} ${error}`);
        }
	
}





module.exports.help = {
  name: "ping1",
  description: " a simple ping command"
}

