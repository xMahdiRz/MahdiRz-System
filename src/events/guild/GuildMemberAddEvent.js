const BaseEvent = require('../../utils/structures/BaseEvent');
module.exports = class GuildMemberAddEvent extends BaseEvent {
  constructor() {
    super('guildMemberAdd');
  }
  
  async run(client, member) {

    
    const channel = member.guild.channels.cache.find(ch => ch.name === 'chat');

    if(!channel) return;


    channel.send(`> **👋 - Welcome to the server ${member}**`);

    member.roles.add(member.guild.roles.cache.find(role => role.name === "Members")).catch(console.error);


  }
}