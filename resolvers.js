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
      return projects;
   }
   ,
   projectByID:(root, args, context, info) => {
      return db.projects.get(args.id);
   }
   ,
   projectsBySkill:(root, args, context, info) => {
      return db.projects.list().filter(project => project.skills.includes(args.skill));
   }
}

//// Additional resolvers for Project type
const Project = {
   skillslist:(root, args, context, info) => {
      var skills = db.skills.list().filter(skill => root.skills.includes(skill.id));
//      console.log("skills", skills);
      var skillsArray = skills.map(function (el) { return el.name; });
      return skillsArray.join(" | ");
   }
   ,
   skills:(root, args, context, info) => {
      var skills = db.skills.list().filter(skill => root.skills.includes(skill.id));
      return skills;
   }
}
module.exports = {Query,Project}