const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const emojis = require("../../../emojis.json");
let e = emojis;

module.exports = class EUnmuteCommand extends BaseCommand {
	constructor() {
		super('eunmute', 'mod', ['speak'], 'eunmute [user] [reason]');
	}
	run(client, message, args) {

  if (message.channel.type === 'dm') { return message.reply(`> **${e.error} - عذرا , لايمكنني تشغيل هذا الأمر في الخاص !**`); }

    if ( !message.member.roles.cache.some(r=>["┃🏋🏻‍♀️︰Admins", "┃♖︰Moderators", "┃👩‍🔧︰Girls Mod", "┃🎉︰Events Admin", "┃👑︰Founders", "┃🔰︰Co Founder", "┃🛠︰Developpers", "┃⚡︰SYSTEM"].includes(r.name)) ) { return message.channel.send(`> **${e.error} - ${message.author} , ليس لديك الصلاحية لإستخدام هذا الأمر .**`) }
      else if (!args[0]) {

      message.channel.send(`> **${e.error} - ${message.author} , يجب عليك ذكر عضو لفك الميوت عنه .**`);
		} else {
			try {
				const unmuted = message.mentions.members.first(); 
				const unmuter = message.author.tag; 
				const channel = client.channels.cache.find(channel => channel.name === "emute-logs"); 


        if (unmuted) {

          if (unmuted.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS']) && !message.member.hasPermission('ADMINISTRATOR')) {
						message.channel.send(`> **${e.error} - ${message.author} , عذرا لا يمكنك فك الميوت عن هذا العضو !**`);
					} else {

            let mutedRole = message.guild.roles.cache.find(role => role.name === '┃🔇︰Muted Event'); 


            if (mutedRole) {
							unmuted.roles.remove(mutedRole); 
							message.channel.send(`> **${e.check} - ${unmuted} تم فك الميوت !**`);


              
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
	              .setAuthor(`${message.guild.name}`, 'https://cdn.probot.io/INqoBWuLZa.png', 'https://discord.gg/s-t')
								.setDescription(`> ** ${e.error} لقد تم فك الإسكات عنك ، وأصبح بإمكانك المشاركة في الفعاليات مرة ثانية !**`)
					//			.setThumbnail('https://cdn.probot.io/INqoBWuLZa.png')
								.setTimestamp()
								.setFooter(`© ${message.guild.me.displayName}`, client.user.displayAvatarURL());

							unmuted.send(AlertMuteEmbed).catch(error => { console.error(`${error}`)})



							channel.send(embed);
						} else {
							message.channel.send(`> **${e.error} - ${message.author} , لا يمكنني العثور على رتبة الميوت .**`);
						}
					}
				} else {
					message.channel.send(`> **${e.error} - ${message.author} , العضو ليس موجود !**`);
        }
			} catch (e) {
				console.error(e); 
			}
		}
	}
}