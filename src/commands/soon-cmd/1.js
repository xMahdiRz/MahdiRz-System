const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const { cyan } = require("../../../colours.json");
const emojis = require("../../../emojis.json");
let e = emojis;
const fs = require("fs")
const db = require("quick.db");
const { Aki } = require('aki-api');
const { list, verify } = require('./functions');
const regions = ['person', 'object', 'animal'];

let azkar = JSON.parse(fs.readFileSync("./azkar.json", "utf8"));

module.exports = class ReactionRoleCommand extends BaseCommand {
	constructor() {
		super('1', 'owner', ['r1r'], 'reactionrole');
	}

	run(client, message, args, lang, ops) {

	if (!message.channel.permissionsFor(client.user).has('EMBED_LINKS')) return message.channel.send('**Missing Permissions - [EMBED LINKS]!**');
		if (!args[0]) return message.channel.send(`**What Category Do You Want To Use? Either \`${list(regions, 'or')}\`!**`);
		let stringAki = args[0].toLowerCase();
		let region;
		if (stringAki === 'person'.toLocaleLowerCase()) region = 'ar';
		if (stringAki === 'object'.toLocaleLowerCase()) region = 'ar_objects';
		if (stringAki === 'animal'.toLocaleLowerCase()) region = 'ar_animals';
		if (!regions.includes(stringAki)) return message.channel.send(`**What Region Do You Want To Use? Either \`${list(regions, 'or')}\`!**`);
		const current = ops.games.get(message.channel.id);
		if (current) return message.channel.send(`**Please Wait Until The Current Game of \`${current.name}\` is Finished!**`);
		try {
			const aki = new Aki(region);
			let ans = null;
			let win = false;
			let timesGuessed = 0;
			let guessResetNum = 0;
			let wentBack = false;
			let forceGuess = false;
			const guessBlacklist = [];
			ops.games.set(message.channel.id, { name: 'akinator' });
			while (timesGuessed < 3) {
				if (guessResetNum > 0) guessResetNum--;
				if (ans === null) {
					aki.start();
				} else if (wentBack) {
					wentBack = false;
				} else {
					try {
						 aki.step(ans);
					} catch {
						 aki.step(ans);
					}
				}
				if (!aki.answers || aki.currentStep >= 79) forceGuess = true;
				const answers = aki.answers.map(answer => answer.toLowerCase());
				answers.push('end');
				if (aki.currentStep > 0) answers.push('back');
				const embed = new MessageEmbed()
					.setAuthor(message.author.username, "https://play-lh.googleusercontent.com/rjX8LZCV-MaY3o927R59GkEwDOIRLGCXFphaOTeFFzNiYY6SQ4a-B_5t7eUPlGANrcw")
					.setColor('GOLD')
					.setThumbnail("https://i.pinimg.com/originals/fe/e0/24/fee0246d3c4bddd06e95b41afbf13024.png")
					.setDescription(`> **Q${aki.currentStep + 1} - ${aki.question}**\n ${aki.answers.join(`\n - `)}${aki.currentStep > 0 ? `\n Back` : ''} \n End`)
					.setFooter(`Progress - ${Math.round(Number.parseInt(aki.progress, 10))}%`)
				 message.channel.send(embed)
				const filter = res => res.author.id === message.author.id && answers.includes(res.content.toLowerCase());
				const messages =  message.channel.awaitMessages(filter, {
					max: 1,
					time: 30000
				});
				if (!messages.size) {
					 message.channel.send('**Time Up!**');
					win = 'time';
					break;
				}
				const choice = messages.first().content.toLowerCase();
				if (choice.toLowerCase() === 'end'.toLocaleLowerCase()) {
					forceGuess = true;
				} else if (choice.toLowerCase() === 'back'.toLocaleLowerCase()) {
					if (guessResetNum > 0) guessResetNum++;
					wentBack = true;
					 aki.back();
					continue;
				} else {
					ans = answers.indexOf(choice);
				}
				if ((aki.progress >= 90 && !guessResetNum) || forceGuess) {
					timesGuessed++;
					guessResetNum += 10;
					 aki.win();
					const guess = aki.answers.filter(g => !guessBlacklist.includes(g.id))[0];
					if (!guess) {
						 message.channel.send('**I Can\'t Think of Anyone!**');
						win = true;
						break;
					}
					guessBlacklist.push(guess.id);
					const embed = new MessageEmbed()
						.setAuthor(message.author.username, "https://play-lh.googleusercontent.com/rjX8LZCV-MaY3o927R59GkEwDOIRLGCXFphaOTeFFzNiYY6SQ4a-B_5t7eUPlGANrcw")
						.setColor('GOLD')
						.setTitle(`I'm ${Math.round(guess.proba * 100)}% Sure It's...`)
						.setDescription(`**${guess.name}${guess.description ? `\nProfession - ${guess.description}` : ''}\nRanking - ${guess.ranking}\nType Yes/No To Confirm!**`)
						.setImage(guess.absolute_picture_path || null)
						.setFooter(forceGuess ? 'Final Guess' : `Guesses - ${timesGuessed}`);
					 message.channel.send(embed);
					const verification =  verify(message.channel, message.author);
					if (verification === 0) {
						win = 'time';
						break;
					} else if (verification) {
						win = false;
						break;
					} else {
						const exmessage = timesGuessed >= 3 || forceGuess ? 'I Give Up!' : 'I Can Keep Going!';
						 message.channel.send(`**Hmm... Is That so? ${exmessage}**`);
						if (timesGuessed >= 3 || forceGuess) {
							win = true;
							break;
						}
					}
				}
			}
			ops.games.delete(message.channel.id);
			if (win === 'time') return message.channel.send('**I Guess Your Silence Means I Have Won!**');
			if (win) return message.channel.send('**You Have Defeated Me This Time!**');
			return message.channel.send('Guessed it right one more time! I loved playing with you! <:defi1:804797586438357003>');
		} catch (err) {
			ops.games.delete(message.channel.id);
			return message.channel.send(`**Server Down, Try again later!**`);
		};
	}

/*let AZKAR = ["سبحان الله","استغفر الله"]
let azkar_channel = message.guild.channels.cache.find(channel => channel.name === `${azkar[message.guild.id].channel}`)
if(!azkar_channel) return message.channel.send("**I can't find the channel**")
message.channel.send("**Done Started !**")
setInterval(async() => {
let azkar2 = AZKAR[Math.floor(Math.random() * AZKAR.length)];
azkar_channel.send(azkar2)
}, 5000)
*/
  }

