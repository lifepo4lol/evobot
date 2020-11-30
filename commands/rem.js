import Booru, { search, BooruError, sites } from 'booru'

module.exports = {
  //name: "rem",
 aliases: ["rem34"],
description: "estoi probando ok?",

async function booruSearch(site, tags, limit = 1, random = true) {
  const posts = await Booru.search(site, tags, {limit, random})

  return console.log(posts[0].fileUrl)
}
}
