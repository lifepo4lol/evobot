const { MessageEmbed } = require("discord.js");
const Booru = require('booru');
const Booru = require('./dist')
const { BooruError, sites } = require('./dist')

module.exports = {
  name: "rem",
  aliases: ["rem34"],
  description: "no funsionar por aora pero despues funsionar xdd",
  //ase la vuscasion
  Booru.search('gelbooru', ['rem_(re:zero) '], { limit: 3, random: true })
  .then(posts => {
    for (let post of posts)
      console.log(post.fileUrl, post.postView)
      return message.reply("aca tene xdd **${post.fileUrl}** ").catch(console.error);
  })

};
