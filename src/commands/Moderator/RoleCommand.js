const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const { cyan } = require("../../../colours.json");
const emojis = require("../../../emojis.json");
let e = emojis;



module.exports = class RoleCommand extends BaseCommand {
	constructor() {
		super('role-information', 'mod', ['role'], 'reactionrole');
	}

	run(client, message, args, lang) {

    if (message.channel.type === 'dm') { return message.reply(`> **${e.error} - عذرا ، لا يمكنني تشغيل هذا الأمر في الخاص .**`).then(message => {message.delete({timeout: 10000})}) }

    if(!message.member.hasPermission('KICK_MEMBERS')) {
      message.channel.send(`> **${e.error} - ${message.author} , عذرا ، أنت لا تمتلك الصلاحية لتشغيل هذا الأمر .**`).then(message => {message.delete({timeout: 10000})})

    } else if(!args[0]){
      message.channel.send(`> **${e.error} - ${message.author} , يجب عليك كتابة إسم الرتبة أولا !**`).then(message => {message.delete({timeout: 10000})})
    } else {

	let args = message.content.split(" ").slice(1).join(" ");
	let role = message.guild.roles.cache.find(role => role.name === args) || message.guild.roles.cache.get(args);

	if (!role) return message.channel.send(`> **${e.error} - ${message.author} , عذرا ، لم استطع العثور على الرتبة .**`).then(message => {message.delete({timeout: 10000})})

	let embed = new MessageEmbed()

    .setTitle(`${e.error}・Role Info :`)
    .setColor(role.hexColor)
		.addField(`> ${e.general}・Name :`, `\`${role.name}\`` , true)
		.addField(`> ${e.channel}・ID :`, `\`${role.id}\`` , true)
		.addField(`> ${e.developer}・Color :`, `\`${role.hexColor}\`` , true)
		.addField(`> ${e.info}・Date Created :`, `\`${role.createdAt.toLocaleString()}\`` , true)
		.addField(`> ${e.online}・Role Preview :`, `<@&${role.id}>` , true)
	//  .addField(`> ${e.error}・عدد الأعضاء الذين يملكون الرتبة :`, `\`${role.members.size}\`` , true)
	//	.addField(`> ${e.error}・ترتيبها :`, `\`${role.position - message.guild.roles.size}\`` , true)
	//	.addField(`> ${e.error}・صلاحياتها :`, `\`${role.permissions}\`` , true)
				.setFooter(`Requested by : ${message.author.tag}`, message.author.avatarURL())
	message.channel.send(embed)

    }
  }
}