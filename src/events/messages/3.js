const BaseEvent = require('../../utils/structures/BaseEvent');
const emojis = require("../../../emojis.json");
let e = emojis;

module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super('message');
  }
  
  async run(client, message) {

  if (message.author.bot) return; 

  if (message.channel.id != "789816765819256862" && message.channel.id != "789816838992953364" && message.channel.id != "789816804695474176") return; // رومات الأفتار
  if (message.author.id === client.user.id) return;

      if (message.author.send) {
    message.react('675631733013741578')
    message.channel.send({files: ['https://cdn.probot.io/4wgr68igpP.png']})

    }
  } 
}