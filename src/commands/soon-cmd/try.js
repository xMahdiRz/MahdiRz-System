const Discord = require("discord.js");
const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const { cyan } = require("../../../colours.json");
const emojis = require("../../../emojis.json");
let e = emojis;




module.exports = class WarnCommand extends BaseCommand {
	constructor() {
		super('warn', 'mod', ['be-careful'], 'warn [user]');
	}

	run(client, message, args, lang) {
  let filter = m => m.author.id === message.author.id
let emoji_link
let emojilink = new MessageEmbed()
.setColor(`${config.color}`)
.addField(language.Modreation.Emoji_Link ,language.Modreation.link_em)
 message.channel.send(emojilink).then(msg => {
message.channel.awaitMessages(filter, {
    max: 1,time: 9999999,errors: ['time']}).then(EMOJIL => {EMOJIL.first();
    emoji_link = EMOJIL.first().content;
let emoji_name
let emojilink = new MessageEmbed()
.setColor(`${config.color}`)
.addField(language.Modreation.name_emoji ,language.Modreation.name_em)
message.channel.send(emojilink).then(msg =>{
message.channel.awaitMessages(filter, {
    max: 1,time: 9999999,errors: ['time']}).then(EMOJIN => {EMOJIN.first();
    emoji_name = EMOJIN.first().content;
message.guild.emojis.create(emoji_link, emoji_name).then(emoji =>{
let emojis_s = new Discord.MessageEmbed()
.setTitle(language.Modreation.emoji_done)
.setColor(`${config.color}`)
.addField(language.Modreation.emoji_name,`${emoji.name}`)
.addField(language.Modreation.emoji_id,`${emoji.id}`)
message.channel.send(emojis_s)
   })}
    )}
    )}
    )}
    )
  }
}