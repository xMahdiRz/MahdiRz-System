const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const { cyan } = require("../../../colours.json");
const emojis = require("../../../emojis.json");
let e = emojis;
const fs = require("fs")
const db = require("quick.db");
const path = require('path');

//const azkar = JSON.parse(fs.readFileSync("../../../azkar.json"))
//let { azkar } = require('./azkar.json')
let azkar = JSON.parse(fs.readFileSync("./azkar.json", "utf8"));

module.exports = class ReactionRoleCommand extends BaseCommand {
	constructor() {
		super('reactionrole', 'owner', ['r0r'], 'reactionrole');
	}

	run(client, message, args, lang) {
/*
		const errorembed = new MessageEmbed()
		.setDescription(`> **${e.error} - Sorry ${message.author} , this command is only for the owner of the bot.**`)
		.setColor('#ff0000');
		if (message.author.id !== '557711715610001428') return message.channel.send(errorembed);

    const ServerNotifications = message.guild.roles.cache.get("762331094052896790")
    const BotNotifications = message.guild.roles.cache.get("762330725499273276")

  const embed = new MessageEmbed()
    .setTitle(`・Open Notifications | إفتح الاشعارات`)
    .setColor(cyan)
    .setDescription(`> **🇺🇸 - Click on the reaction below to obtain the following notifications : ** \n > **🇱🇧 - إضغط على الرياكشن أدناه للحصول على الإشعارات التالية :**`)
//    .addField(`${e.info}・All roles available | جميع الرتب المتوفرة` , `${e.AlertNews} - ${ServerNotifications.toString()}\n${e.Discord} - ${BotNotifications.toString()}`)
		.setFooter(`© ManageGift's Community`, 'https://c.top4top.io/p_1742wpk2g1.png');
  message.channel.send(embed).then(async (message) => {

    await message.react(message.guild.emojis.cache.get('765294864572481566'));
    await message.react(message.guild.emojis.cache.get('765294899008372767'));

  });
  ;

    if (!message.guild.available) return this.client.logger.info(`Guild "${message.guild.name}" (${message.guild.id}) is unavailable.`);
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(`I cannot run this command as I have insufficient permissions to do so. Please ensure I have the \"Ban Members\" permission.`);

    message.guild.fetchBans()
    .then(bans => {
      const obj = bans.map(b => ({
        user: `${c.username}#${c.discriminator}`
      }));
      const bList = Array.from(obj);
      if (bList.length < 1) return message.author.send(`There are no banned users on **${message.guild.name}**.`);
      let index = 0;

      message.author.send(`__**Ban List for ${message.guild.name}**__\n${bList.map(bl => `**${++index} -** ${bl.user}`).join("\n")}`);
      message.react("✅");
    });*/
let channelfind = message.content.split(" ").slice(1).join(" ")
if(!channelfind) return message.channel.send("**setup [Channel]**")
let room = message.guild.channels.cache.find(channel => channel.name === `${channelfind}`)
if(!room) return message.channel.send("**I can't find this channel !**")
let embed = new MessageEmbed()
.setDescription("**Done Setuped !**")
message.channel.send(embed)
fs.writeFileSync(path.resolve(__dirname, 'azkar.json'), JSON.stringify(azkar)), err => {
azkar[message.guild.id] = {channel: channelfind}
		fs.writeFile("./azkar.json", JSON.stringify(azkar), err => {
			azkar[message.guild.id] = {
				channel: channelfind
			}
		})
}

}
}   
