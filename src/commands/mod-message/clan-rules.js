const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const { cyan } = require("../../../colours.json");
const emojis = require("../../../emojis.json");
let e = emojis;


module.exports = class ClanRulesCommand extends BaseCommand {
	constructor() {
		super('clan', 'mod', ['كلان'], 'clan', 'لمعرفة قوانين الإنضمام الى الكلان');
	}

	run(client, message, args, lang) {

  if (!message.member.hasPermission(["MANAGE_MESSAGES"])) return /*message.channel.send(`> **${e.error} - ${message.author} , ليس لديك إذن لاستخدام هذا الأمر!**`);*/


  const embed = new MessageEmbed()
    .setColor(cyan)
    .setDescription(`**> <:ST_PointGreen:785155990235906058> - شروط وقوانين الإنضمام إلى كلان الخاصة بـ ببجي موبايل هي :
> <a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764>
> <:ST_PointGreen:785155990235906058> - شروط الإنضمام إلى الكلان :
> <:ST_Point1:781952599414407181> أن يكون الحساب مستواه 45 فما فوق .
> <:ST_Point1:781952599414407181> ان يكون قد وصل إلى تقييم دايموند (ماسي) .
> <:ST_Point1:781952599414407181> أن يكون معدل القتل من 1.5 فما فوق .
> <:ST_Point1:781952599414407181> وضع الشعار الخاص بالكلان قبل الاسم \`ST\` !
> <a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764>
> <:ST_SettingBlue:785163822033141810> - القوانين الخاصة بـ الكلان :
> <:ST_PointBlue:783045298029199431> أن يكون عضو متفاعل في الكلان .
> <:ST_PointBlue:783045298029199431> إذا لاحظنا عدم تفاعلك في الكلان قد يتم طردك .
> <:ST_PointBlue:783045298029199431> أن لا يستعمل أي نوع من أنواع الهكر او الغش .
> <:ST_PointBlue:783045298029199431> عدم الإلحاق بـ سمعة الكلان أشياء ليست جيدة .
> <a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764>
> <:ST_PointGreen:785155990235906058> - طريقة التقديم :
> <:ST_Point1:781952599414407181> قم بتصوير حسابك عبر لقطة الشاشة ( البروفايل الخاص بك في ببجي )
> <:ST_Point1:781952599414407181> قم بإرسال الايدي الخاص بك
> <:ST_Point1:781952599414407181> قم بتأكيد على تغيير إسمك
> <:ST_Point1:781952599414407181> اذا كنت موجود مسبقا في كلان آخرى قم بالخروج منها
> <:ST_Point1:781952599414407181> سوف نقوم بدعوتك قريبا ، كن صبورا **`)
	  .setImage('https://cdn.probot.io/KPZZsbDpDc.png')
  message.channel.send(embed).then(async (message) => {

  });
  ;
}

  }
