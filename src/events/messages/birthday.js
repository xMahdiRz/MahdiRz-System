const BaseEvent = require('../../utils/structures/BaseEvent');
const emojis = require("../../../emojis.json");
let e = emojis;

module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super('message');
  }
  
  async run(client, message) {

  if (message.author.bot) return; 

  if (message.channel.id != "741690778555908216") return; // روم أعياد الميلاد  
  if (message.author.id === client.user.id) return;

      if (message.author.send) {
    message.react('803651156454408242')

    }
  } 
}
