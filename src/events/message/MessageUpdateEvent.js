/*const BaseEvent = require('../../utils/structures/BaseEvent');
const { MessageEmbed } = require('discord.js');
const { green_light } = require("../../../colours.json");
const emojis = require("../../../emojis.json");
let e = emojis;

module.exports = class MessageUodateEvent extends BaseEvent {
  constructor() {
    super('messageUpdate');
  }
  
  async run(client, oldMessage, newMessage) {

    const channel = client.channels.cache.find(channel => channel.name === "message-logs");


    if(oldMessage.author.bot) return;


    if(oldMessage === newMessage) return;


    if(channel){

      const embed = new MessageEmbed()
        .setColor('#000001')
        .setTitle(`> ${e.error}・Message Edited by : ${oldMessage.author.tag}`)
        .addField(`> ${e.channel}・Channel :`, `<#${oldMessage.channel.id}>`, true)
        .addField(`> ${e.links}・Link :`, `[Jump to message](https://discordapp.com/channels/${oldMessage.guild.id}/${oldMessage.channel.id}/${oldMessage.id})`)
        .setDescription(`> **${e.info}・Old Message : ** \n\`\`\`${oldMessage.content}\`\`\`\n > **${e.general}・New Message :** \n\`\`\`${newMessage.content}\`\`\``)
        .setTimestamp()
        .setFooter(`© ${oldMessage.guild.me.displayName}`, client.user.displayAvatarURL());

      channel.send(embed)
    } 
  }
}*/