/*const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const { cyan } = require("../../../colours.json");
const emojis = require("../../../emojis.json");
let e = emojis;
let aq = require('animequote');
const Kitsu = require('kitsu.js');
const kitsu = new Kitsu();
const randomPuppy = require('random-puppy');


module.exports = class ReactionRoleCommand extends BaseCommand {
	constructor() {
		super('a', 'owner', ['a'], 'a');
	}

	run(client, message, args, lang) {

       try {
            let search = args.join(" ");

            if (!search) {

                kitsu.searchAnime(aq().quoteanime).then(result => {

                    let anime = result[0]

                    let embed = new MessageEmbed()
                        .setColor('RANDOM')
                        .setAuthor(`${anime.titles.english} | ${anime.showType}`, anime.posterImage.original)
                        .setDescription(anime.synopsis.replace(/<[^>]*>/g, '').split('\n')[0])
                        .addField('❯\u2000\Information', `•\u2000\**Japanese Name:** ${anime.titles.romaji}\n\•\u2000\**Age Rating:** ${anime.ageRating}\n\•\u2000\**NSFW:** ${anime.nsfw ? 'Yes' : 'No'}`, true)
                        .addField('❯\u2000\Stats', `•\u2000\**Average Rating:** ${anime.averageRating}\n\•\u2000\**Rating Rank:** ${anime.ratingRank}\n\•\u2000\**Popularity Rank:** ${anime.popularityRank}`, true)
                        .addField('❯\u2000\Status', `•\u2000\**Episodes:** ${anime.episodeCount ? anime.episodeCount : 'N/A'}\n\•\u2000\**Start Date:** ${anime.startDate}\n\•\u2000\**End Date:** ${anime.endDate ? anime.endDate : "Still airing"}`, true)
                        .setImage(anime.posterImage.original);
                    return message.channel.send(`📺 | Try watching **${anime.titles.english}**!`, { embed });
                })

            } else {
                let search = args.join(" ");

                kitsu.searchAnime(search).then(result => {
                    if (result.length === 0) {
                        return message.channel.send(`No search results found for **${search}**!`);
                    }

                    let anime = result[0]

                    let embed = new MessageEmbed()
                        .setColor('RANDOM')
                        .setAuthor(`${anime.titles.english ? anime.titles.english : search} | ${anime.showType}`, anime.posterImage.original)
                        .setDescription(anime.synopsis.replace(/<[^>]*>/g, '').split('\n')[0])
                        .addField('❯\u2000\Information', `•\u2000\**Japanese Name:** ${anime.titles.romaji}\n\•\u2000\**Age Rating:** ${anime.ageRating}\n\•\u2000\**NSFW:** ${anime.nsfw ? 'Yes' : 'No'}`, true)
                        .addField('❯\u2000\Stats', `•\u2000\**Average Rating:** ${anime.averageRating}\n\•\u2000\**Rating Rank:** ${anime.ratingRank}\n\•\u2000\**Popularity Rank:** ${anime.popularityRank}`, true)
                        .addField('❯\u2000\Status', `•\u2000\**Episodes:** ${anime.episodeCount ? anime.episodeCount : 'N/A'}\n\•\u2000\**Start Date:** ${anime.startDate}\n\•\u2000\**End Date:** ${anime.endDate ? anime.endDate : "Still airing"}`, true)
                        .setImage(anime.posterImage.original);
                    return message.channel.send({ embed });
                });
            }
        } catch (err) {
            return message.reply(`Oh no, an error occurred: \`${err.message}\`.`);
        }

/*
     try {
      randomPuppy('awwnime')
      .then(url => {
        const embed = new MessageEmbed()
          .setFooter(`awwnime`)
          .setDescription(`[Image URL](${url})`)
          .setImage(url)
          .setColor('RANDOM')
        return message.channel.send({ embed })
      })
    } catch (err) {
      return message.reply(`Oh no, an error occurred: \`${err.message}\`.`);
   */
/*}
}*/