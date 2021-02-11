const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const { stripIndents } = require("common-tags");
const { cyan } = require("../../../colours.json");
const emojis = require("../../../emojis.json");
let e = emojis;


module.exports = class HelpModCommand extends BaseCommand {
	constructor() {
		super('vt', 'Vote', ['vote-server'], 'vt', '­');
	}

  run(client, message, args, lang) {

    const help = new MessageEmbed()
      .setAuthor(`${message.guild.me.displayName} | Version 1.0.0`)
      .setColor(cyan)
      .setTitle(`${e.folder} - Help Documents Overview :`)
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter(`© ${message.guild.me.displayName}`, client.user.displayAvatarURL());


    if(!args[0]){
      help.setDescription(`● Here you can find all \`${message.guild.me.displayName}\` Commands :\n ● Prefix : **${client.prefix}**`)
      help.addField(`**${e.mod}・Vote Tracker Cmd - (7) :**`, '`ban`, `clear`, `font`, `kick`, `mute`, `say`, `unmute`') 
     return message.channel.send(help);
    } else{

      let command = client.commands.get(args[0].toLowerCase());
    

      if(!command){
        return message.channel.send(help.setTitle(`${e.error} - Invalid command !`).setDescription(`Use \`${client.prefix}help\` to see the list of commands .`));
      }


      help.setDescription(stripIndents`● Prefix: **${client.prefix}** 

        **${e.general}・Command :** \`${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)}\`
        **${e.developer}・Aliases :**  \`${command.aliases ? command.aliases.join(", ") : "None" }\`
        **${e.info}・Usage :** ${command.usage ? `\`${command.usage}\`` : "No usage"}`);

      return message.channel.send(help);
    }
  }
}