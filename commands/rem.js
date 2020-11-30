const Booru = require('booru')

module.exports = {
  //name: "rem",
 aliases: ["rem34"],
description: "estoi probando ok?",
}
Booru.search('gelbooru', ['rem_(re:zero)'], { limit: 3, random: true })
 .then(posts => {
   for (let post of posts)
   console.log(post.fileUrl, post.postView)
})
