const db = require('./db')

//// Generic query resolvers
const Query = {
   greeting:() => {
      return "Greetings."
   }
   ,
   skills:() => {
      return db.skills.list()      
   }
   ,
   projects:() => {
      var projects = db.projects.list()
      console.log(projects);
      return projects;
   }
   ,
   projectByID:(root, args, context, info) => {
      console.log("args", args);
      return db.projects.get(args.id);
   }
   ,
   projectsBySkill:(root, args, context, info) => {
      return db.projects.list().filter(project => project.skills.includes(args.skill));
   }
}

//// Additional resolvers for Project type
const Project = {
   skills:(root, args, context, info) => {
      return db.skills.list().filter(skill => root.skills.includes(skill.id));      
   }
}
module.exports = {Query,Project}