const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const { cyan } = require("../../../colours.json");
const emojis = require("../../../emojis.json");
let e = emojis;


module.exports = class ArtsRulesCommand extends BaseCommand {
	constructor() {
		super('xmusabx', 'mod-message', ['xmusabx'], 'xmusabx', 'xmusabx');
	}

	run(client, message, args, lang) {

  if (!message.member.hasPermission(["MANAGE_MESSAGES"])) return /*message.channel.send(`> **${e.error} - ${message.author} , ليس لديك إذن لاستخدام هذا الأمر!**`);*/


	if (message.author.id !== '579173324425527296' && message.author.id !== '557711715610001428' ) return;

		message.delete();
		const embed = new MessageEmbed()

	.setColor('#0099ff')
	.setAuthor('xMuSaBx l مصعب', 'https://cdn.probot.io/NOhdjD7O9i.png')
	.setDescription(`> <a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764>
> **<a:MG_Youtube:821790535852490782> | Youtube : [xMuSaBx l مصعب](https://bit.ly/xMuSaBx-YT)**
> **<a:MG_Facebook:821790533818908732> | Facebook : [XMusabOC](https://bit.ly/xMuSaBx-Fb)**
> **<a:MG_Instagram:821790546107957290> | Instagram : [@xmus3bx](https://bit.ly/xMuSaBx-Inst)**
> **<a:MG_Discord:825030310507839488> | Discord : <@!332188711473119232> **
> <a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764>
`)
	//.setThumbnail('https://cdn.probot.io/NOhdjD7O9i.png')
	.setImage('https://cdn.probot.io/c1E7IO0RX9.jpg')



  message.channel.send(embed)

 } 
 }