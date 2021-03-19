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

if(message.content.startsWith('خط')){
		if (message.author.id !== '579173324425527296' && message.author.id !== '557711715610001428' ) return;
		message.delete();
    message.channel.send({files: ['https://cdn.probot.io/4wgr68igpP.png']}); 



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
