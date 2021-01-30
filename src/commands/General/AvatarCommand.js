const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const { stripIndents } = require("common-tags");
const { cyan } = require("../../../colours.json");
const emojis = require("../../../emojis.json");
let e = emojis;
const Discord = require("discord.js");
const Client = new Discord.Client();


module.exports = class AvatarCommand extends BaseCommand {
	constructor() {
		super('avatar', 'General', ['picture'], 'picture', 'See a user avatar');
	}

	run(client, message, args, lang, prefix) {

 		if (message.channel.type === 'dm') {
			return message.reply(`> **${e.error} - Sorry, I can't run commands in DMs chat !**`);
		}

		let embed = new MessageEmbed();
		if (!message.mentions.users.first()) {
			embed.setAuthor(message.author.tag, message.author.displayAvatarURL())
				.setDescription(`**${e.image} - Avatar Links :\n ${e.links} - [PNG](${message.author.displayAvatarURL({format: "png", size: 4096})}) | [JPG](${message.author.displayAvatarURL({format: "jpg", size: 4096})}) | [GIF](${message.author.displayAvatarURL({format: "gif", size: 4096, dynamic: true})}) | [WebP](${message.author.displayAvatarURL({format: "webp", size: 4096})})**`)
				.setColor(message.member.displayHexColor)
				.setFooter(`Requested by : ${message.author.tag}`, message.author.avatarURL())
				.setImage(message.author.displayAvatarURL({
					size: 4096,
					dynamic: true
				}))
			message.channel.send(embed);

		} else {

			const user = message.mentions.users.first() || message.author

			let ColorUser = message.mentions.members.first()
			var highestRoleID = ColorUser.roles.highest.id;
			if (!ColorUser.roles) console.log('no roles')

			embed.setAuthor(user.tag, user.displayAvatarURL())
				.setDescription(`**${e.image} - Avatar Links :\n ${e.links} - [PNG](${user.displayAvatarURL({format: "png", size: 4096})}) | [JPG](${user.displayAvatarURL({format: "jpg", size: 4096})}) | [GIF](${user.displayAvatarURL({format: "gif", size: 4096, dynamic: true})}) | [WebP](${user.displayAvatarURL({format: "webp", size: 4096})})**`)
				.setColor(ColorUser.displayHexColor)
				.setFooter(`Requested by : ${message.author.tag}`, message.author.avatarURL())
				.setImage(client.users.cache.get(user.id).displayAvatarURL({
					size: 4096,
					dynamic: true
				}))

			message.channel.send(embed)

	
		}
	}
}