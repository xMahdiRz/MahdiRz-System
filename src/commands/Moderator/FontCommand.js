const BaseCommand = require('../../utils/structures/BaseCommand');
const emojis = require("../../../emojis.json");
let e = emojis;

module.exports = class FontCommand extends BaseCommand {
	constructor() {
		super('font', 'mod', ['decoration' , 'line' , 'خط'], 'font');
	}

	run(client, message, args) {

      if (message.channel.type === 'dm') { return message.reply(`> **${e.error} - Sorry, I can't run commands in DMs chat !**`); }
      if(!message.member.hasPermission('MANAGE_MESSAGES')) { message.channel.send(`> **${e.error} - ${message.author} , You do not have permission to use this command .**`); }

      else {

		if (message.author.send) {
			message.delete();

        message.channel.send({ files: ['https://probot.media/4QiCoFnaSn.png'] });
		}
	}}
}