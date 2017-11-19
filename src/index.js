import * as resolvers from './resolvers';
import loadSchema from './schema';


import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress} from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';


const s = loadSchema();

const SchemaDefinition = `
  schema {
    query: RootQuery
    mutation: RootMutation
  }
`;


const schema = makeExecutableSchema({
  typeDefs: [
    ...s.types,
    s.RootQuery,
    s.RootMutation,
    SchemaDefinition
  ],
  // we could also concatenate arrays
  // typeDefs: [SchemaDefinition, RootQuery].concat(Post)
  resolvers: resolvers,
});

const PORT = 3000;
var app = express();
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

app.listen(PORT);

console.log("Serving on Port 3000");
