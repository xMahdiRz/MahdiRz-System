/*const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const { purple_medium } = require("../../../colours.json");
const emojis = require("../../../emojis.json");
let e = emojis;

module.exports = class UnmuteCommand extends BaseCommand {
	constructor() {
		super('unmute', 'mod', ['speak'], 'unmute [user]');
	}
	run(client, message, args) {

      if (message.channel.type === 'dm') { return message.reply(`> **${e.error} - Sorry, I can't run commands in DMs chat !**`); }


    if (!message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) {
			message.channel.send(`> **${e.error} - ${message.author} , You don't have permission to unmute someone.**`);
		} else if (!args[0]) {

      message.channel.send(`> **${e.error} - ${message.author} , You have to enter a user to unmute.**`);
		} else {
			try {
				const unmuted = message.mentions.members.first(); 
				const unmuter = message.author.tag; 
				const channel = client.channels.cache.find(channel => channel.name === "mute-logs"); 


        if (unmuted) {

          if (unmuted.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS']) && !message.member.hasPermission('ADMINISTRATOR')) {
						message.channel.send(`> **${e.error} - ${message.author} , You can't unmute that person.**`);
					} else {

            let mutedRole = message.guild.roles.cache.find(role => role.name === 'Muted'); 


            if (mutedRole) {
							unmuted.roles.remove(mutedRole); 
							message.channel.send(`> **${e.check} - ${unmuted} unmuted!**`);


              
							const embed = new MessageEmbed()
								.setColor('#ffffff')
								.setTitle(`${e.error}・New unmute process :`)
								.addField(`${e.info}・Unmuted Member`, `${unmuted}`, true)
								.addField(`${e.mod}・Moderator`, `${message.author}`, true)
								.setTimestamp()
								.setFooter(`© ${message.guild.me.displayName}`, client.user.displayAvatarURL());

							channel.send(embed);

							let AlertMuteEmbed = new MessageEmbed()

				    		.setColor('#ff0000')
								.setTitle(`${e.error}・You have been unmuted from : \`${message.guild.name}\` Server`)
								.setThumbnail('https://c.top4top.io/p_1742wpk2g1.png')
								.setTimestamp()
								.setFooter(`© ${message.guild.me.displayName}`, client.user.displayAvatarURL());

							unmuted.send(AlertMuteEmbed).catch(error => { console.error(`${error}`)})



							channel.send(embed);
						} else {
							message.channel.send(`> **${e.error} - ${message.author} , Can't find the muted role.**`);
						}
					}
				} else {
					message.channel.send(`> **${e.error} - ${message.author} , Member not found.**`);
				}
			} catch (e) {
				console.error(e); 
			}
		}
	}
}*/