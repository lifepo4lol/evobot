const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "volume",
  aliases: ["v"],
  description: "ase la camviasion de bolumen",
  execute(message, args) {
    const queue = message.client.queue.get(message.guild.id);

    if (!queue) return message.reply("no ai nada reprodusiendo pendejo").catch(console.error);
    if (!canModifyQueue(message.member))
      return message.reply("entra en un knal de bos primero pito").catch(console.error);

    if (!args[0]) return message.reply(`al bolume actual e **${queue.volume}%**`).catch(console.error);
    if (isNaN(args[0])) return message.reply("pone un numero pendejo").catch(console.error);
    if (Number(args[0]) > 100 || Number(args[0]) < 0 )
      return message.reply("pone un numero entre 0 a 100.").catch(console.error);

    queue.volume = args[0];
    queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);

    return queue.textChannel.send(`volume esta  **${args[0]}%**`).catch(console.error);
  }
};
