const number = ['1⃣', '2⃣', '3⃣', '4⃣', '5⃣'];
const isPlayed = new Set();
const AKI = require('aki-api')
const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const { stripIndents } = require("common-tags");
const { cyan } = require("../../../colours.json");
const emojiss = require("../../../emojis.json");
let e = emojiss;
const Discord = require("discord.js");
const Client = new Discord.Client();


module.exports = class AvatarCommand extends BaseCommand {
	constructor() {
		super('aki', 'General', ['picture'], 'picture', 'See a user avatar');
	}

	run(client, message, args, lang, prefix) {
		const current = this.client.games.get(message.channel.id);
		if (current) return message.reply(`Please wait until the current game of \`${current.name}\` is finished.`);
		try {
			const aki = new Aki(region, !message.channel.nsfw);
			let ans = null;
			let win = false;
			let timesGuessed = 0;
			let guessResetNum = 0;
			let wentBack = false;
			let forceGuess = false;
			const guessBlacklist = [];
			this.client.games.set(message.channel.id, { name: this.name });
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
				 message.say(stripIndents`
					**${aki.currentStep + 1}.** ${aki.question} (${Math.round(Number.parseInt(aki.progress, 10))}%)
					${aki.answers.join(' | ')}${aki.currentStep > 0 ? ` | Back` : ''} | End
				`);
				const filter = res => res.author.id === message.author.id && answers.includes(res.content.toLowerCase());
				const messages =  message.channel.awaitMessages(filter, {
					max: 1,
					time: 30000
				});
				if (!messages.size) {
					 message.say('Sorry, time is up!');
					win = 'time';
					break;
				}
				const choice = messages.first().content.toLowerCase();
				if (choice === 'end') {
					forceGuess = true;
				} else if (choice === 'back') {
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
						 message.say('I can\'t think of anyone.');
						win = true;
						break;
					}
					guessBlacklist.push(guess.id);
					const embed = new MessageEmbed()
						.setColor(0xF78B26)
						.setTitle(`I'm ${Math.round(guess.proba * 100)}% sure it's...`)
						.setDescription(stripIndents`
							${guess.name}${guess.description ? `\n_${guess.description}_` : ''}
							_**Type [y]es or [n]o to continue.**_
						`)
						.setThumbnail(guess.absolute_picture_path || null)
						.setFooter(forceGuess ? 'Final Guess' : `Guess ${timesGuessed}`);
					 message.embed(embed);
					const verification =  verify(message.channel, message.author);
					if (verification === 0) {
						win = 'time';
						break;
					} else if (verification) {
						win = false;
						break;
					} else if (timesGuessed >= 3 || forceGuess) {
						win = true;
						break;
					} else {
						 message.say('Hmm... Is that so? I can keep going!');
					}
				}
			}
			this.client.games.delete(message.channel.id);
			if (win === 'time') return message.say('I guess your silence means I have won.');
			if (win) return message.say('Bravo, you have defeated me.');
			return message.say('Guessed right one more time! I love playing with you!');
		} catch (err) {
			this.client.games.delete(message.channel.id);
			return message.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
		}

    }
 
}