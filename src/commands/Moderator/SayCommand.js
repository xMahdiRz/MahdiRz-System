const BaseCommand = require('../../utils/structures/BaseCommand');
const emojis = require("../../../emojis.json");
let e = emojis;

module.exports = class SayCommand extends BaseCommand {
  constructor() {
    super('say', 'mod', ['bc', 'alert', 'broadcast', 'announce', 'announcement'], 'say [channel] [message]');
  }

  run(client, message, args) {

    if (message.channel.type === 'dm') { return message.reply(`> **${e.error} - Sorry, I can't run commands in DMs chat !**`); }

    if(!message.member.hasPermission(["MANAGE_ROLES"])) return message.channel.send(`> **${e.error} - ${message.author} , You do not have permission to use this command!**`);
        
    let argsResult;
    let channelName = message.mentions.channels.first(); 

    message.delete(); 


    if(channelName){
      argsResult = args.slice(1).join(" "); 
      channelName.send(argsResult); 
    } else{

      argsResult = args.join(" "); 
      message.channel.send(argsResult); 
    }
  }
}