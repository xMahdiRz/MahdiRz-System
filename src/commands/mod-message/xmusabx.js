const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const { cyan } = require("../../../colours.json");
const emojis = require("../../../emojis.json");
let e = emojis;


module.exports = class ArtsRulesCommand extends BaseCommand {
	constructor() {
		super('m', 'mod-message', ['xmusabx'], 'xmusabx', 'xmusabx');
	}

	run(client, message, args, lang) {

  if (!message.member.hasPermission(["MANAGE_MESSAGES"])) return /*message.channel.send(`> **${e.error} - ${message.author} , ليس لديك إذن لاستخدام هذا الأمر!**`);*/


	if (message.author.id !== '579173324425527296' && message.author.id !== '557711715610001428' ) return;

	//	message.delete();

	const mnaiir = new MessageEmbed()

	.setColor('#e08594')
	.setAuthor('Mnaiir l مناير', 'https://yt3.ggpht.com/ytc/AAUvwng4uqWFtqsnLUde02vymOUlr8IqP8Z5w5bwv5yrHw=s88-c-k-c0x00ffffff-no-rj')
	.setDescription(`> <a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764>
> **<a:MG_Youtube:821790535852490782> | Youtube : [منـآير•MnAiiR](https://bit.ly/MNAIIR-YT)**
> **<a:MG_Twitch:825069776216784976> | Twitch : [imnaiiri](https://www.twitch.tv/imnaiiri)**
> **<a:MG_Instagram:821790546107957290> | Instagram : [@7ll.11](https://bit.ly/MNAIIR-Inst)**
> **<a:MG_Discord:825030310507839488> | Discord : <@!379643020137725972> **
> <a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764>
`)
	.setImage('https://yt3.ggpht.com/nbOWtGSGV1B_XQZHc6DizCQ5QT9lmP_isDlXm9jcHv_GGKIvyHPTOQdo4eGqo2auM7jnufwD=w1280-fcrop64=1,32b75a57cd48a5a8-k-c0xffffffff-no-nd-rj')
  message.channel.send(mnaiir)

	/*	const xsame7x = new MessageEmbed()

	.setColor('#00a8f1')
	.setAuthor('xSaMe7x l سامح', 'https://cdn.probot.io/1YtFk59Bdk.png')
	.setDescription(`> <a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764>
> **<a:MG_Youtube:821790535852490782> | Youtube : [xSaMe7x l سامح](https://bit.ly/xSaMe7x-YT)**
> **<a:MG_Twitch:825069776216784976> | Twitch : [xSaMe7x](https://bit.ly/xSaMe7x-Twit)**
> **<a:MG_Facebook:821790533818908732> | Facebook : [XSaMe7x I سامح](https://bit.ly/xSaMe7x-Fb)**
> **<a:MG_Instagram:821790546107957290> | Instagram : [@xSaMe7x](https://bit.ly/xSaMe7x-Inst)**
> **<a:MG_Pubg:825036799888982026> | Pubg ID : \`5177071266\` **
> **<a:MG_Discord:825030310507839488> | Discord : <@!291953829572902912> **
> <a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764>
`)
	.setImage('https://yt3.ggpht.com/UKaq-Y8knORoMzl7jVvG58JoxTfnTVxKJlgLOBtduCFwsZupywYSZbWoxPzDDx8QwpCCzyuzhA=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj')

  message.channel.send(xsame7x)

    const bulahab = new MessageEmbed()

      .setColor('#f54a04')
      .setAuthor('Bulahab l بولهب', 'https://yt3.ggpht.com/ytc/AAUvwngnmYUckS_aR_M4UMZkn3rlm3TSbi8qXgKiGU3IRw=s88-c-k-c0x00ffffff-no-rj')
      .setDescription(`> <a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764>
    > **<a:MG_Youtube:821790535852490782> | Youtube : [BuLahaB I بولهب](https://bit.ly/BuLahaB-YT)**
    > **<a:MG_Twitter:825055749105254441> | Twitter : [@bu_laha](https://bit.ly/BuLahaB-Twit)**
    > **<a:MG_Snapchat:825048684264816720> | Snapchat : [@alkanzoo](https://bit.ly/BuLahaB-Snap)**
    > **<a:MG_Instagram:821790546107957290> | Instagram : [@r.ak9](https://bit.ly/BuLahaB-Inst)**
    > **<a:MG_Pubg:825036799888982026> | Pubg ID : \`5192027638\` **
    > **<a:MG_Discord:825030310507839488> | Discord : <@!590671974863470592> **
    > <a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764>
    `)
      .setImage('https://yt3.ggpht.com/CZtLMY8NpU0wSF8w9jLOxENdNcccrcmeEdKQlRfap4OWod8taPTxJdeF-ZLlE5u4khjpDK_k=w1280-fcrop64=1,32b75a57cd48a5a8-k-c0xffffffff-no-nd-rj')

      message.channel.send(bulahab)


		const xmusabx = new MessageEmbed()

	.setColor('#bc1414')
	.setAuthor('xMuSaBx l مصعب', 'https://cdn.probot.io/NOhdjD7O9i.png')
	.setDescription(`> <a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764>
> **<a:MG_Youtube:821790535852490782> | Youtube : [xMuSaBx l مصعب](https://bit.ly/xMuSaBx-YT)**
> **<a:MG_Twitch:825069776216784976> | Twitch : [xmus3bx](https://bit.ly/xMuSaBx-Twi)**
> **<a:MG_Facebook:821790533818908732> | Facebook : [XMusabOC](https://bit.ly/xMuSaBx-Fb)**
> **<a:MG_Instagram:821790546107957290> | Instagram : [@xmus3bx](https://bit.ly/xMuSaBx-Inst)**
> **<a:MG_Discord:825030310507839488> | Discord : <@!332188711473119232> **
> <a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764>
`)
	.setImage('https://cdn.probot.io/c1E7IO0RX9.jpg')

  message.channel.send(xmusabx)*/

     } 
 }