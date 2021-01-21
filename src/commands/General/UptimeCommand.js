const BaseCommand = require('../../utils/structures/BaseCommand');
const ms = require('ms');
const emojis = require("../../../emojis.json");
let e = emojis;

module.exports = class UptimeCommand extends BaseCommand {
  constructor() {
    super('uptime', 'General', ['runtime'], 'uptime', '­');
  }

  run(client, message, args) {

    message.channel.send(`> **${e.online} - ${message.author} , I have been online for : \`${ms(client.uptime, { long: true })}\` .**`);
    }
  }