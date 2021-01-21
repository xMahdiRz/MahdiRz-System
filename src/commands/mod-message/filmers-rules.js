const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const { cyan } = require("../../../colours.json");
const emojis = require("../../../emojis.json");
let e = emojis;


module.exports = class FilmersRulesCommand extends BaseCommand {
	constructor() {
		super('filmers', 'mod-message', ['سينما' , 'cinema'], 'filmers', 'لمعرفة قوانين رتبة عارضين الأفلام');
	}

	run(client, message, args, lang) {

  if (!message.member.hasPermission(["MANAGE_MESSAGES"])) return /*message.channel.send(`> **${e.error} - ${message.author} , ليس لديك إذن لاستخدام هذا الأمر!**`);*/


  const embed = new MessageEmbed()
    .setColor("#969696")
    .setDescription(`**> <:ST_PointGreen:785155990235906058> قوانين رتبة السينما : <@&781887997498097704> 
> <:ST_Point1:781952599414407181> مهم أن تكون سرعة الأنترنيت الخاصة بك فوق 10 ميغابايت/ثانية 
> <:ST_Point1:781952599414407181> الأفلام التي تعرضها يجب أن تكون مناسبة للفئة العمرية "+16" .
> <:ST_Point1:781952599414407181> يمنع عرض أي من الأفلام الرومانسية / التركية / الهندية .
> <a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764>
> <:ST_SettingBlue:785163822033141810> - طريقة التقديم :
> <:ST_PointBlue:783045298029199431> إرسال لقطة شاشة ( سكرين شووت لسرعة النت الخاصة بك ) : https://www.speedtest.net
>  <:ST_PointBlue:783045298029199431>  سوف نقوم بدعوتك قريبا إلى روم صوتي لتجربة عرض فلم ، كن صبورا .
**`)
	  .setImage('https://cdn.probot.io/5FyIGsayku.png')
  message.channel.send(embed).then(async (message) => {

  });
  ;
}

  }
