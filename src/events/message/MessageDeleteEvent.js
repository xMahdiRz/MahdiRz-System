const BaseEvent = require('../../utils/structures/BaseEvent');
const { MessageEmbed } = require('discord.js');
const { blue_dark } = require("../../../colours.json");
const emojis = require("../../../emojis.json");
let e = emojis;

module.exports = class MessageDeleteEvent extends BaseEvent {
  constructor() {
    super('messageDelete');
  }
  
  async run(client, message) {

    if(!message.partial) {
      const channel = client.channels.cache.find(channel => channel.name === "message-logs"); 


      if(message.author.bot) return;
      

      if(channel){

        const entry = await message.guild.fetchAuditLogs({type: 'MESSAGE_DELETE'}).then(audit => audit.entries.first());
        let user = "";

        if(entry.extra.channel.id === message.channel.id && (entry.target.id === message.author.id) && (entry.createdTimestamp > (Date.now() - 5000)) && (entry.extra.count >= 1)){
          user = entry.executor.username + '#' + entry.executor.discriminator;
        } else{ 
          user = message.author.username + '#' + message.author.discriminator;
        }


        const embed = new MessageEmbed()
          .setColor('#ffffff')
          .setTitle(`> ${e.error}・Message Deleted by : ${user}`)
          .addField(`> ${e.general}・Author :`, `${message.author}`, true)
          .addField(`> ${e.channel}・Channel :`, `<#${message.channel.id}>`, true)
          .setDescription(`> ${e.info}・**Message Contant :**\n\`\`\`${message.content}\`\`\``)
          .setTimestamp()
          .setFooter(`© ${message.guild.me.displayName}`, client.user.displayAvatarURL());

        channel.send(embed);
      }
    }
  }
}