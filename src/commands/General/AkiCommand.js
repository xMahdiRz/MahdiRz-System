const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const { stripIndents } = require("common-tags");
const { cyan } = require("../../../colours.json");
const emojiss = require("../../../emojis.json");
let e = emojiss;
const Discord = require("discord.js");
const Client = new Discord.Client();

const isPlaying = new Set();
const { Aki } = require("aki-api");
const akinatorAPI = require("aki-api");


module.exports = class AvatarCommand extends BaseCommand {
	constructor() {
		super('aki', 'General', ['picture'], 'picture', 'See a user avatar');
	}

	run(client, message, args, lang, prefix, questionTitle, question, answers, channel, user, progress) {


    const messageEmbed = new MessageEmbed()
        .setTitle(questionTitle || "Question")
        .setDescription(question)
        .addField("Answers:", (answers.join(", ")))
        .addField("Progress", `${Math.floor(progress || 0)}%`)
        .setFooter(user.tag, user.displayAvatarURL)
        .setColor(0x5B94FF);

    const askMessage =  channel.send(messageEmbed);
    const retrievedAnswer =  channel.awaitMessages(response => response.member.id === user.id, {
        max: 1,
        time: 30000,
        errors: ["time"],
    }).catch(e => { console.error(e); });

    return [askMessage, retrievedAnswer && retrievedAnswer.first() && retrievedAnswer.first().content || null];
}


/*exports.run = async (client, message, args, { guild, user, error }) => {
    const { prefix } = guild;

    if (!args.length) return message.channel.send(
        new RichEmbed().setTitle("Akinator").setColor(Colors.FAILED).setDescription("You must include a valid language (i.e: en = english).").setFooter(message.author.tag, message.author.displayAvatarURL),
    );

    const data = args.join(" ").split(/(\||;)/).map(i => i.trim());

    // -- Game data

    const providedRegion = data[0];
    const akinatorGame = await akinatorAPI.start(providedRegion);
    let currentQuestion = akinatorGame;
    let currentProgress = 0;
    let gameAborted = false;
    let gameSolved = false;
    let guessed;

    // -- The game loop
    async function startGameLoop(force) {
        while ((currentProgress < QUESTION_TRESHOLD && force !== true || !currentQuestion && force !== true) || force === true) {
            if (force === true) force = false;

            // -- Using askQuestion to ask the question and getting the response
            // -> If you want to do something with the question message, you can use "askMessage". I.e askMessage.delete();
            const [askMessage, answer] = await askQuestion(null, currentQuestion.question || currentQuestion.nextQuestion, currentQuestion.answers, message.channel, message.author, currentProgress);

            // -- If no answer was given in time, stopping the game
            if (!answer) {
                const stopEmbed = new RichEmbed()
                    .setTitle("Game stopped")
                    .setDescription("As no answer was given, the game was stopped!")
                    .setColor(Colors.HAZARD)
                    .setFooter(message.author.tag, message.author.displayAvatarURL);
                await message.channel.send(stopEmbed);
                gameAborted = true;
                return;
            } else if (answer.toLowerCase() === "cancel") {
                const stopEmbed = new RichEmbed()
                    .setTitle("Game stopped")
                    .setDescription("The player has chosen to cancel the game.")
                    .setColor(Colors.HAZARD)
                    .setFooter(message.author.tag, message.author.displayAvatarURL);
                await message.channel.send(stopEmbed);
                gameAborted = true;
                return;
            } else {
                const answersLowercase = currentQuestion.answers.map(x => x.toLowerCase());
                let foundAnswer = answersLowercase.indexOf(answer.toLowerCase());
                foundAnswer = foundAnswer > -1 ? foundAnswer : 0;

                currentQuestion = await akinatorAPI.step(providedRegion, akinatorGame.session, akinatorGame.signature, foundAnswer, currentQuestion.nextStep || 0);
                currentProgress = Number(currentQuestion.progress || "0");
            }
        }
    }

    // -- Controlling the game loop, lasts until the game is finished or aborted

    while (gameSolved === false) {
        await startGameLoop();
        guessed = await akinatorAPI.win(providedRegion, akinatorGame.session, akinatorGame.signature, currentQuestion.nextStep).catch(e => {console.log(e);});

        const firstGuess = guessed && guessed.answers && guessed.answers[0] || null;

        if (firstGuess) {
            gameSolved = true;
            guessed = firstGuess;
            break;
        } else if (!gameAborted === true) {
            await startGameLoop(true);
        }
    }

    // -- If the game wasn"t aborted, but rather finished then proceed
    if (gameAborted !== true) {

        const guessEmbed = new RichEmbed()
            .setTitle("Character guessed!")
            .addField("Character name", guessed.name, true)
            .addField("Probability", `${Math.floor(100 * (Number(guessed.proba || "100")))}%`, true)
            .addField("Description", guessed.description)
            .setImage(guessed.absolute_picture_path)
            .setFooter(message.author.tag, message.author.displayAvatarURL)
            .setColor(Colors.DEFAULT);

        message.channel.send(guessEmbed);

    }

*/
  }
