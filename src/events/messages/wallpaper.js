const BaseEvent = require('../../utils/structures/BaseEvent');
const emojis = require("../../../emojis.json");
let e = emojis;

module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super('message');
  }
  
  async run(client, message) {

  if (message.author.bot) return; 

    if (message.channel.id != "805167292337094716") return; // روم الخلفيات  
    if (message.author.id === client.user.id) return;

    if (message.author.send) {
      message.react('805177401414778900')
      message.channel.send({files: ['https://probot.media/4QiCoFnaSn.png']})

    }
  } 
}
