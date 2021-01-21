/*const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const { purple_medium } = require("../../../colours.json");
const emojis = require("../../../emojis.json");
let e = emojis;

module.exports = class MuteCommand extends BaseCommand {
	constructor() {
		super('mute', 'mod', ['shut-up'], 'mute [user]');
	}

	run(client, message, args) {

    if (message.channel.type === 'dm') { return message.reply(`> **${e.error} - Sorry, I can't run commands in DMs chat !**`); }


    if (!message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) {
			message.channel.send(`> **${e.error} - ${message.author} , You don't have permission to mute someone.**`);
		} else if (!args[0]) {

      message.channel.send(`> **${e.error} - ${message.author} , You have to enter a user to mute.**`);
		} else if (!args[1]) {

      message.channel.send(`> **${e.error} - ${message.author} , Enter a mute reason.**`);
		} else {
			try {
				const muted = message.mentions.members.first(); 
				const muter = message.author.tag; 
				const reason = args[1]; 
				const channel = client.channels.cache.find(channel => channel.name === "mute-logs"); 


        if (muted) {
					
					if (muted.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS']) && !message.member.hasPermission('ADMINISTRATOR')) {
						message.channel.send(`> **${e.error} - ${message.author} , You can't mute that person.**`);
					} else {

            let mutedRole = message.guild.roles.cache.find(role => role.name === 'Muted'); 

					
						if (mutedRole) {
							muted.roles.add(mutedRole); 
							message.channel.send(`**${e.check} - ${muted} muted from the text!**`);  

						
							const embed = new MessageEmbed()
								.setColor('#ffffff')
								.setTitle(`${e.error}・New mute process :`)
								.addField(`${e.info}・Muted Member`, `${muted}`, true)
								.addField(`${e.mod}・Moderator`, `${message.author}`, true)
								.addField(`${e.check}・Reason :`, ` ${reason}`)
								.setTimestamp()
								.setFooter(`© ${message.guild.me.displayName}`, client.user.displayAvatarURL());

							channel.send(embed);

							let AlertMuteEmbed = new MessageEmbed()

							.setColor('#ff0000')
								.setTitle(`${e.error}・You have been Muted from : \`${message.guild.name}\` Server`)
								.setThumbnail('https://c.top4top.io/p_1742wpk2g1.png')
								.addField(`${e.check}・Reason :`, ` ${reason}`)
								.setTimestamp()
								.setFooter(`© ${message.guild.me.displayName}`, client.user.displayAvatarURL());

							muted.send(AlertMuteEmbed).catch(error => { console.error(`${error}`)})

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
}
*/