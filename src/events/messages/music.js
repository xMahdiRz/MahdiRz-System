const BaseEvent = require('../../utils/structures/BaseEvent');
const emojis = require("../../../emojis.json");
let e = emojis;

module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super('message');
  }
  
  async run(client, message) {

  if (message.author.bot) return; 

    if (message.channel.id != "805166570632249355") return; // روم الميوزك  
    if (message.author.id === client.user.id) return;

    if (message.author.send) {
      message.react('805175565379174511')
      message.channel.send({files: ['https://probot.media/4QiCoFnaSn.png']})
    }
  } 
}
