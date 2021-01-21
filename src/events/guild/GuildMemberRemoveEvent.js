const BaseEvent = require('../../utils/structures/BaseEvent');
module.exports = class GuildMemberRemoveEvent extends BaseEvent {
  constructor() {
    super('guildMemberRemove');
  }
  
  async run(client, member) {

    
    const channel = member.guild.channels.cache.find(ch => ch.name === 'chat');

    if(!channel) return;


    channel.send(`> **👋 - Good Bye ${member}**`);
  }
}