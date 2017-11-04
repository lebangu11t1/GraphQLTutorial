import express from 'express';
// before adding graphql API
import graphqlHTTP from 'express-graphql';
// after adding graphql api
import mongoose from 'mongoose';

import cors from 'cors'

//Later
import schema from './graphql'
const app = express();

mongoose.connect('mongodb://root:root@ds241875.mlab.com:41875/graph-api');
const db = mongoose.connection;
db.on('error', () => console.log('Failed to connect to DB.'))
	.once('open', () => console.log('Connected to DB. '));

// use it before all route definitions
app.use(cors({origin: 'http://localhost:3001'}));

app.get('/', (req, res) => {
  res.send('Hello World..');
});

// GraphQL API
app.use('/graphql', graphqlHTTP(() => ({
  schema,
  graphiql: true,
  pretty: true
})));

app.listen(3000, () => {
  console.log('GraphQL server running at port 3000...')
});
