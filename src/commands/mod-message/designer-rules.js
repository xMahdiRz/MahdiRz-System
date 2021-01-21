const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const { cyan } = require("../../../colours.json");
const emojis = require("../../../emojis.json");
let e = emojis;


module.exports = class DesignerRulesCommand extends BaseCommand {
	constructor() {
		super('designer', 'mod-message', ['المصمم' , 'editors' , 'الممنتج'], 'designer', 'لمعرفة قوانين رتبة المصمم والممنتج');
	}

	run(client, message, args, lang) {

  if (!message.member.hasPermission(["MANAGE_MESSAGES"])) return /*message.channel.send(`> **${e.error} - ${message.author} , ليس لديك إذن لاستخدام هذا الأمر!**`);*/


  const embed = new MessageEmbed()
    .setColor("#e1b1f8")
    .setDescription(`**> <:ST_PointGreen:785155990235906058> قوانين رتبة المصمم ، المُمَنتج : <@&781888003751936030> <@&781889616177004550>
> <:ST_Point1:781952599414407181> ان تكون حقوق التصاميم او المونتاج كلها خاصة فيك ، وليست مسروقة . 
> <:ST_Point1:781952599414407181> يجب ان يحصل تصميمك او المقطع الذي تم عمل له مونتاج على 5/10 فما فوق عند تقديم الطلب .
> <:ST_Point1:781952599414407181> ان تكون بعض من تصاميمك او الفيديوهات لأصحاب السيرفر .
> <a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764>
> <:ST_SettingBlue:785163822033141810> - طريقة التقديم :
> <:ST_PointBlue:783045298029199431> التصميم او المقطع الذي سيتم تقديم به الطلب يجب أن يكون مصمم من أجل الستريمرز الموجودين في السيرفر ( الاونرز )  .
> <:ST_PointBlue:783045298029199431> إثبات ملكية التصميم أو المقطع ( عبر ارسال لقطة شاشة "سكرين شوت" للمشروع الخاص به ) .
>  <:ST_PointBlue:783045298029199431> بالتوفيق .
**`)
	  .setImage('https://cdn.probot.io/yE004J4kgN.png')
  message.channel.send(embed).then(async (message) => {

  });
  ;
}

  }
