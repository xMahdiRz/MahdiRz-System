/*const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const { purple_medium } = require("../../../colours.json");
const emojis = require("../../../emojis.json");
let e = emojis;

module.exports = class KickCommand extends BaseCommand {
  constructor() {
    super('kick', 'mod', ['get-out'], 'kick [user]');
  }

  async run(client, message, args) {

    if (message.channel.type === 'dm') { return message.reply(`> **${e.error} - Sorry, I can't run commands in DMs chat !**`); }

    if(!message.member.hasPermission('KICK_MEMBERS')) {
      message.channel.send(`> **${e.error} - ${message.author} , You do not have permission to kick someone!**`);
    } else if(!args[0]){

      message.channel.send(`> **${e.error} - ${message.author} , You have to enter a user to kick.**`);
    } else if(!args[1]){

      message.channel.send(`> **${e.error} - ${message.author} , Enter a kick reason.**`);
    } else {

      try {
        const kicked = await message.mentions.members.first(); 
        const kicker = message.author.tag; 
        const reason = args[1]; 
        const channel = client.channels.cache.find(channel => channel.name === "ban-kick-logs"); 
        

        if(kicked){

          if(!message.guild.member(kicked).kickable) return message.channel.send(`> **${e.error} - ${message.author} , That user is not kickable.**`);
              message.channel.send(`> **${e.check} - \`${kicked.user.tag}\` was kicked successfully!**`);


          kicked.kick();


          const embed = new MessageEmbed()
            .setColor('#000dff')
            .setTitle(`${e.error}・New kick process :`)
            .addField(`${e.info}・Banned Member`, `${kicked}`, true)
            .addField(`${e.mod}・Moderator`, `${message.author}`, true)
            .addField(`${e.check}・Reason :`,` ${reason}`)
            .setTimestamp()
            .setFooter(`© ${message.guild.me.displayName}`, client.user.displayAvatarURL());

          channel.send(embed);

                  let AlertKickEmbed = new MessageEmbed()

            .setColor('#000dff')
            .setTitle(`${e.error}・You have been kicked from : \`${message.guild.name}\` Server`)
	          .setThumbnail('')
            .addField(`${e.check}・Reason :`,` ${reason}`)
            .setTimestamp()
            .setFooter(`© ${message.guild.me.displayName}`, client.user.displayAvatarURL());

        kicked.send(AlertKickEmbed).catch(error => { console.error(`${error}`)})
}

else{
          message.channel.send(`> **${e.error} - ${message.author} , Member not found.**`);
        }
      } catch(e) {
        console.error(e); 
      }
    }
  }
}*/