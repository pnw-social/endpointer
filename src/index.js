import passport from 'passport';
const OAuth2Strategy = require('passport-oauth2');
import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress} from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import * as resolvers from './resolvers';
import loadSchema from './schema';

import {User} from './model';

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


passport.use('provider', new OAuth2Strategy({
    authorizationURL: 'https://pnw.social/oauth/authorize',
    tokenURL: 'https://pnw.social/oauth/token',
    clientID: "e",
    clientSecret: "",
    callbackURL: "http://localhost:3000/auth/provider/callback"
  },
  (accessToken, refreshToken, profile, done) => {
    console.log("ayyy");
    User.findOrCreate({
        where:  {id: profile.id},
        defaults: {id: profile.id, accessToken, refreshToken, profile: JSON.stringify(profile)}

      }).then((result) => {
        console.log(result);
        done(null, result[0]);
      }).catch((err) => {
        console.log(err);
        done(err, null);
      })
    }
));
//


app.get('/auth/provider', passport.authenticate('provider'));
app.get('/auth/provider/callback',
  passport.authenticate('provider', { successRedirect: '/graphql',
                                      failureRedirect: '/login' }));


app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

app.use('/graphiql', (req, res, next) => {
  console.log(req.headers);
  if(req.headers["Authorization"])
  {
    next();
  }
  else
  {
    res.redirect('/login');
    response.end();
  }
})
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
  passHeader: "'Authorization': 'Bearer lorem ipsum'"
}));

app.listen(PORT);

console.log("Serving on Port 3000");
