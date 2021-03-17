const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const { cyan } = require("../../../colours.json");
const emojis = require("../../../emojis.json");
let e = emojis;
const fs = require("fs")
const db = require("quick.db");
const path = require('path');

//const azkar = JSON.parse(fs.readFileSync("../../../azkar.json"))
//let { azkar } = require('./azkar.json')
let azkar = JSON.parse(fs.readFileSync("./azkar.json", "utf8"));

module.exports = class ReactionRoleCommand extends BaseCommand {
	constructor() {
		super('reactionrole', 'owner', ['r0r'], 'reactionrole');
	}

	run(client, message, args, lang) {


		const errorembed = new MessageEmbed()
		.setDescription(`> **${e.error} - Sorry ${message.author} , this command is only for the owner of the bot.**`)
		.setColor('#ff0000');
		if (message.author.id !== '557711715610001428') return message.channel.send(errorembed);

 //   const ServerNotifications = message.guild.roles.cache.get("762331094052896790")
 //   const BotNotifications = message.guild.roles.cache.get("762330725499273276")
      let argsResult = args.join(" "); 

		const embed = new MessageEmbed()

	.setColor('#0099ff')
	.setAuthor('xMuSaBx l مصعب', 'https://cdn.probot.io/NOhdjD7O9i.png', 'https://cdn.probot.io/NOhdjD7O9i.png')
	.setDescription(`> <a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764>
> **<a:MG_Youtube:821790535852490782> | Youtube : [xMuSaBx l مصعب](https://bit.ly/xMuSaBx-YT)**
> **<a:MG_Facebook:821790533818908732> | Facebook : [xMuSaBx](https://bit.ly/xMuSaBx-Fb)**
> **<a:MG_Instagram:821790546107957290> | Instagram : [@xmus3bx](https://bit.ly/xMuSaBx-Inst)**
> **<a:MG_Discord:764954741209432124> | Discord : <@!332188711473119232> **
> <a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764>
`)
	.setThumbnail('https://cdn.probot.io/NOhdjD7O9i.png')
	.setImage('https://cdn.probot.io/c1E7IO0RX9.jpg')



  message.channel.send(embed).then(async (message) => {

  })

/*let channelfind = message.content.split(" ").slice(1).join(" ")
if(!channelfind) return message.channel.send("**setup [Channel]**")
let room = message.guild.channels.cache.find(channel => channel.name === `${channelfind}`)
if(!room) return message.channel.send("**I can't find this channel !**")
let embed = new MessageEmbed()
.setDescription("**Done Setuped !**")
message.channel.send(embed)
fs.writeFileSync(path.resolve(__dirname, 'azkar.json'), JSON.stringify(azkar)), err => {
azkar[message.guild.id] = {channel: channelfind}
		fs.writeFile("./azkar.json", JSON.stringify(azkar), err => {
			azkar[message.guild.id] = {
				channel: channelfind
			}
		})*/
}

}
 