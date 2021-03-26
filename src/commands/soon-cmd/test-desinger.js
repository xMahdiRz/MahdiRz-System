const BaseCommand = require('../../utils/structures/BaseCommand');
const emojis = require("../../../emojis.json");
let e = emojis;
const { MessageEmbed } = require('discord.js');

module.exports = class SayCommand extends BaseCommand {
  constructor() {
    super('nd', 'mod', [], 'nd [link]');
  }

  run(client, message, args) {

   if (message.channel.type === 'dm') { return message.reply(`> **${e.error} - عذرا لا يمكنك إستخدام هذا الأمر في الخاص !**`); }

    message.delete();

           if ( !message.member.roles.cache.some(r=>["┃🎨︰Designers"].includes(r.name)) ) { return message.channel.send(`> **${e.error} - ${message.author} , ليس لديك الصلاحية لإستخدام هذا الأمر .**`).then(message => {message.delete({timeout: 10000})}) }
   if (!args[0]) {

      message.channel.send(`> **${e.error} - ${message.author} , يجب عليك كتابة رابط الصورة لإكمال العملية .**`).then(message => {message.delete({timeout: 10000})})
		} else {

  let argsResult;
    let channelName = message.mentions.channels.first(); 

    message.delete();    

      argsResult = args.join(" "); 

    	const embed = new MessageEmbed()
	.setDescription(`**Designed by : ${message.author}**
** Rating : <a:217:675632039050870785> | <a:218:675632038547685386>**`)


			.setColor('#e1b1f8')
      .setImage(argsResult)

      message.channel.send(embed)  .then(async (message) => {
    await message.react('675632039050870785')
    await message.react('675632038547685386')
  });
		message.channel.send(`> **${e.check} - ${message.author} , تم إرسال التصميم بنجاح ، إذهب لتأكد !**`).then(message => {
					message.delete({
						timeout: 5000
					})
				})
  } }
}