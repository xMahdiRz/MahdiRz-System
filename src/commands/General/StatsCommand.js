const { RichEmbed } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const emojis = require("../../../emojis.json");
let e = emojis;
const Discord = require("discord.js");
const ms = require('ms');


	module.exports = class StatsCommand extends BaseCommand {
	constructor() {
		super('stats', 'General', ['infobot', 'bot'], 'stats');
	}

	run(client, message, args) {

      if (message.channel.type === 'dm') { return message.reply(`> **${e.error} - Sorry, I can't run commands in DMs chat !**`); }

    const ready = client.channels.cache.find(channel => channel.name === "status-bot"); 
    var server = client.guilds.cache.get("664614587714240512");

		const embed = new MessageEmbed()
			.setAuthor(client.user.username, client.user.avatarURL())
			.setTitle(`${e.folder} - Bot Info Overview :`)
			.setThumbnail(client.user.displayAvatarURL())
			.setColor('#0eafe0')
			.setDescription(`● Here you can find some information for  \`${message.guild.me.displayName}\` Bot :`)
			.addField(`> ${e.info}・Stats - (1) : `, `** Users : \` ${server.memberCount} \` **`)

//			.addField(`> ${e.info}・Stats - (1) : `, `** Users : \` ${client.users.cache.size} \` **`)

			.addField(`> ${e.download}・Statistics - (1) : `, `** RAM Usage : \` ${(process.memoryUsage().rss / 1048576).toFixed()} MB \` **`)
			.addField(`> ${e.ping}・Input - (2) : `, `** Ping : \` ${Date.now() - message.createdTimestamp}ms \` \n  Online for : \` ${ms(client.uptime, { long: true })} \` **`)
			.addField(`> ${e.developer}・MoreInfo - (2) : `, `** Language : \` JavaScript \` \n   Prefix : \` ${client.prefix} \` **`)
			.addFields({
				name: `> **${e.links}・Links - (4) :**`,
				value: "[Support](https://discord.gg/GWrag5v) ● [Donate](https://paypal.me/Hadikob) ● [Website](http://managegift.ga) ● [Invite](https://discordapp.com/oauth2/authorize?client_id=598564396691750933&scope=bot&permissions=8)"
			}, )

		.setFooter(`© ${message.guild.me.displayName}`, client.user.displayAvatarURL())

		message.channel.send(embed);
	}
}
