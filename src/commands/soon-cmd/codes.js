// Movies Cmd Soon 
/*const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const { cyan } = require("../../../colours.json");
const emojis = require("../../../emojis.json");
let e = emojis;
const { js_beautify: beautify } = require('js-beautify');
const { stripIndents } = require('common-tags');
const request = require('node-superfetch');
const { shorten, pickWhenMany } = require('../../util/Util');
const { TMDB_KEY } = process.env;


module.exports = class MathCommand extends BaseCommand {
  constructor() {
    super('hi', 'misc', ['calc', 'calculator'], 'math [number] [+ | - | * | /] [number]', 'Beautifies code with js-beautify.');
  }
run(client, message, args, lang, msg, query) {


		try {
			const search =  request
				.get('http://api.themoviedb.org/3/search/movie')
				.query({
					api_key: TMDB_KEY,
					include_adult: msg.channel.nsfw || false,
					query
				});
			if (!search.body.results.length) return msg.say('Could not find any results.');
			let find = search.body.results.find(m => m.title.toLowerCase() === query.toLowerCase())
				|| search.body.results[0];
			if (search.body.results.length > 1) {
				const resultListFunc = (movie, i) => `**${i + 1}.** ${movie.title} (${movie.release_date || 'TBA'})`;
				find =  pickWhenMany(msg, search.body.results, find, resultListFunc);
			}
			const { body } =  request
				.get(`https://api.themoviedb.org/3/movie/${find.id}`)
				.query({ api_key: TMDB_KEY });
			const embed = new MessageEmbed()
				.setColor(0x00D474)
				.setTitle(body.title)
				.setURL(`https://www.themoviedb.org/movie/${body.id}`)
				.setAuthor('TMDB', 'https://i.imgur.com/3K3QMv9.png', 'https://www.themoviedb.org/')
				.setDescription(body.overview ? shorten(body.overview) : 'No description available.')
				.setThumbnail(body.poster_path ? `https://image.tmdb.org/t/p/w500${body.poster_path}` : null)
				.addField('❯ Runtime', body.runtime ? `${body.runtime} mins.` : '???', true)
				.addField('❯ Release Date', body.release_date || '???', true)
				.addField('❯ Genres', body.genres.length ? body.genres.map(genre => genre.name).join(', ') : '???')
				.addField('❯ Production Companies',
					body.production_companies.length ? body.production_companies.map(c => c.name).join(', ') : '???');
			return msg.embed(embed);
		} catch (err) {
			return msg.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
		}
	}
}*/
// ---------------------- 
// Math Cmd Soon 
/* const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const emojis = require("../../../emojis.json");
let e = emojis;

module.exports = class MathCommand extends BaseCommand {
  constructor() {
    super('math', 'misc', ['calc', 'calculator'], 'math [number] [+ | - | * | /] [number]');
  }

  run(client, message, args) {
    if(!args[0]) return message.reply('Enter a first number');
    if(!args[1]) return message.reply('Enter an operator');
    if(!args[2]) return message.reply('Enter a second number');

    message.channel.send(calculator(args[0], args[1], args[2]));
  }
}

function calculator(num1, operator, num2){
  if(isNaN(num1)) return 'Number 1 is not a number'; //if the first number is not a number return an error message
  if(isNaN(num2)) return 'Number 2 is not a number'; //if the second number is not a number return an error message

  //switch through the allowed operators and perform the specified operations
  switch(operator){
    case "+":
      return parseInt(num1) + parseInt(num2);
      break;
    case "-":
      return num1 - num2;
      break;
    case "*":
      return num1 * num2;
      break;
    case "/":
      return (num1 / num2).toFixed(2);
      break;
    default:
      return "Enter a valid operator (+|-|*|/)";
      break;
  }
} */
// ---------------------- 
// Reload Cmd Soon 
/*const Command = require('../../base/Command.js');

class Reload extends Command {
  constructor(client) {
    super(client, {
      name: "reload",
      description: "Reloads a command that has been modified.",
      category: "Bot Owner",
      usage: "reload <COMMAND_NAME>",
      permLevel: "Bot Owner"
    });
  }

  async run(message, args) { 
    if (!args[0]) return message.reply("You must provide a command to reload.");
    
    const commands = this.client.commands.get(args[0]) || this.client.commands.get(this.client.aliases.get(args[0]));
    if (!commands) return message.reply(`The command \`${args[0]}\` does not exist, nor is it an alias.`);

    let response = await this.client.unloadCommand(commands.conf.location, commands.help.name);
    if (response) return message.channel.send(`Error Unloading: \`${response}\`.`);

    response = this.client.loadCommand(commands.conf.location, commands.help.name);
    if (response) return message.channel.send(`Error loading: \`${response}\`.`);

    message.channel.send(`☑️ | The command \`${commands.help.name}\` has been reloaded.`);
  }
}

module.exports = Reload;*/
// ---------------------- 
// Last Message Cmd Soon 
/* const Command = require("../../base/Command.js");
const { MessageEmbed } = require("discord.js");

class LastMessage extends Command {
  constructor(client) {
    super(client, {
      name: "last-message",
      description: "Returns the mentioned user's last message.",
      category: "Info",
      usage: "last-message <@user>",
      guildOnly: true
    });
  }

  async run(message) {
    const member = message.mentions.members.first();
    if (!member) return message.channel.send('Command Usage: `lastmessage <@user>`');

    const lastMsg = message.guild.member(member).lastMessage;
    if (!lastMsg) return message.channel.send("This user's last message could not be found, or they simply may not have sent any messages here.");
                
    const embed = new MessageEmbed()
      .setColor(message.guild.member(member).displayColor)
      .setAuthor(member.user.tag, member.user.displayAvatarURL)
      .setDescription(`*${lastMsg}*`)
      .setFooter(`#${message.channel.name}`)
      .setTimestamp();
    message.channel.send({ embed });
  }
}

module.exports = LastMessage;*/
// ---------------------- 
// Emoji Cmd Soon 
/*const Command = require("../../base/Command.js");
const { MessageEmbed } = require("discord.js");

class EmojiImage extends Command {
  constructor(client) {
    super(client, {
      name: "emoji-image",
      description: "Sends the specified emoji as an image.",
      category: "Info",
      usage: "emoji-image <Emoji>"
    });
  }

  async run(message, args) { 
    if (!args[0]) return message.reply('Command Usage: `emoji-image <Emoji>`');
    if (args[0].startsWith("<a:")) return message.reply("This command does not support animated emojis yet.");
    if (args[0].charCodeAt(0) >= 55296) return message.reply(`${args[0]} is a regular Discord emoji, from Twemoji.\nhttps://twemoji.twitter.com`);

    const match = args[0].match(/<:[a-zA-Z0-9_-]+:(\d{18})>/);
    if (!match || !match[1]) return message.reply('You must provide a valid emoji, from a server I am on.');

    const emoji = this.client.emojis.find(match[1]);
    if (!emoji) return message.reply('You must provide a valid emoji, from a server I am on.');

    const embed = new MessageEmbed()
      .setColor('RANDOM')
      .setTitle(emoji.name)
      .setImage(emoji.url)
    return message.channel.send({ embed });
  }
}

module.exports = EmojiImage;*/
// ---------------------- 
// Emoji Cmd Soon 
/*const Command = require("../../base/Command.js");
const { MessageEmbed } = require("discord.js");
const moment = require("moment");

class Emoji extends Command {
  constructor(client) {
    super(client, {
      name: "emoji",
      description: "Displays information about the specified emoji.",
      category: "Info",
      usage: "emoji <Emoji>",
      aliases: ["emoji-info"]
    });
  }

  async run(message, args) { 
    if (!args[0]) return message.reply('Command Usage: `emoji <Emoji>`');
    if (args[0].startsWith("<a:")) return message.reply("This command does not support animated emojis yet.");
    if (args[0].charCodeAt(0) >= 55296) return message.reply(`${args[0]} is a regular Discord emoji, from Twemoji.\nhttps://twemoji.twitter.com`);

    const match = args[0].match(/<:[a-zA-Z0-9_-]+:(\d{18})>/);
    if (!match || !match[1]) return message.reply('You must provide a valid emoji, from a server I am on.');

    const emoji = this.client.emojis.get(match[1]);
    if (!emoji) return message.reply('You must provide a valid emoji, from a server I am on.');

    const embed = new MessageEmbed()
      .setColor('RANDOM')
      .setTitle("Emoji Information")
      .setThumbnail(emoji.url)
      .addField("❯ Name", emoji.name, true)
      .addField("❯ ID", emoji.id, true)
      .addField("❯ Created", moment.utc(emoji.createdAt).format("DD/MM/YYYY"), true)
      .addField("❯ From", emoji.guild, true)
    return message.channel.send({ embed });
  }
}

module.exports = Emoji;*/
// ---------------------- 
/*if (message.content.startsWith(prefix + "setname")) {
        let args = message.content
            .split(" ")
            .slice(1)
            .join(" ");
        if (!message.author.id === "557711715610001428") return; ///تعديل مهم حط الايدي تبعك
        client.user.setUsername(args);
        message.channel.send(`تم تغيير الاسم الى ..**${args}** `);
    } else if (message.content.startsWith(prefix + "setavatar")) {
        let args = message.content
            .split(" ")
            .slice(1)
            .join(" ");
        if (!message.author.id === "557711715610001428") return; /// تعديل مهم حط الايدي تبعك
        client.user.setAvatar(args).catch(err => message.reply("send a valid url"));
        message.channel.send(`تم تغيير الصورة الى :**${args}** `);
    }
});*/

//-------------------
/*
let filter = m => m.author.id === message.author.id
let emoji_link
let emojilink = new MessageEmbed()
.setColor("RANDOM")
.addField(".")
 message.channel.send(emojilink).then(msg => {
message.channel.awaitMessages(filter, {
    max: 1,time: 1000,errors: ['time']}).then(EMOJIL => {EMOJIL.first();
    emoji_link = EMOJIL.first().content;
let emoji_name
let emojilink = new MessageEmbed()
.setColor("RANDOM")
.addField(".")
message.channel.send(emojilink).then(msg =>{
message.channel.awaitMessages(filter, {
    max: 1,time: 9999999,errors: ['time']}).then(EMOJIN => {EMOJIN.first();
    emoji_name = EMOJIN.first().content
.then(emoji =>{
let emojis_s = new MessageEmbed()
.setTitle("RANDOM")
.setColor()
.addField(".")
.addField(".")
message.channel.send(emojis_s)
   })}
    )}
    )}
    )}
    )*/
/*client.on("message", message => { 
// الكود منشور لوجه الخير , لا نحلل استخدامه في السبام وما الى ذلك
// اللهم اني بلغت اللهم فشهد
  var az = [
    '**سبحان الله العلي العظيم**',
    '**الحمد لله رب العالمين**',
    '**لا تنسى ذكر الله **',
    '**اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ. **',
    '**قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ، مِن شَرِّ مَا خَلَقَ، وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ، وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ، وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ. **',
    '**قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ، مَلِكِ ٱلنَّاسِ، إِلَٰهِ ٱلنَّاسِ، مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ، ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ، مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ **',
    '** أَصْـبَحْنا وَأَصْـبَحَ المُـلْكُ لله وَالحَمدُ لله ، لا إلهَ إلاّ اللّهُ وَحدَهُ لا شَريكَ لهُ، لهُ المُـلكُ ولهُ الحَمْـد، وهُوَ على كلّ شَيءٍ قدير ، رَبِّ أسْـأَلُـكَ خَـيرَ ما في هـذا اليوم وَخَـيرَ ما بَعْـدَه ، وَأَعـوذُ بِكَ مِنْ شَـرِّ ما في هـذا اليوم وَشَرِّ ما بَعْـدَه، رَبِّ أَعـوذُبِكَ مِنَ الْكَسَـلِ وَسـوءِ الْكِـبَر ، رَبِّ أَعـوذُ بِكَ مِنْ عَـذابٍ في النّـارِ وَعَـذابٍ في القَـبْ**',
    '**اللّهـمَّ أَنْتَ رَبِّـي لا إلهَ إلاّ أَنْتَ ، خَلَقْتَنـي وَأَنا عَبْـدُك ، وَأَنا عَلـى عَهْـدِكَ وَوَعْـدِكَ ما اسْتَـطَعْـت ، أَعـوذُبِكَ مِنْ شَـرِّ ما صَنَـعْت ، أَبـوءُ لَـكَ بِنِعْـمَتِـكَ عَلَـيَّ وَأَبـوءُ بِذَنْـبي فَاغْفـِرْ لي فَإِنَّـهُ لا يَغْـفِرُ الذُّنـوبَ إِلاّ أَنْتَ . **',
    '**رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى الله عليه وسلم نَبِيّـاً.  **',
    '** اللّهُـمَّ إِنِّـي أَصْبَـحْتُ أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك. **',
    '**حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم.  **',
    '**بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَهـوَ السّمـيعُ العَلـيم. **',
    '**اللّهُـمَّ بِكَ أَصْـبَحْنا وَبِكَ أَمْسَـينا ، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ النُّـشُور.  **',
    '**اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنْ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنْ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ، وَقَهْرِ الرِّجَالِ.  **',
    '**أسْتَغْفِرُ اللهَ وَأتُوبُ إلَيْهِ  **',
    '**لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ.  **',
    '** اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا.**',
  ]
  // مصدر الأذكار موقع
  // https://www.islambook.com/azkar/1/
  // كتابة الكود : AboKhalil
let romname = "اذكار";

  let args = message.content.split(" ");
  command = args[0];
  if (command === `${prefix}اذكار`) {
      if (!message.guild.member(message.author).hasPermission("ADMINISTATOR")) {
        message.channel.send('**يجب ان تكون لديك خاصية `administrator` **');
    } else { 
    setInterval(() => {
      azkar = az[Math.floor(Math.random() * az.length)];
      let sendrom = message.guild.channels.find('name', `${romname}`)
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle("[ اذكار ]")
      .setDescription(azkar)
      sendrom.send(embed);
    }, 360000);
   }
  } */