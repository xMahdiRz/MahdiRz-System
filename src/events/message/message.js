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
    message.channel.send({files: ['https://cdn.probot.io/4wgr68igpP.png']});  }

/*

if(message.content.startsWith('خط')){
   if (!message.member.hasPermission('MANAGE_MESSAGES')) return;
		message.delete();
    message.channel.send({files: ['https://cdn.probot.io/4wgr68igpP.png']});  }
*/
/*  if(message.content.startsWith('خط')){
		message.delete();
   if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`> **${e.error} - ${message.author} , ليس لديك الإذن لتشغيل هذا الأمر .**`)
.then(message => {message.delete({timeout: 10000})}) 
    message.channel.send({files: ['https://cdn.probot.io/4wgr68igpP.png']});  }
*/
/*
  if (message.guild.id != "761933313615069205") return;
  if (message.channel.id != "763108227796697099" && message.channel.id != "763110434055651338") return;
  if (message.channel.id != "719920125549084713" && message.channel.id != "719920634561429515" && message.channel.id != "719920708611735573" && message.channel.id != "719920829751623700" && message.channel.id != "719920804434935920" && message.channel.id != "719921443839934575" && message.channel.id != "782691992383258634" && message.channel.id != "719921480242298982" && message.channel.id != "715624639396708373" && message.channel.id != "715624639396708373" && message.channel.id != "664867798467739661" && message.channel.id != "781988589022085160" && message.channel.id != "781988145192632350" && message.channel.id != "664869646037418020" && message.channel.id != "727686372541857833" && message.channel.id != "781935130922713118" && message.channel.id != "781935130922713118" && message.channel.id != "664869798651625472" && message.channel.id != "781999408376053791" && message.channel.id != "781999445507965028" && message.channel.id != "781999473684512789" && message.channel.id != "748204668131213412" && message.channel.id != "781999782280822885" && message.channel.id != "781999810194178098") return;
  if(message.author.id === client.user.id) return;
      if (message.author.send) {
    message.react('⭐')
    message.react('🌟')
    message.react('😮')
    message.react('👌')
    message.react(message.guild.emojis.cache.get('764953626678394884'));
    message.channel.send({files: ['https://cdn.probot.io/4wgr68igpP.png']});

  }
  */
/*
  if (message.guild.id != "664614587714240512") return;
  if (message.channel.id != "719920708611735573") return;
  //if (message.channel.id != "719920125549084713" && message.channel.id != "719920634561429515" && message.channel.id != "719920708611735573" && message.channel.id != "719920829751623700" && message.channel.id != "719920804434935920" && message.channel.id != "719921443839934575" && message.channel.id != "782691992383258634" && message.channel.id != "719921480242298982" && message.channel.id != "715624639396708373" && message.channel.id != "715624639396708373" && message.channel.id != "664867798467739661" && message.channel.id != "781988589022085160" && message.channel.id != "781988145192632350" && message.channel.id != "664869646037418020" && message.channel.id != "727686372541857833" && message.channel.id != "781935130922713118" && message.channel.id != "781935130922713118" && message.channel.id != "664869798651625472" && message.channel.id != "781999408376053791" && message.channel.id != "781999445507965028" && message.channel.id != "781999473684512789" && message.channel.id != "748204668131213412" && message.channel.id != "781999782280822885" && message.channel.id != "781999810194178098") return;
  if(message.author.id === client.user.id) return;
      if (message.author.send) {
  //  message.react('⭐')
  //  message.react('🌟')
   // message.react('😮')
 //   message.react('👌')
 //   message.react(message.guild.emojis.cache.get('764953626678394884'));
    message.channel.send({files: ['https://cdn.probot.io/4wgr68igpP.png']});

  }  */
/*
  if (message.guild.id != "664614587714240512") return;
  //if (message.channel.id != "789816765819256862") return;
  if (message.channel.id != "789816765819256862" && message.channel.id != "789816838992953364" && message.channel.id != "789816804695474176") return;
  //if (message.channel.id != "719920125549084713" && message.channel.id != "719920634561429515" && message.channel.id != "719920708611735573" && message.channel.id != "719920829751623700" && message.channel.id != "719920804434935920" && message.channel.id != "719921443839934575" && message.channel.id != "782691992383258634" && message.channel.id != "719921480242298982" && message.channel.id != "715624639396708373" && message.channel.id != "715624639396708373" && message.channel.id != "664867798467739661" && message.channel.id != "781988589022085160" && message.channel.id != "781988145192632350" && message.channel.id != "664869646037418020" && message.channel.id != "727686372541857833" && message.channel.id != "781935130922713118" && message.channel.id != "781935130922713118" && message.channel.id != "664869798651625472" && message.channel.id != "781999408376053791" && message.channel.id != "781999445507965028" && message.channel.id != "781999473684512789" && message.channel.id != "748204668131213412" && message.channel.id != "781999782280822885" && message.channel.id != "781999810194178098") return;
  if(message.author.id === client.user.id) return;
      if (message.author.send) {
  //  message.react('⭐')
  //  message.react('🌟')
   // message.react('😮')
 //   message.react('675631733013741578')
    message.react(message.guild.emojis.cache.get('675631733013741578'));
    message.channel.send({files: ['https://cdn.probot.io/4wgr68igpP.png']});

  }
*/


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
