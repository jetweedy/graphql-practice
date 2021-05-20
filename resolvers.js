const db = require('./db')
const Query = {
   test: () => 'Test Successful'
   ,
   greeting:() => {
      return "Greetings."
   }
   ,
   skills:() => {
      return db.skills.list()      
   }
   ,
   projects:() => {
      return db.projects.list()
   }
   ,
   projectsBySkill:(root, args, context, info) => {
      return db.projects.list().filter(project => project.skills.includes(args.skill));
   }
}
module.exports = {Query}