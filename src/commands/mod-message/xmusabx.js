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

		message.delete();
		const xmusabx = new MessageEmbed()

	.setColor('#0099ff')
	.setAuthor('xMuSaBx l مصعب', 'https://cdn.probot.io/NOhdjD7O9i.png')
	.setDescription(`> <a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764>
> **<a:MG_Youtube:821790535852490782> | Youtube : [xMuSaBx l مصعب](https://bit.ly/xMuSaBx-YT)**
> **<a:MG_Twitch:825069776216784976> | Twitch : [xmus3bx](https://bit.ly/xMuSaBx-Twi)**
> **<a:MG_Facebook:821790533818908732> | Facebook : [XMusabOC](https://bit.ly/xMuSaBx-Fb)**
> **<a:MG_Instagram:821790546107957290> | Instagram : [@xmus3bx](https://bit.ly/xMuSaBx-Inst)**
> **<a:MG_Discord:825030310507839488> | Discord : <@!332188711473119232> **
> <a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764>
`)
	//.setThumbnail('https://cdn.probot.io/NOhdjD7O9i.png')
	.setImage('https://cdn.probot.io/c1E7IO0RX9.jpg')

  message.channel.send(xmusabx)


		const xsame7x = new MessageEmbed()

	.setColor('#0099ff')
	.setAuthor('xSaMe7x l سامح', 'https://cdn.probot.io/1YtFk59Bdk.png')
	.setDescription(`> <a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764>
> **<a:MG_Youtube:821790535852490782> | Youtube : [xSaMe7x l سامح](https://bit.ly/xMuSaBx-YT)**
> **<a:MG_Twitch:825069776216784976> | Twitch : [xmus3bx](https://bit.ly/xMuSaBx-Twi)**
> **<a:MG_Facebook:821790533818908732> | Facebook : [XSaMe7x I سامح](https://bit.ly/xMuSaBx-Fb)**
> **<a:MG_Instagram:821790546107957290> | Instagram : [@xSaMe7x](https://bit.ly/xMuSaBx-Inst)**
> **<a:MG_Discord:825030310507839488> | Discord : <@!291953829572902912> **
> **<a:MG_Pubg:825036799888982026> | Discord : <@!291953829572902912> **
> <a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764>
`)
	//.setThumbnail('https://cdn.probot.io/NOhdjD7O9i.png')
	.setImage('https://yt3.ggpht.com/UKaq-Y8knORoMzl7jVvG58JoxTfnTVxKJlgLOBtduCFwsZupywYSZbWoxPzDDx8QwpCCzyuzhA=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj')

  message.channel.send(xsame7x)

 } 
 }