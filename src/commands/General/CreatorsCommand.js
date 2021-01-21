const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const { blue_dark } = require("../../../colours.json");
const emojis = require("../../../emojis.json");
let e = emojis;

module.exports = class CreatorCommand extends BaseCommand {
  constructor() {
    super('creators', 'General', ['developers', 'owners', 'creator'], 'creators', 'Knowing who bot developers');
  }

  run(client, message, args) {

      if (message.channel.type === 'dm') { return message.reply(`> **${e.error} - Sorry, I can't run commands in DMs chat !**`); }


    const embed = new MessageEmbed()
      .setColor('#000001')
      .setAuthor(`${client.user.tag} `, client.user.displayAvatarURL())
      .setThumbnail(message.guild.iconURL())
      .setTitle(`${e.general} - Creators : `)
      .setThumbnail(client.user.displayAvatarURL())
      .addField(`${e.mod}・Bot owner :`, '<@557711715610001428> , <@442793591501357056>')
      .addField(`${e.info}・Assistants :`, '<@579173324425527296>')
      .setFooter(`© ${message.guild.me.displayName}`, client.user.displayAvatarURL());

    message.channel.send(embed);
  }
}