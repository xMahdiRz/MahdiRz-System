const BaseEvent = require('../../utils/structures/BaseEvent');
const emojis = require("../../../emojis.json");
let e = emojis;

module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super('message');
  }
  
  async run(client, message) {
message
  if (message.author.bot) return; 
  if (message.channel.id != "719920125549084713") return; // روم الشروحات
  if (message.author.id === client.user.id) return;

      if (message.author.send) {
    message.react(message.guild.emojis.cache.get('675631842757443594'));
    message.channel.send({files: ['https://cdn.probot.io/4wgr68igpP.png']});

    }
  } 
}