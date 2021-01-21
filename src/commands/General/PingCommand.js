const BaseCommand = require('../../utils/structures/BaseCommand');
const emojis = require("../../../emojis.json");
let e = emojis;

module.exports = class PingCommand extends BaseCommand {
  constructor() {
    super('ping', 'General', ['lag', 'latency'], 'ping', 'Knowing the connection speed of the bot');
  }

  run(client, message, args) {

    message.channel.send(`> **${e.error} - ${message.author} , Measuring ping in progress ... be patient !**`).then(m => {
      let ping = m.createdTimestamp - message.createdTimestamp; 


      m.edit(`> **${e.ping} - Bot latency: \`${ping}\` ms, API latency: \`${Math.round(client.ws.ping)}\` ms**`);
    });
  }
}