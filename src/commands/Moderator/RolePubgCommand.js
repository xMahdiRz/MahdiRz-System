const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const emojis = require("../../../emojis.json");
let e = emojis;

module.exports = class EMuteCommand extends BaseCommand {
	constructor() {
		super('acc', 'Moderator', ['قبول'], 'acc [user] ');
	}

	run(client, message, args) {

    if (message.channel.type === 'dm') { return message.reply(`> **${e.error} - عذرا , لايمكنني تشغيل هذا الأمر في الخاص !**`); }

    if ( !message.member.roles.cache.some(r=>["┃🏋🏻‍♀️︰Admins", "┃♖︰Moderators", "┃👩‍🔧︰Girls Mod", "┃👑︰Founders", "┃🔰︰Co Founder", "┃🛠︰Developpers", "┃⚡︰SYSTEM"].includes(r.name)) ) { return message.channel.send(`> **${e.error} - ${message.author} , ليس لديك الصلاحية لإستخدام هذا الأمر .**`) }
      else if (!args[0]) {

      message.channel.send(`> **${e.error} - ${message.author} , يجب عليك ذكر الشخص الذي تريد إعطائه الرتبة .**`);
		} else {
			try {
				const muted = message.mentions.members.first(); 
				const muter = message.author.tag; 
				const channel = client.channels.cache.find(channel => channel.name === "rolepubg-logs"); 


        if (muted) {
					
					if (muted.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS']) && !message.member.hasPermission('ADMINISTRATOR')) {
						message.channel.send(`> **${e.error} - ${message.author} , لا يمكنك إسكات هذا العضو !**`);
					} else {

            let mutedRole = message.guild.roles.cache.find(role => role.name === '┃⭐︰Pubg Events'); 

					
						if (mutedRole) {
							muted.roles.add(mutedRole); 
							message.channel.send(`**${e.check} - ${muted} تم إعطاء الرتبة !**`);  

						
							const embed = new MessageEmbed()
								.setColor('#ffffff')
								.setTitle(`${e.error}・Role PUBG :`)
								.addField(`${e.info}・Member`, `${muted}`, true)
								.addField(`${e.mod}・Moderator`, `${message.author}`, true)
								.setTimestamp()
								.setFooter(`© ${message.guild.me.displayName}`, client.user.displayAvatarURL());

							channel.send(embed);

							let AlertMuteEmbed = new MessageEmbed()

							.setColor('#ff0000')
								.setTitle(`${e.error} لقد تم قبولك ، وحصلت على رتبة المشاركة في الفعاليات : `)

						//		.setThumbnail('https://cdn.probot.io/INqoBWuLZa.png')
								.setTimestamp()
								.setFooter(`© ${message.guild.me.displayName}`, client.user.displayAvatarURL());

							muted.send(AlertMuteEmbed).catch(error => { console.error(`${error}`)})

						} else {
							message.channel.send(`> **${e.error} - ${message.author} , لا يمكنني العثور على رتبة الفعاليات .**`);
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
