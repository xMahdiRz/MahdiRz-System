/*const Discord = require("discord.js");
const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const { cyan } = require("../../../colours.json");
const emojis = require("../../../emojis.json");
let e = emojis;
const fs = require("fs");
const db = require("quick.db");

let warns = require("../../../warnings.json", "utf8");

//let warns = JSON.parse(fs.readFileSync("../../../warnings.json", "utf8"));

module.exports = class WarnCommand extends BaseCommand {
	constructor() {
		super('warn', 'mod', ['be-careful'], 'warn [user]');
	}

	run(client, message, args, lang) {

 		if (message.channel.type === 'dm') {
			return message.reply(`> **${e.error} - Sorry, I can't run commands in DMs chat !**`);
		}


    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
			message.channel.send(`> **${e.error} - ${message.author} , You do not have permission to use this command .**`);
		} else if (!args[0]) {

      message.channel.send(`> **${e.error} - ${message.author} , You have to enter a user to see his warnings !**`);
		} else {

		const wUser = message.mentions.members.first();
		if (wUser === message.author.id) return message.channel.send(`> **${e.error} - Are you retarded? Why do you wanna warn yourself?**`)
		if (!wUser) return message.reply(`> **${e.error} - ${message.author} , Member not found.**`);
		let reason = args.join(" ").slice(22);
		if (!reason) return message.channel.send(`> **${e.error} - ${message.author} , Enter a warn reason.**`)
		if (!warns[wUser.id]) warns[wUser.id] = {
			warns: 0
		};

//		warns[wUser.id].warns++;

		fs.writeFile("../../../warnings.json", JSON.stringify(warns), (err) => {
			if (err) console.log(err)
		});

		let warnEmbed = new MessageEmbed()
			.setTitle(`${e.error}・New warn :`)
			.setColor('#5780cd')
			.addField(`${e.info}・User`, `${wUser}`, true)
			.addField(`${e.mod}・Moderator`, `${message.author}`, true)
			.addField(`${e.check}・Reason`, `${reason ? reason : "None."}`);
//		warnEmbed.addField(`${e.folder}・Number of Warnings`, warns[wUser.id].warns)

		const warnchannel = client.channels.cache.find(channel => channel.name === "warn-logs"); //look for the channel called mod-logs
		if (!warnchannel) return message.channel.send(`> **${e.error} - ${message.author} , Couldn't find \`warn-log\` channel**`);

		warnchannel.send(warnEmbed);
		message.channel.send(`> **${e.check} - ${wUser.user} was warned successfully !**`)

		let AlertWarnEmbed = new MessageEmbed()
			.setTitle(`${e.error}・You were warned!`)
			.setThumbnail('https://c.top4top.io/p_1742wpk2g1.png')
			.setColor('#ff0000')
		AlertWarnEmbed.addField(`${e.check}・Reason`, `${reason ? reason : "None."}`)
//		AlertWarnEmbed.addField(`${e.folder}・Number of Warnings`, warns[wUser.id].warns)
			.setFooter(`© ${message.guild.me.displayName}`, client.user.displayAvatarURL());

		wUser.send(AlertWarnEmbed);

	}


}
}*/
/*const Discord = require("discord.js");
const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const { cyan } = require("../../../colours.json");
const emojis = require("../../../emojis.json");
let e = emojis;
const fs = require("fs");
const db = require("quick.db");



module.exports = class WarnCommand extends BaseCommand {
	constructor() {
		super('warn', 'mod', ['be-careful'], 'warn [user]');
	}

	run(client, message, args, lang) {

 		if (message.channel.type === 'dm') {
			return message.reply(`> **${e.error} - Sorry, I can't run commands in DMs chat !**`);
		}


    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
			message.channel.send(`> **${e.error} - ${message.author} , You do not have permission to use this command .**`);
		} else if (!args[0]) {

      message.channel.send(`> **${e.error} - ${message.author} , You have to enter a user to see his warnings !**`);
		} else {

		const wUser = message.mentions.members.first();
		if (wUser === message.author.id) return message.channel.send(`> **${e.error} - Are you retarded? Why do you wanna warn yourself?**`)
		if (!wUser) return message.reply(`> **${e.error} - ${message.author} , Member not found.**`);
		let reason = args.join(" ").slice(22);
		if (!reason) return message.channel.send(`> **${e.error} - ${message.author} , Enter a warn reason.**`)
		if (!warns[wUser.id]) warns[wUser.id] = {
			warns: 0
		};

		warns[wUser.id].warns++;

		fs.writeFile("../../../warnings.json", JSON.stringify(warns), (err) => {
			if (err) console.log(err)
		});

		let warnEmbed = new MessageEmbed()
			.setTitle(`${e.error}・New warn :`)
			.setColor('#5780cd')
			.addField(`${e.info}・User`, `${wUser}`, true)
			.addField(`${e.mod}・Moderator`, `${message.author}`, true)
			.addField(`${e.check}・Reason`, `${reason ? reason : "None."}`);
//		warnEmbed.addField(`${e.folder}・Number of Warnings`, warns[wUser.id].warns)

		const warnchannel = client.channels.cache.find(channel => channel.name === "warn-logs"); //look for the channel called mod-logs
		if (!warnchannel) return message.channel.send(`> **${e.error} - ${message.author} , Couldn't find \`warn-log\` channel**`);

		warnchannel.send(warnEmbed);
		message.channel.send(`> **${e.check} - ${wUser.user} was warned successfully !**`)

		let AlertWarnEmbed = new MessageEmbed()
			.setTitle(`${e.error}・You were warned!`)
			.setThumbnail('https://c.top4top.io/p_1742wpk2g1.png')
			.setColor('#ff0000')
		  .addField(`${e.check}・Reason`, `${reason ? reason : "None."}`)
//		AlertWarnEmbed.addField(`${e.folder}・Number of Warnings`, warns[wUser.id].warns)
			.setFooter(`© ${message.guild.me.displayName}`, client.user.displayAvatarURL());

		wUser.send(AlertWarnEmbed);

	}


}
}*/