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
	.setDescription(`**Designed by : ${message.author} | <@&824846372410097685> !**
** Rating : <:online:750116984586240032> | <:idle:750116983605035080> | <:dnd:750116983520886827> | <:offline:750116984620056637>**`)


			.setColor('RANDOM')
      .setImage(argsResult)
		//	.setFooter(`Designed by : ${message.author.username}`, message.author.avatarURL())

      message.channel.send(embed); 
    }
  }
}