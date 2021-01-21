const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const { purple_medium } = require("../../../colours.json");
const emojis = require("../../../emojis.json");
let e = emojis; 

module.exports = class RestartCommand extends BaseCommand {
	constructor() {
		super('restart', 'dev', ['reset'], 'restart');
	}

	run(client, message, args, lang) {

		const embed = new MessageEmbed()
			.setDescription(`> **${e.error} - Sorry ${message.author} , this command is only for the owner of the bot.**`)
			.setColor('#5780cd');
		if (message.author.id !== '557711715610001428') return message.channel.send(embed);

		message.channel.send(`> **${e.error} - ${message.author} , The bot is restarting after \`5\` seconds, please wait ...**`).then(() => {
			process.exit({
				timeout: 5000
			});

		})
	}
}