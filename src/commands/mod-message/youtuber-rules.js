const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const { cyan } = require("../../../colours.json");
const emojis = require("../../../emojis.json");
let e = emojis;


module.exports = class ReactionRoleCommand extends BaseCommand {
	constructor() {
		super('yt', 'mod-message', ['يوتيوبر' , 'youtuber'], 'yt');
	}

	run(client, message, args, lang) {

  if (!message.member.hasPermission(["MANAGE_MESSAGES"])) return /*message.channel.send(`> **${e.error} - ${message.author} , ليس لديك إذن لاستخدام هذا الأمر!**`);*/


  const embed = new MessageEmbed()
    .setColor("#ff0000")
    .setDescription(`**> <:ST_PointGreen:785155990235906058> - قوانين رتبة اليوتيوبر :
> <:ST_Point1:781952599414407181> ان لا يقل عدد المشتركين على 5000 مشترك .
> <:ST_Point1:781952599414407181> ان يكون المتحوى الذي تقدمه هادف واخلاقي .
> <:ST_Point1:781952599414407181> نشر بثوث أو فيديوهات بشكل شبه يومي ( تفاعل بالقناة ) .
> <a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764>
> <:ST_SettingBlue:785163822033141810> - طريقة التقديم :
> <:ST_PointBlue:783045298029199431> أرسل إسم قناتك أو رابطها .
> <:ST_PointBlue:783045298029199431> أثبت ملكية قناتك عبر ربطها بحسابك في الديسكورد ، لمعرفة طريقة ربط حسابك توجه : <#719920125549084713> .
> <:ST_PointBlue:783045298029199431>  سوف نقوم بالرد عليك قريبا ، كن صبورا .**`)
	  .setImage('https://cdn.probot.io/9V7S6FKXTG.png')
  message.channel.send(embed).then(async (message) => {

  });
  ;
}

  }
