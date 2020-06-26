
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

function populateArticles() {
  for(let i = 0; i < 10; i++){
    db.article.create({ 
      title: `incredible article ${i}`,
      content: `amazing content ${i}`,
      authorId: Math.floor(Math.random() * 4)   
    }).then( article => {
      console.log(article)
    })
  }
}

//populateArticles(); 

let firstNames = ['Bob', 'Sally', 'Toby']
let lastNames = ['Gross', 'Steve-o', 'Roboman']
let bios = ['my dogs iq is easily 250', 'i am just here for the free donuts', 'i am litereally a robot beep beep boop boop']

function populateAuthors(){
  for(let i = 0; i < 3; i++){
    db.author.create({ 
      title: firstNames[i],
      lastName: lastNames[i],
      bio: bios[i]  
    }).then( article => {
      console.log(article)
    })
  }
}

//populateAuthors();

db.comment.create({
  name: 'A magic talking dog',
  content: 'woof lmao jk i can talk',
  articleId: 1
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
