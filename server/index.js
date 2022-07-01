const express = require('express');
const colors = require('colors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');

const connectDB = require('./config/db');
const schema = require('./schema/schema');

const port = process.env.PORT || 3000;
const app = express();

// Connect to MongoDB
connectDB();


app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV === 'development'
}));

app.listen(port, () => console.log(`Server is running on port ${port}`));