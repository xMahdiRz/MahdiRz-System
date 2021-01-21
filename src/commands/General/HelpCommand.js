const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const { stripIndents } = require("common-tags");
const { cyan } = require("../../../colours.json");
const emojis = require("../../../emojis.json");
let e = emojis;

module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'General', ['aid', 'docs', 'commands'], 'help || help [command]', 'Knowing bot commands');
  }
  run(client, message, args, lang) {

      if (message.channel.type === 'dm') { return message.reply(`> **${e.error} - Sorry, I can't run commands in DMs chat !**`); }


    const help = new MessageEmbed()
      .setAuthor(`${message.guild.me.displayName} | Version 1.0.3`)
      .setColor(cyan)
      .setTitle(`${e.folder} - Help Documents Overview :`)
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter(`© ${message.guild.me.displayName}`, client.user.displayAvatarURL());


    if(!args[0]){
      help.setDescription(`● Here you can find all \`${message.guild.me.displayName}\` Commands :\n ● Prefix : **${client.prefix}**`)
      help.addField(`**${e.general}・General - (9) :**`, '`avatar`, `corona`, `creators`, `help`, `ping`, `suggest`, `tax`, `uptime`, `vote`')
      help.addField(`**${e.mod}・Moderators - (9) :**`, '`ban`, `clear`, `font`, `kick`, `membercount`, `mute`, `role`,  `say`, `unmute`') 
      help.addField(`**${e.developer}・Developers - (1) :**`, '`restart`')
      help.addFields(
	    	{ name: `**${e.links}・Links - (4) :**`, value: "[Server](https://discord.gg/s-t) ● [Donate](https://paypal.me/Hadikob) ● [Developer](http://discord.com/users/557711715610001428) ● [Helper](http://discord.com/users/579173324425527296)" }, )
     return message.channel.send(help);
    } else{

      let command = client.commands.get(args[0].toLowerCase());
    

      if(!command){
        return message.channel.send(help.setTitle(`${e.error} - Invalid command !`).setDescription(`Use \`${client.prefix}help\` to see the list of commands .`));
      }


      help.setDescription(stripIndents`● Prefix: **${client.prefix}** 

        **${e.error}・Command :** \`${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)}\`
        **${e.info}・Description :** \`${command.description.slice(0, 1).toUpperCase() + command.description.slice(1)}\`
        **${e.developer}・Aliases :**  \`${command.aliases ? command.aliases.join(", ") : "None" }\`
        **${e.general}・Category :**  \`${command.category.slice(0, 1).toUpperCase() + command.category.slice(1)}\`
        **${e.download}・Usage :** ${command.usage ? `\`${command.usage}\`` : "No usage"}`)

    /*
        **${e.general}・Command :** \`${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)}\`
        **${e.developer}・Aliases :**  \`${command.aliases ? command.aliases.join(", ") : "None" }\`
        **${e.mod}・Description :**  \`${command.category.slice(0, 1).toUpperCase() + command.category.slice(1)}\`
        **${e.general}・Command :** \`${command.description.slice(0, 1).toUpperCase() + command.description.slice(1)}\`
        **${e.info}・Usage :** ${command.usage ? `\`${command.usage}\`` : "No usage"}`)
      .setThumbnail('https://cdn.discordapp.com/attachments/578170428216967179/585889209165021189/cmd.png')
          .addField(`${client.prefix}${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)} :`, `${command.description.slice(0, 1).toUpperCase() + command.description.slice(1)}`)
          .addField(`Aliases`, `${command.aliases ? command.aliases.join(", ") : "None"}`)
          .addField('__Usage:__', `${command.usage ? `\`${command.usage}\`` : "No usage"}`)
*/

      return message.channel.send(help);
    }
  }
}