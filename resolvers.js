const db = require('./db')
const Query = {
   test: () => 'Test Success, GraphQL server is up & running !!'
   ,
   greeting:() => {
      return "hello from  TutorialsPoint !!!"
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
      var projects = db.projects.list();
      var r = [];
      for (var p=0;p<projects.length;p++) {
         if (projects[p].skills.includes(args.skill)) {
            r.push(projects[p]);
         }
      }
      return r;
   }
}
module.exports = {Query}