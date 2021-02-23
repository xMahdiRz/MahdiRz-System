const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const { stripIndents } = require("common-tags");
const { cyan } = require("../../../colours.json");
const emojis = require("../../../emojis.json");
let e = emojis;
const Discord = require("discord.js");
const Client = new Discord.Client();



module.exports = class BirthdayCommand extends BaseCommand {
	constructor() {
		super('birthday', 'General', ['bd'], 'birthday [Date]', 'Add the date of your birthday');
	}

	run(client, message, args) {


      if (message.channel.type === 'dm') { return message.reply(`> **${e.error} - عذرا ، لا يمكنني تشغيل هذا الأمر في الخاص .**`).then(message => {message.delete({timeout: 10000})}) }

    message.delete();

  if (message.guild.id != "664614587714240512") return;
  if (message.channel.id != "672322966310223900") return message.channel.send(`> **${e.error} - ${message.author} , عذرا ، لا يمكنني تشغيل هذا الأمر في هذه الروم .**`).then(message => {message.delete({timeout: 5000})})



  if (!args[0]) {

      message.channel.send(`> **${e.error} - ${message.author} , يجب عليك كتابة تاريخ عيد ميلادك لإكمال العملية .**`).then(message => {message.delete({timeout: 10000})})
		} else {



		let args = message.content.split(" ").slice(1);

		if (!message.guild) return;

		const embed = new MessageEmbed()
			.setColor(message.member.displayHexColor)
			.setAuthor(`Suggestion :`, message.author.displayAvatarURL())
      .addField(`${e.general}・Author :`, ` ${message.author}`)
			.addField(`${e.info}・Content :`, '**' + args.join(" ") + '**' )
			.setFooter(`『 Soul Takers ☠ 』`, 'https://cdn.probot.io/INqoBWuLZa.png')
			.setTimestamp()

    const Schannel = client.channels.cache.find(channel => channel.id === "719920804434935920"); //look for the channel called mod-logs
		if (!Schannel) return message.channel.send(`> **${e.error} - ${message.author} , لا أستطيع العثور على الروم الخاصة بـ الإقتراحات !**`);
		Schannel.send(embed)

    .then(async (message) => {
    await message.react(message.guild.emojis.cache.get('675632039050870785'));
    await message.react(message.guild.emojis.cache.get('675632038547685386'));
  });

    Schannel.send({files: ['https://cdn.probot.io/4wgr68igpP.png']});

		message.channel.send(`> **${e.check} - ${message.author} , تم إرسال الإقتراح بنجاح ، إذهب لتأكد !**`).then(message => {
					message.delete({
						timeout: 5000
					})
				})

	}
}
}