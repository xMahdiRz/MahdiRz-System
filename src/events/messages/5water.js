const BaseEvent = require('../../utils/structures/BaseEvent');
const emojis = require("../../../emojis.json");
let e = emojis;

module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super('message');
  }
  
  async run(client, message) {

  if (message.author.bot) return; 

  if (message.channel.id != "715624639396708373" && message.channel.id != "664867798467739661") return; // روم الخواطر ، الأذكار  
  if (message.author.id === client.user.id) return;

      if (message.author.send) {
      message.react('803651156517584917')
      message.channel.send({files: ['https://cdn.probot.io/4wgr68igpP.png']})
    }
  } 
}
