const Booru = require('./dist')
const { BooruError, sites } = require('./dist')
// for ES6:
// import Booru, { search, BooruError, sites } from 'booru'

const argTags = process.argv.slice(3)
const site = process.argv[2] || 'sb'
const tags = process.argv[2] ? argTags : ['cat']

// Search with promises
module.exports = {
  name: "rem",
  aliases: ["rem34"],
  description: "estoi probando ok?",
}
 execute(message) {
Booru.search(site, tags, { limit: 1, random: true })
  .then(posts => {
    if (posts.length === 0) {
      console.log('No images found.')
    }

    for (let post of posts) {
      console.log(post.fileUrl)
    }
  })
  .catch(err => {
    if (err instanceof BooruError) {
      // It's a custom error thrown by the package
      // Typically results from errors the boorus returns, eg. "too many tags"
      console.error(err)
    } else {
      // This means something pretty bad happened
      console.error(err)
    }
  })
}
