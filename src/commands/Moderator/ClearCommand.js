/*const BaseCommand = require('../../utils/structures/BaseCommand');
const emojis = require("../../../emojis.json");
let e = emojis;

module.exports = class ClearCommand extends BaseCommand {
	constructor() {
		super('clear', 'mod', ['purge', 'delete'], 'clear [number]');
	}

	run(client, message, args) {

    if (message.channel.type === 'dm') { return message.reply(`> **${e.error} - Sorry, I can't run commands in DMs chat !**`); }


    if (!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send(`> **${e.error} - ${message.author} , You do not have permission to use this command!**`);


    let messagecount = parseInt(args[0]);

		if (!args[0]) return message.channel.send(`> **${e.error} - ${message.author} , You forgot to include a number \` 2 - 100 \` !**`);

		if (messagecount > 100) {
			message.channel.send(`> **${e.error} - ${message.author} Error, you can only delete between \` 2 - 100 \` messages at one time !**`)
		} else if (messagecount < 2) {
			message.channel.send(`> **${e.error} - ${message.author} Error, you can only delete between \` 2 - 100 \` messages at one time !**`)
		} else {

			message.channel.bulkDelete(args[0]); 

			message.channel.send(`> **${e.check} - ${message.author} , Number of messages requested have been successfully deleted .**`).then(message => {
					message.delete({
						timeout: 3000
					})
				})
				.catch(console.error);
		}
 
	}
}*/