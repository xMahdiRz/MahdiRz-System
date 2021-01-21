const { RichEmbed } = require('discord.js');
const Discord = require("discord.js");
const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const { cyan } = require("../../../colours.json");
const emojis = require("../../../emojis.json");
let e = emojis;
const fs = require("fs");

let warns = require("../../../warnings.json", "utf8");

module.exports = class WarningCommand extends BaseCommand {
	constructor() {
		super('warnings', 'mod', ['wrongs', 'warning'], 'warnings [user]');
	}

	run(bot, message, args) {

		if (message.channel.type === 'dm') {
			return message.reply(`> **${e.error} - Sorry, I can't run commands in DMs chat !**`);
		}


    if (!message.member.hasPermission("ADMINISTRATOR")) {
			message.channel.send(`> **${e.error} - ${message.author} , You do not have permission to use this command .**`);
		} else if (!args[0]) {

      message.channel.send(`> **${e.error} - ${message.author} , You have to enter a user to see his warnings !**`);
		} else {

			const wUser = message.mentions.members.first();
			if (!wUser) return message.channel.send(`> **${e.error} - ${message.author} , Member not found.**`)

			let warnlevel = warns[wUser.id].warns;

			if (warnlevel, (err) => {
					if (warnlevel === 1) return message.channel.send({
						embed: {
							color: 16777215,
							description: `> **${e.info} - <@${wUser.id}> has 0 warnings .**`
						}
					});
				});


			if (warnlevel === 1) return message.channel.send({
				embed: {
					color: 1,
					description: `> **${e.error} - <@${wUser.id}> has 1 warning .**`
				}
			});

			let warnlvlEmbed = new Discord.MessageEmbed()
				.setColor("#ff0000")
				.setDescription(`> **${e.error} - <@${wUser.id}> has ${warnlevel} warnings .**`);

			message.channel.send(warnlvlEmbed);
		};
	}
}