const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "pause",
  description: "ase la pausasion",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("no hai nada reprodusiendo subnormal de mierda").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (queue.playing) {
      queue.playing = false;
      queue.connection.dispatcher.pause(true);
      return queue.textChannel.send(`${message.author} ese tipo pauso la musica`).catch(console.error);
    }
  }
};
