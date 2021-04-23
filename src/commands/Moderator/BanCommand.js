/*const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const { purple_medium } = require("../../../colours.json");
const emojis = require("../../../emojis.json");
let e = emojis;

module.exports = class BanCommand extends BaseCommand {
	constructor() {
		super('ban', 'mod', ['lobby'], 'ban [user]');
	}

	async run(client, message, args) {

      if (message.channel.type === 'dm') { return message.reply(`> **${e.error} - Sorry, I can't run commands in DMs chat !**`); }


    if (!message.member.hasPermission('BAN_MEMBERS')) {
			message.channel.send(`> **${e.error} - ${message.author} , You do not have permission to ban someone !**`);
		} else if (!args[0]) {

      message.channel.send(`> **${e.error} - ${message.author} , You have to enter a user to ban.**`);
		} else if (!args[1]) {

      message.channel.send(`> **${e.error} - ${message.author} , Enter a ban reason.**`);
		} else {

      try {
				const banned = message.mentions.members.first(); //get the first member that was mentioned
				const banner = message.author.tag; //get the user that sent the command
	    	const reason = args.join(" ").slice(22); //get the second argument
				const channel = client.channels.cache.find(channel => channel.name === "ban-kick-logs"); //attempt to find the channel called mod-logs


        if (banned) {

          if (!message.guild.member(banned).bannable) return message.channel.send(`> **${e.error} - That user is not bannable.**`);

					 

					message.channel.send(`> **${e.check} - \`${banned.user.tag}\` was banned successfully**`);

					
					const embed = new MessageEmbed()
						.setColor('#ff0000')
						.setTitle(`${e.error}・New ban process :`)
						.addField(`${e.info}・Banned Member`, `${banned}`, true)
						.addField(`${e.mod}・Moderator`, `${message.author}`, true)
						.addField(`${e.check}・Reason :`, ` ${reason}`)
						.setTimestamp()
						.setFooter(`© ${message.guild.me.displayName}`, client.user.displayAvatarURL());

					channel.send(embed);

					let AlertBanEmbed = new MessageEmbed()

			  		.setColor('#ff0000')
						.setTitle(`${e.error}・You have been banned from : \`${message.guild.name}\` Server`)
						.setThumbnail('https://cdn.probot.io/INqoBWuLZa.png')
						.addField(`${e.check}・Reason :`, ` ${reason}`)
						.setTimestamp()
						.setFooter(`© ${message.guild.me.displayName}`, client.user.displayAvatarURL());

					banned.send(AlertBanEmbed).catch(error => { console.error(`${error}`)})
//banned.ban();
				} else {
					message.channel.send(`> **${e.error} - ${message.author} , Member not found.**`);
				}
			} catch (e) {
				console.error(e); 
			}
		}
	}
}*/