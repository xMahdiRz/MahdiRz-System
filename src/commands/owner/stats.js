const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const { cyan } = require("../../../colours.json");
const emojis = require("../../../emojis.json");
let e = emojis;

module.exports = class ReactionRoleCommand extends BaseCommand {
	constructor() {
		super('stats', 'owner', ['stats'], '­');
	}

	run(client, message, args, lang) {
               if(message.author.bot) return;
        if(!message.channel.guild) return message.reply(' Error : \` Guild Command \`');
    message.channel.send({

       embed: new MessageEmbed()

            .setColor(cyan)
          .addField(`> **${e.ping}・Ping : **`, ` \n \`${Date.now() - message.createdTimestamp} MS\``, true)
          .addField(`> **${e.info}・RAM Usage :**`, ` \n \`${(process.memoryUsage().rss / 1048576).toFixed()} MB\` `, true)

                 //     .setFooter(`${message.guild.me.displayName}`, client.user.displayAvatarURL())

    })
}
}