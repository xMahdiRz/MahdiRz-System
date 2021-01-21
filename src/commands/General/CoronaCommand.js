const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const { green_dark } = require("../../../colours.json");
const emojis = require("../../../emojis.json");
const api = require('novelcovid');
let e = emojis;

module.exports = class CoronaCommand extends BaseCommand {
  constructor() {
    super('corona', 'General', ['covid' , 'كورونا'], 'corona all | state [state] | [country]', 'Know the statistics of Corona');
  }

  async run(client, message, args) {

      if (message.channel.type === 'dm') { return message.reply(`> **${e.error} - Sorry, I can't run commands in DMs chat !**`); }


    if(!args[0]) {
      return message.channel.send(`> **${e.error} - ${message.author} , Search for a country, state, or get information about every country by typing : \`${client.prefix}corona all\` .**`);
    }

    if(args[0] === "all") {

      await api.all().then((data) => {

 /*       let embed = new MessageEmbed()
          .setTitle(`> **${e.info} - Global Cases :**`)
          .setColor('#5780cd')
          .setThumbnail('https://a.top4top.io/p_1739ulfb41.png')
          .addField(`> **${e.statistic}・Total Cases :**`, data.cases, true)
          .addField(`> **${e.death}・Total Deaths :**`, data.deaths, true)
          .addField(`> **${e.up}・Total Recovered :**`, data.recovered, true)
          .addField(`> **${e.today}・Today's Cases :**`, data.todayCases, true)
          .addField(`> **${e.error}・Today's Deaths :**`, data.todayDeaths, true)
          .addField(`> **${e.active}・Active Cases :**`, data.active, true)
          .setFooter(`© ${message.guild.me.displayName}`, client.user.displayAvatarURL()); */

        let embed = new MessageEmbed()
          .setTitle(`> **${e.info} - الحالات العالمية :**`)
          .setColor('#5780cd')
          .setThumbnail('https://a.top4top.io/p_1739ulfb41.png')
          .addField(`> **${e.statistic}・جميع الحالات :**`, data.cases, true)
          .addField(`> **${e.death}・جميع الوفيات :**`, data.deaths, true)
          .addField(`> **${e.up}・الحالات المستردة :**`, data.recovered, true)
          .addField(`> **${e.today}・حالات اليوم :**`, data.todayCases, true)
          .addField(`> **${e.error}・وفيات اليوم :**`, data.todayDeaths, true)
          .addField(`> **${e.active}・الحالات النشطة :**`, data.active, true)
          .setFooter(`© ${message.guild.me.displayName}`, client.user.displayAvatarURL());

      
        return message.channel.send(embed);
      }).catch(err => console.log(err));
      
      
    } else if (args[0] === "state"){

      

      if(!args[1]){
          return message.channel.send(`> **${e.error} - ${message.author} , You have to enter a state to search for!**`);
      } else{

        let state = args.slice(1).join(' ');


        await api.states({state: state}).then((data) => {
          if(data.state === undefined) return message.channel.send(`> **${e.error} - ${message.author} , I can't find the state, Are you sure that state exists?**`);

/*           let embed = new MessageEmbed()
            .setTitle(`> **${e.info} - ${data.state} :**`)
            .setColor('#5780cd')
	          .setThumbnail('https://a.top4top.io/p_1739ulfb41.png')
            .addField(`> **${e.statistic}・Total Cases :**`, data.cases, true)
            .addField(`> **${e.death}・Total Deaths :**`, data.deaths, true)
            .addField(`> **${e.today}・Today's Cases :**`, data.todayCases, true)
            .addField(`> **${e.error}・Today's Deaths :**`, data.todayDeaths, true)
            .addField(`> **${e.active}・Active Cases :**`, data.active, true)
            .setFooter(`© ${message.guild.me.displayName}`, client.user.displayAvatarURL()); */

          let embed = new MessageEmbed()
            .setTitle(`> **${e.info} - ${data.state} :**`)
            .setColor('#5780cd')
	          .setThumbnail('https://a.top4top.io/p_1739ulfb41.png')
            .addField(`> **${e.statistic}・جميع الحالات :**`, data.cases, true)
            .addField(`> **${e.death}・جميع الوفيات :**`, data.deaths, true)
            .addField(`> **${e.today}・حالات اليوم :**`, data.todayCases, true)
            .addField(`> **${e.error}・وفيات اليوم :**`, data.todayDeaths, true)
            .addField(`> **${e.active}・الحالات النشطة :**`, data.active, true)
            .setFooter(`© ${message.guild.me.displayName}`, client.user.displayAvatarURL());
          
          return message.channel.send(embed);
        }).catch(err => console.log(err));
      }
    } else{

      

      let country = args.slice(0).join(' ');


      await api.countries({country: country}).then((data) => {
        if(data.country === undefined) return message.channel.send(`> **${e.error} - ${message.author} , I can't find the state, Are you sure that country exists?**`);
       
 /*       let embed = new MessageEmbed()
          .setTitle(`> **${e.info} - ${data.country} :**`)
          .setColor('#5780cd')
	        .setThumbnail('https://a.top4top.io/p_1739ulfb41.png')
          .addField(`> **${e.statistic}・Total Cases :**`, data.cases, true)
          .addField(`> **${e.death}・Total Deaths :**`, data.deaths, true)
          .addField(`> **${e.up}・Total Recovered :**`, data.recovered, true)
          .addField(`> **${e.today}・Today's Cases :**`, data.todayCases, true)
          .addField(`> **${e.error}・Today's Deaths :**`, data.todayDeaths, true)
          .addField(`> **${e.active}・Active Cases :**`, data.active, true)
					.setTimestamp()
          .setFooter(`© ${message.guild.me.displayName}`, client.user.displayAvatarURL());*/

        let embed = new MessageEmbed()
          .setTitle(`> **${e.info} - ${data.country} :**`)
          .setColor('#5780cd')
	        .setThumbnail('https://a.top4top.io/p_1739ulfb41.png')
          .addField(`> **${e.statistic}・جميع الحالات :**`, data.cases, true)
          .addField(`> **${e.death}・إجمالي الوفيات :**`, data.deaths, true)
          .addField(`> **${e.up}・الحالات المستردة :**`, data.recovered, true)
          .addField(`> **${e.today}・حالات اليوم :**`, data.todayCases, true)
          .addField(`> **${e.error}・وفيات اليوم :**`, data.todayDeaths, true)
          .addField(`> **${e.active}・الحالات النشطة :**`, data.active, true)
          .setFooter(`© ${message.guild.me.displayName}`, client.user.displayAvatarURL());
            
        return message.channel.send(embed);
      }).catch(err => console.log(err));
    }
  }
}