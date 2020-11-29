const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "remove",
  aliases: ["rm -rf /"],
  description: "mata musica",
  execute(message, args) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send("no ai musica en la fila").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (!args.length) return message.reply(`se usa ${message.client.prefix}remove <Queue Number>`);
    if (isNaN(args[0])) return message.reply(`se usa ${message.client.prefix}remove <Queue Number>`);

    const song = queue.songs.splice(args[0] - 1, 1);
    queue.textChannel.send(`${message.author} mato **${song[0].title}** de la fila aora vas a prision por omisidio`);
  }
};
