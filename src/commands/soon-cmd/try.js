const Discord = require("discord.js");
const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const { cyan } = require("../../../colours.json");
const emojis = require("../../../emojis.json");
let e = emojis;




module.exports = class WarnCommand extends BaseCommand {
	constructor() {
		super('mahdi', 'mod', ['be-mahdi'], 'mahdi [user]');
	}

	run(client, message, args, lang) {


 let filter = m => m.author.id === message.author.id

  let start = new MessageEmbed()

    .addField("ها نحن ذا")

  message.channel.send(start).then(msg => {
    message.channel.awaitMessages(filter, {
      max: 1,
      time: 9999999,
      errors: ['time']
    }).then(EMOJIL => {
      EMOJIL.first();

      let emoji_name
      let titel = new MessageEmbed()

        .addField(`edit`)

     message.channel.edit(titel).then(msg => {
        message.channel.awaitMessages(filter, {
          max: 1,
          time: 9999999,
          errors: ['time']
        }).then(EMOJIN => {
          EMOJIN.first();
          emoji_name = EMOJIN.first().content;
          let emojis_s = new MessageEmbed().setTitle("language.Modreation.emoji_done").setColor().addField("language.Modreation.emoji_name,`${emoji.name}`").addField("language.Modreation.emoji_id,`${emoji.id}`")
          message.channel.send(emojis_s)
        })
      })
    })
  })






  }    
}


/*let filter = m => m.author.id === message.author.id

  let emoji_link

  let emojilink = new MessageEmbed().setColor(``).addField("اكتب العنوان")

  message.channel.send(emojilink).then(msg => {

    message.channel.awaitMessages(filter, {
      max: 1,
      time: 9999999,
      errors: ['time']
    })

  .then(EMOJIL => {
      EMOJIL.first();

      emoji_link = EMOJIL.first().content;

      let emoji_name

      let emojilink = new MessageEmbed().setColor(``).addField("اكتب الوصف")

      message.channel.send(emojilink).then(msg => {

        message.channel.awaitMessages(filter, {
          max: 1,
          time: 9999999,
          errors: ['time']
        })

.then(EMOJIN => {
          EMOJIN.first();

          emoji_name = EMOJIN.first().content;

          let emojis_s = new MessageEmbed().setTitle("language.Modreation.emoji_done").setColor().addField("language.Modreation.emoji_name,`${emoji.name}`").addField("language.Modreation.emoji_id,`${emoji.id}`")
   
       message.channel.send(emojis_s)
        })
      })
    })
  })
*/