const BaseEvent = require('../../utils/structures/BaseEvent');
const { MessageEmbed } = require('discord.js');
const emojis = require("../../../emojis.json");
let e = emojis;

module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super('message');
  }
  
  async run(client, message) {
    if (message.author.bot) return; 


   if(message.content.match('<@!784852021333065738>')){
     message.channel.send(`> **${e.info} - Hi ! ${message.author} My Prefix is : \`${client.prefix}\`.**`);
  }
if(message.content.startsWith('خط')){
		if (message.author.id !== '579173324425527296' && message.author.id !== '557711715610001428' ) return;
		message.delete();
    message.channel.send({files: ['https://probot.media/4QiCoFnaSn.png']});  }

if(message.content.startsWith('خ2')){
		if (message.author.id !== '579173324425527296' && message.author.id !== '557711715610001428' ) return;
		message.delete();
    message.channel.send({files: ['https://probot.media/k1MFLUvf1r.png']});  }


if(message.content.startsWith('خ1')){
		if (message.author.id !== '579173324425527296' && message.author.id !== '557711715610001428' ) return;
		message.delete();
    message.channel.send({files: ['https://probot.media/ceXIXh4sTk.png']});  }


if(message.content.startsWith('ar')){
		if (message.author.id !== '579173324425527296' && message.author.id !== '557711715610001428' ) return;

		message.delete();
		const embed = new MessageEmbed()

	.setColor('#0099ff')
	.setAuthor('xMuSaBx l مصعب', 'https://cdn.probot.io/NOhdjD7O9i.png')
	.setDescription(`> <a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764>
> **<a:MG_Youtube:821790535852490782> | Youtube : [xMuSaBx l مصعب](https://bit.ly/xMuSaBx-YT)**
> **<a:MG_Facebook:821790533818908732> | Facebook : [XMusabOC](https://bit.ly/xMuSaBx-Fb)**
> **<a:MG_Instagram:821790546107957290> | Instagram : [@xmus3bx](https://bit.ly/xMuSaBx-Inst)**
> **<a:MG_Discord:764954741209432124> | Discord : <@!332188711473119232> **
> <a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764><a:370:748978646005448764>
`)
	//.setThumbnail('https://cdn.probot.io/NOhdjD7O9i.png')
	.setImage('https://cdn.probot.io/c1E7IO0RX9.jpg')



  message.channel.send(embed)


 }

    if (message.content.startsWith(client.prefix)) {

      let args = message.content.slice(client.prefix.length).trim().split(/ +/g);
      let cmd = args.shift().toLowerCase();
      
      const command = client.commands.get(cmd);
      if (command) {
        command.run(client, message, args);


    const CmdLog = client.channels.cache.get("797846254394540052");
		let embed = new MessageEmbed()

      .setDescription(`> **${e.channel} - User : **${message.author.tag} \n > **${e.general} - ID : **\`${message.author.id}\`  \n > **${e.info} - Use \`${cmd}\` Command .**`) 
			.setColor('RANDOM');

	  	CmdLog.send(embed);

      }
    }
 } }
