const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const emojis = require("../../../emojis.json");
let e = emojis; 

module.exports = class VoteCommand extends BaseCommand {
	constructor() {
		super('vote', 'General', ['probot'], 'vote');
	}

	run(client, message, args, lang) {

		const embed = new MessageEmbed()

      .setDescription(`> ** ${e.money} - صوت للبوت الآن عبر الرابط الموجود أدناه وأحصل على كريديت قد يصل إلى \`2700\` .** \n > ** ${e.error} -  ملاحظة : يمكنك التصويت كل 12 ساعة !**\n > **${e.channel}- http://i8.ae/z6kmK | ${message.author}**`)
			.setColor('#5c0e48')
			.setImage('https://cdn.probot.io/ELtAsaU0AP.gif')

  		message.channel.send(embed).then(message => {message.delete({timeout: 10000})})

	}
}