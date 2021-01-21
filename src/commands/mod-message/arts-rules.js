const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const { cyan } = require("../../../colours.json");
const emojis = require("../../../emojis.json");
let e = emojis;


module.exports = class ArtsRulesCommand extends BaseCommand {
	constructor() {
		super('arts', 'mod-message', ['الرسام' , 'art'], 'arts', 'لإرسال قوانين رتبة الرسم');
	}

	run(client, message, args, lang) {

  if (!message.member.hasPermission(["MANAGE_MESSAGES"])) return /*message.channel.send(`> **${e.error} - ${message.author} , ليس لديك إذن لاستخدام هذا الأمر!**`);*/


  const embed = new MessageEmbed()
    .setColor("#f38c1f")
    .setDescription(`**> <:ST_PointGreen:785155990235906058> قوانين رتبة الرسام : <@&781888003768582145> 
> <:ST_Point1:781952599414407181> أن يكون الرسم خاص فيك ( ليس من قوقل ) .
> <:ST_Point1:781952599414407181> لإثبات ملكية الرسم يرجى الإمضاء في ورقة الرسم بإسمك أو إسم السيرفر .
**`)
	  .setImage('https://cdn.probot.io/adhZaxYTky.png')
  message.channel.send(embed).then(async (message) => {

  });
  ;
}

  }
