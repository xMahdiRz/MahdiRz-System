const BaseEvent = require('../../utils/structures/BaseEvent');
const emojis = require("../../../emojis.json");
let e = emojis;

module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super('message');
  }
  
  async run(client, message) {

  if (message.author.bot) return; 

  if (message.channel.id != "" && message.channel.id != "") return;
  if (message.author.id === client.user.id) return;

      if (message.author.send) {
    message.react('⭐')
    message.react('🌟')
    message.react('😮')
    message.react('👌')
    message.react('675467161904611332')
    message.channel.send({files: ['https://cdn.probot.io/4wgr68igpP.png']})

    }
  } 
}