const { MessageEmbed } = require("discord.js");
const Booru = require('booru');
const Booru = require('./dist')
const { BooruError, sites } = require('./dist')
const argTags = process.argv.slice(3)
const site = process.argv[2] || 'sb'
const tags = process.argv[2] ? argTags : ['rem_(re:zero)']'

module.exports = {
  name: "rem",
  aliases: ["rem34"],
  description: "no funsionar por aora pero despues funsionar xdd",
  //ase la vuscasion
Booru.search(site, tags, { limit: 1, random: false })
  .then(posts => {
    if (posts.length === 0) {
      console.log('No images found.')
    }

    for (let post of posts) {
      console.log(post.fileUrl)
    }
  })
};
