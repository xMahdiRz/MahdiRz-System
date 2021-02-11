const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const emojis = require("../../../emojis.json");
let e = emojis; 

module.exports = class VoteCommand extends BaseCommand {
	constructor() {
		super('vt', 'General', ['vote-server'], 'vt', '­');
	}

	run(client, message, args, lang) {

		const embed = new MessageEmbed()

      .setDescription(`> ** ${e.PBG} قائمة الأوامر الخاصة بـ بوت التصويت :**`)
			.setColor('RANDOM')
      .addFields(
        { name: `> ${e.PSG} \` vt!votes <user> \``, value: `> **${e.PSB}  لمعرفة عدد التصويتات التي قمت بها أو قام بها شخص ما **` },
        { name: `> ${e.PSG} \` vt!leaderboard \``, value: `> **${e.PSB} لمعرفة ترتيب الأعضاء الذين قامو بتصويت لسيرفر من الأكبر إلى الأصغر **` },
        { name: `> ${e.PSG} \` vt!reminders <on | off> \``, value: `> **${e.PSB} تمكين أو تعطيل التذكيرات التي ستذكرك كل 12 ساعة للتصويت **` },
        { name: `> ${e.PSG} \` vt!toggledm \``, value: `> **${e.PSB} تبديل ما إذا كنت تريد تلقي رسائل مباشرة لتأكيد التصويت أم لا **` },
        { name: `> ${e.PSG} \` vt!profile \``, value: `> **${e.PSB} لرؤية البروفايل الخاص بك **` },
        { name: `> **${e.links}・Links :**`, value: "> **[Server](https://discord.gg/s-t) ● [Vote](http://discord.com/users/579173324425527296) ● [Donate](https://paypal.me/Hadikob)**" }
      )

  		message.channel.send(embed)
	}
}