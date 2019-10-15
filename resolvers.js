const db = require('./db')
const Query = {
   test: () => 'Test Success, GraphQL server is up & running !!'
   ,
   greeting:() => {
      return "hello from  TutorialsPoint !!!"
   }
   ,
   students:() => {
	   return db.students.list()
   }
   ,
   studentById:(root,args,context,info) => {
      //args will contain parameter passed in query
      return db.students.get(args.id);
   }
}
module.exports = {Query}