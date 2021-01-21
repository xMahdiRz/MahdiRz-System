/*const { RichEmbed } = require('discord.js');
const Discord = require("discord.js");
const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const { stripIndents } = require("common-tags");
const { cyan } = require("../../../colours.json");
const emojis = require("../../../emojis.json");
let e = emojis;

module.exports = class UnbanCommand extends BaseCommand {
	constructor() {
		super('unban', 'mod', ['unblock'], 'unban [user]');
	}

	run(client, message, args) {

    if (message.channel.type === 'dm') { return message.reply(`> **${e.error} - Sorry, I can't run commands in DMs chat !**`); }

		if (!message.member.hasPermission("BAN_MEMBERS")) {
			return message.channel.send(`> **${e.error} - ${message.author.username}, You do not have permission to unban someone**`)
		}

		if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
			return message.channel.send(`> **${e.error} - ${message.author.username}, I do not have permission to unban someone**`)
		} else if (!args[0]) {
			//check if there was no first argument
			message.channel.send(`> **${e.error} - You have to enter a user to unban.**`);
		} else if (!args[1]) {
			//check if there was no second argument
			message.channel.send(`> **${e.error} - Enter a unban reason.**`);
		} else {

			const bUser = message.mentions.members.first(); 
			const unbanner = message.author.tag; 
			const reason = args[1]; 
			const channel = client.channels.cache.find(channel => channel.name === "ban-kick-logs"); 

			try {
				message.guild.fetchBan(args[0])
			} catch (e) {
			if (e) message.replay('This user is not banned.'); // مايشتغل
				return;
			}

			let userID = args[0]
			message.guild.fetchBans().then(bans => {
				if (bans.size == 0) return
				if (bans.some(b => b.user.id === userID)) {
					let bUser = bans.find(b => b.user.id == userID)
					message.guild.members.unban(bUser.user)

					message.channel.send(`> **${e.check} - \`${bUser.user.tag}\` was unbanned successfully**`)


          
					const embed = new MessageEmbed()
						.setColor(cyan)
						.setTitle(`Member banned by ${unbanner}`)
						.addField('UnBanned Member', `${bUser.user.tag}`, true)
						.setDescription(`**Reason:** ${reason}`)
						.setTimestamp()
						.setFooter(`© ${message.guild.me.displayName}`, client.user.displayAvatarURL());

					channel.send(embed).catch(error => { console.error(`${error}`)})

				}
			})
		}
	}
}*/