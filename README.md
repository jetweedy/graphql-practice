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
```

## Issues:

Why does this return nulls under the skills? It sees the relationship to *some* extent... it's bringing the right number back. (If I add a skill to a project, the number of listings changes, but they're still all null.)

```
http://localhost:4000/graphql?query={projects,{id,name,skills{name}}}
```
