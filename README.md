# GraphQL Practice

I created a Projects and Skills API using GraphQL in order to learn a little bit about it. The project leverages the built-in 'notarealdb' in Node instead of using a real database, and then refers to JSON files for Projects and Skills data. Ajax requests and DOM manipulations are performed using jQuery and Vue.js.

## Installation and Setup

```
cd graphql-practice
npm install
npm start
```

You can now make requests to get data from the database by including JSON-formatted markup of the kind of data you'd like back, as well as the filters you'd like to use. See a couple of samples below:

## Sample GET urls:

```
http://localhost:4000/graphql?query={skills,{id,name,rating}}
http://localhost:4000/graphql?query={projectsBySkill(skill:"websockets"),{name}}
http://localhost:4000/graphql?query={projectsBySkill(skill:"node"),{name}}
http://localhost:4000/graphql?query={projectByID(id:%22nonnychat%22),{name,description,skills{name,rating}}}
```
## Using the GraphiQL Interface:

http://localhost:4000/graphiql

```
query {
  projectsBySkill(skill:"node") {
    name, description, skills {
      id
    }
  }
}
```

## See the API in action:

https://skillcharts.herokuapp.com/graphiql

```
query {
  projectsBySkill(skill:"node") {
    name, description, skills {
      id
    }
  }
}
```

## See the Website in action:

https://skillcharts.herokuapp.com/
