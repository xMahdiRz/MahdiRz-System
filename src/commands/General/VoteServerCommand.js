const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const emojis = require("../../../emojis.json");
let e = emojis; 

module.exports = class VoteCommand extends BaseCommand {
	constructor() {
		super('vt', 'Vote', ['vote-server'], 'vt', '­');
	}

	run(client, message, args, lang) {

		const embed = new MessageEmbed()

      .setDescription("> **<:ST_PointBlue:783045298029199431> ` vt!vote ` | للحصول على رابط التصويت ** \n > **<:ST_PointBlue:783045298029199431> ` vt!votes <user> ` | لمعرفة عدد التصويتات التي قمت بها أو قام بها شخص ما **  \n > **<:ST_PointBlue:783045298029199431> ` vt!leaderboard ` | لمعرفة أكبر الأعضاء الذين قامو بتصويت لسيرفر ** \n > **<:ST_PointBlue:783045298029199431> ` vt!reminders <on | off> ` | تمكين أو تعطيل التذكيرات التي ستذكرك كل 12 ساعة للتصويت ** \n > **<:ST_PointBlue:783045298029199431> ` vt!toggledm ` | تبديل ما إذا كنت تريد تلقي رسائل مباشرة لتأكيد التصويت أم لا **")
			.setColor('#5c0e48')
			.setImage('https://cdn.probot.io/ELtAsaU0AP.gif')

  		message.channel.send(embed)//.then(message => {message.delete({timeout: 10000})})
//      help.addField(`**${e.mod}・Vote Tracker Cmd - (7) :**`, '`vt!vote`, `vt!votes`, `vt!leaderboard`, `vt!reminders`, `vt!reminders`, `vt!toggledm`, `vt!leaderboard`') 
	}
}