const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require("discord.js")
const { white } = require("../../../colours.json");
const emojis = require("../../../emojis.json");
let e = emojis;

module.exports = class UserinfoCommand extends BaseCommand {
  constructor() {
    super('user', 'General', ['userinfo'], 'user [user]');
  }

  run(client, message, args) {

      if (message.channel.type === 'dm') { return message.reply(`> **${e.error} - Sorry, I can't run commands in DMs chat !**`); }


    if(args.length > 1) return message.channel.send(`> **${e.error} - ${message.author} , Only mention one user !**`);
        

    if(!args[0]) return message.channel.send(`> **${e.error} - ${message.author} , Mention someone !**`);


    if(args[0]){

      let member = message.mentions.members.first();


      if(member) {
        let embed = new MessageEmbed()
	        .setColor('#5780cd')
          .setThumbnail(member.user.displayAvatarURL())
          .setAuthor(`${member.user.tag} `, member.user.displayAvatarURL())
          .addField(`${e.info}・Joined Discord :`, ` \n \`${member.user.createdAt.toLocaleString()}\` `, true)
          .addField(`${e.general}・Joined Server : `, ` \n \`${member.joinedAt.toLocaleString()}\` `, true)
          .setFooter(`© ${message.guild.me.displayName}`, client.user.displayAvatarURL());

        message.channel.send(embed);
      } else {
          message.channel.send(`> **${e.error} - ${message.author} , Could not find that member**`); //send a message to the channel if the user doesn't exist
      }
    }
  }
}