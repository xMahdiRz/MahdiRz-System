const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const { cyan } = require("../../../colours.json");
const emojis = require("../../../emojis.json");
let e = emojis;


module.exports = class ArtsRulesCommand extends BaseCommand {
	constructor() {
		super('avatars', 'mod-message', ['افتار'], 'avatars', 'لإرسال قوانين رتبة الأفاترات');
	}

	run(client, message, args, lang) {

  if (!message.member.hasPermission(["MANAGE_MESSAGES"])) return /*message.channel.send(`> **${e.error} - ${message.author} , ليس لديك إذن لاستخدام هذا الأمر!**`);*/


  const embed = new MessageEmbed()
    .setColor("#3caec0")
    .setDescription(`**> <:ST_PointGreen:785155990235906058> قوانين رتبة الأفتارات : <@&789833589172600872> 
> <:ST_Point1:781952599414407181> قم بإرسال إحدى الأفتارات التي لديك ، لنقيم صورك !
> <:ST_Point1:781952599414407181>أطلعنا على مصدر الأفاترات 
> <a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764>
> <:ST_PointBlue:783045298029199431> تنبيه : في حالة قبولك يرجى مراعاة قوانين الرومات ، حيث صور البنات تكون في <#789816765819256862> ، والأولاد في : <#789816804695474176> ، والأنمي في : <#789816838992953364> 
> <:ST_PointBlue:783045298029199431> يمكنك الإنضمام إلى السيرفرات الخاصة بالأفاترات ، فقط إضغط على الرابط !
> <:ST_PointRed:789213066960961536> https://discord.gg/gif
> <:ST_PointRed:789213066960961536> https://discord.gg/ju
> <:ST_PointRed:789213066960961536> https://discord.gg/9my4SSZ2aa
**`)
	  .setImage('https://cdn.probot.io/adhZaxYTky.png')
  message.channel.send(embed).then(async (message) => {

  });
  ;
}

  }