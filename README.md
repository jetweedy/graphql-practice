# graphql-practice
GraphQL Practice

## Installation and Setup

```
cd graphql-practice
npm install
npm start
```

## Sample GraphiQL Code

```javascript
{  
   studentById(id:"S1001") {
      id
      firstName
      lastName
   }
}
```

```javascript
{  
   students {
      id
      firstName
      lastName
   }
}
```

## Sample GET urls:

```
http://localhost:4000/graphql?query={students{id firstName lastName}}

http://localhost:4000/graphql?query={ studentById(id:%22S1001%22) { id firstName lastName } }
```