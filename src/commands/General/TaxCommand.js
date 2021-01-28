const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const emojis = require("../../../emojis.json");
let e = emojis;


module.exports = class TaxCommand extends BaseCommand {
	constructor() {
		super('tax', 'General', ['credit' , 'credits' , 'كريديت' , 'الضريبة'], 'tax [ number ]', 'Calculate the probot tax when transferring the credit');
	}

	run(client, message, args, lang) {


      if (message.channel.type === 'dm') { return message.reply(`> **${e.error} - عذرا ، لا يمكنني تشغيل هذا الأمر في الخاص .**`).then(message => {message.delete({timeout: 10000})}) }


      if (message.guild.id != "664614587714240512")  { return message.channel.send(`> **${e.error} - ${message.author} , عذرا ، لا يمكنني تشغيل هذا الأمر في هذا السيرفر .**`).then(message => {message.delete({timeout: 50000})}) };
      if (message.channel.id != "672322966310223900") { return message.channel.send(`> **${e.error} - ${message.author} , عذرا ، لا يمكنني تشغيل هذا الأمر في هذه الروم .**`).then(message => {message.delete({timeout: 50000})}) };


    var args = message.content.split(" ");
    var command = args[0];
    var number = args[1];
    var tax1 = 5;
    var tax2 = 1.05263158;

    if (!number) {

      return message.channel.send(`> **${e.error} - ${message.author} , خطأ ، يجب أن عليك إدخال قيمة !**`).then(message => {message.delete({timeout: 10000})}) }

    var main = Math.floor(number);

    if (main < 0 || main == NaN || !main) {

      return message.channel.send(`> **${e.error} - ${message.author} , خطأ ، يجب أن تكون القيمة صحيحة .**`).then(message => {message.delete({timeout: 10000})}) }

    var taxval1 = Math.floor(main * (tax1 / 100));
    var total1 = Math.floor(main - taxval1);
    var taxval2 = Math.floor((main * tax2 + 1) - main);
    var total2 = Math.floor(main * tax2 + 1);

    let embed = new MessageEmbed()
      .setColor(message.member.displayHexColor)
      .setAuthor(`ضريبة بروبوت | Probot Tax・`)
      .setDescription(`> **${e.general} - في حالة أردت تحويل مبلغ قدره " ${main} " سوف يتم خصم منك نسبة %5** `)
      //.addField(`> **${e.money}・المبلغ الأصلي :**`, `${main}`, true)
      .addField(`> **${e.false}・الضربية :**`, `${taxval1}`, true)
      .addField(`> **${e.error}・المبلغ الذي سيصل :**`, `${total1}`, true)
      .addField(`> **${e.general} - في حالة أردت تحويل مبلغ قدره " ${main} " كريديت كامل :**`, `­`)
      .addField(`> **${e.info}・المبلغ الواجب إضافته :**`, `${taxval2}`, true)
      .addField(`> **${e.money}・المبلغ الواجب تحويله :**`, `${total2}`, true)
      .setThumbnail('http://i8.ae/jtII9')
      .setFooter(`Requested by : ${message.author.tag}`, message.author.avatarURL())

    message.channel.send(embed).then(message => {message.delete({timeout: 60000})})

    }
 }