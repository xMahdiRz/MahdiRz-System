const BaseEvent = require('../../utils/structures/BaseEvent');
const emojis = require("../../../emojis.json");
let e = emojis;

module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super('message');
  }
  
  async run(client, message) {

  if (message.author.bot) return; 

  if (message.channel.id != "719920829751623700") return; // روم التصويت  
  if (message.author.id === client.user.id) return;

      if (message.author.send) {
    message.react('675632039050870785')
    message.react('675632038547685386')
   message.channel.send({files: ['https://cdn.probot.io/4wgr68igpP.png']})

    }
  } 
}
