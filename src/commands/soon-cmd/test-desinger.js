const BaseCommand = require('../../utils/structures/BaseCommand');
const emojis = require("../../../emojis.json");
let e = emojis;
const { MessageEmbed } = require('discord.js');

module.exports = class SayCommand extends BaseCommand {
  constructor() {
    super('nd', 'mod', [], 'nd [link]');
  }

  run(client, message, args) {

   if (message.channel.type === 'dm') { return message.reply(`> **${e.error} - Sorry, I can't run commands in DMs chat !**`); }

    if(!message.member.hasPermission(["ADMINISTRATOR"])) return message.channel.send(`> **${e.error} - ${message.author} , You do not have permission to use this command!`);
        
    let argsResult;
    let channelName = message.mentions.channels.first(); 

    message.delete(); 


    if(channelName){
      argsResult = args.slice(1).join(" "); 

    	const embed = new MessageEmbed()
			.setDescription(argsResult)
			.setColor('RANDOM');
  
      channelName.send(embed); 

    } else {

      argsResult = args.join(" "); 

    	const embed = new MessageEmbed()
			.setDescription(argsResult)
			.setColor('RANDOM')
.setImage(argsResult)
      message.channel.send(embed); 
    }
  }
}