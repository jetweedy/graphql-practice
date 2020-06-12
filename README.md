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
http://localhost:4000/graphql?query={students{id firstName lastName}}

http://localhost:4000/graphql?query={ studentById(id:%22S1001%22) { id firstName lastName } }
```
