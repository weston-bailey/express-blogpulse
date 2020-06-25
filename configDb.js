
/*
Comment Data Model
---
name: string,
content: text,
article: integer

belongs to article, which can have many comments

sequelize model:create --name comment --attributes name:string,content:text,articleId:integer
*/

var db = require('./models')

db.comment.create({
  name: 'A magic talking dog',
  content: 'woof lmao jk i can talk',
  articleId: 2
})
.then(function(comment) {
  console.log(comment.get())
})


db.article.findOne({
  where: { id: 1 },
  include: [db.comment]
}).then(function(article) {
  // by using eager loading, the article model should have a comments key
  console.log(article.comments)
})
