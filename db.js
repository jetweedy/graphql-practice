const { DataStore } = require('notarealdb');

const store = new DataStore('./data');

module.exports = {
   skills:store.collection('skills'),
   projects:store.collection('projects'),
   students:store.collection('students'),
   colleges:store.collection('colleges')
};