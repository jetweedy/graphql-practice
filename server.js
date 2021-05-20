
require('dotenv').config()

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const db = require('./db');
const path = require('path');

const port = process.env.PORT || 4000;
const app = express();

const fs = require('fs')
const typeDefs = fs.readFileSync('./schema.graphql',{encoding:'utf-8'})
const resolvers = require('./resolvers')

const {makeExecutableSchema} = require('graphql-tools')
const schema = makeExecutableSchema({typeDefs, resolvers})

app.use(cors(), bodyParser.json());

const  {graphiqlExpress,graphqlExpress} = require('apollo-server-express')
app.use('/graphql',graphqlExpress({schema}))
app.use('/graphiql',graphiqlExpress({endpointURL:'/graphql'}))
app.use('/public', express.static('public'));

app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, 'public/index.html'));
})


app.listen(
   port, () => console.info(
      `Server started on port ${port}`
   )
);