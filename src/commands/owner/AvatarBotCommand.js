const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const { cyan } = require("../../../colours.json");
const emojis = require("../../../emojis.json");
let e = emojis;


module.exports = class AvatarBotCommand extends BaseCommand {
	constructor() {
		super('abot', 'Owner', ['abot'], 'abot [ image url ]');
	}

	run(client, message, args, lang) {

    const EmbedError = new MessageEmbed()
      .setDescription(`> **${e.error} - Sorry ${message.author} , this command is only for the owner of the bot.**`)
      .setColor('#5780cd');
    if (message.author.id !== '557711715610001428') return message.channel.send(EmbedError);

    var argresult = args.join(' ');

    client.user.setAvatar(argresult);

    let embed = new MessageEmbed()

    .setColor('#ff0000')
      .setDescription(`> **${e.error}・The bot image has changed successfully**`)
      .setImage(client.user.displayAvatarURL({
        size: 4096,
        dynamic: true
      }))
      .setTimestamp()
      .setFooter(`By : ${message.author.tag}`, message.author.avatarURL())

    message.channel.send(embed).catch(error => {
      console.error(`${error}`)

    })
  }
}