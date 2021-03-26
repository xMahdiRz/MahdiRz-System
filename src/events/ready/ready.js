const BaseEvent = require('../../utils/structures/BaseEvent');
const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const emojis = require("../../../emojis.json");
let e = emojis;
const { readdirSync } = require("fs");
const ascii = require("ascii-table");
const fs = require("fs");

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }

  async run (client, message) {

/*let table = new ascii("Commands");
table.setHeading("Command Name", "Loaded Status");


  readdirSync("./commands").forEach(dir => {
        const commands = readdirSync(`../../commands/General/${dir}/`).filter(file => file.endsWith(".js"));
        for (let file of commands) {
            let pull = require(`../../commands/General/${dir}/${file}`);
            if (pull.name) {
                client.commands.set(pull.name, pull);
                table.addRow(pull.name, '✅');
            } else {
                table.addRow(pull.name, `❌  -> missing a help.name, or help.name is not a string.`);
                continue;
            }
            if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
        }
    });
    console.log(table.toString());*/

/*var table = new ascii()

table
  .addRow('1', client.user.tag, 'has logged in')
//  .addRow('2', 'banana', 'hi')
//  .addRow('3', 'carrot', 'meow')
 // .addRow('4', 'elephants')


console.log(table.toString())*/

    console.log(client.user.tag +' | has logged in.');

    client.user.setStatus("dnd")

    const ready = client.channels.cache.find(channel => channel.name === "system-status"); 
    var server = client.guilds.cache.get("664614587714240512");

		let embed = new MessageEmbed()

      .setDescription(`> **${e.general} - Member Count : \`${server.memberCount}\` .**`)
			.setColor('RANDOM');

	  	ready.send(embed);

    let g = client.guilds.cache.get("664614587714240512");
    let c = g.channels.cache.get("759833506066333706");
    if (c.type === 'voice') {
      c.join();
      setInterval(() => {
        if (g.me.voiceChannel && g.me.voiceChannelID !== c.id || !g.me.voiceChannel) c.join();
      }, 1);
    } else {
      console.log('Failed To Join: \n The Channel Type isn "Listening."')
    }

    let activities = [ 'Discord.gg/s-t', `My Perfix : ${client.prefix}`, '『 Soul Takers ☠ 』' ], i = 0;
    setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, { type: "PLAYING" }), 15000);
  }
}