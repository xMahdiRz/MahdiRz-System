const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const { cyan } = require("../../../colours.json");
const emojis = require("../../../emojis.json");
let e = emojis;
const fs = require("fs")
const db = require("quick.db");

let azkar = JSON.parse(fs.readFileSync("./azkar.json", "utf8"));

module.exports = class ReactionRoleCommand extends BaseCommand {
	constructor() {
		super('1', 'games', ['r1r'], 'games');
	}

	run(client, message, args, lang, ops) {
/*
let AZKAR = ["سبحان الله","استغفر الله"]
let azkar_channel = message.guild.channels.cache.find(channel => channel.name === `${azkar[message.guild.id].channel}`)
if(!azkar_channel) return message.channel.send("**I can't find the channel**")
message.channel.send("**Done Started !**")
setInterval(async() => {
let azkar2 = AZKAR[Math.floor(Math.random() * AZKAR.length)];
azkar_channel.send(azkar2)
}, 5000)*/

}	 
		
	}



