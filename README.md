# GraphQL Practice

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

## See it in action:

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
