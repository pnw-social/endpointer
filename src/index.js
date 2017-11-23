import passport from 'passport';
const OAuth2Strategy = require('passport-oauth2');
const OAuth2RefreshTokenStrategy = require('passport-oauth2-middleware').Strategy;
import express from 'express';
const session = require("express-session");
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress} from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import config from './config';
import resolvers from './resolvers';
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


const refreshStrategy = new OAuth2RefreshTokenStrategy({
  refreshWindow: 10, // Time in seconds to perform a token refresh before it expires
  userProperty: 'ticket', // Active user property name to store OAuth tokens
  authenticationURL: '/auth/provider', // URL to redirect unathorized users to
  callbackParameter: 'callback' //URL query parameter name to pass a return URL
});
passport.use('main', refreshStrategy);

const oauthStartegy = new OAuth2Strategy({
    authorizationURL: `${config.MASTODON_DOMAIN}/oauth/authorize`,
    tokenURL: `${config.MASTODON_DOMAIN}/oauth/token`,
    clientID: config.OAUTH_KEY,
    clientSecret: config.OAUTH_SECRET,
    callbackURL: `${config.DOMAIN}/auth/provider/callback`,
    passReqToCallback: false 
  }, 
  refreshStrategy.getOAuth2StrategyCallback()
);

passport.use('provider', oauthStartegy);
refreshStrategy.useOAuth2Strategy(oauthStartegy); 


//
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

app.use(session({ secret: "cats" }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/provider', passport.authenticate('provider', { scope: ['read', 'write', 'follow'] }));
app.get('/auth/provider/callback', passport.authenticate('provider'), function(req, res) {
  res.redirect('/graphiql');
});


app.use('/graphql', passport.authenticate('main'), bodyParser.json(), 
  graphqlExpress((req, res)=> {
    return { 
      schema,
      context: req.user
    }
  })
);

app.use('/graphiql', passport.authenticate('main'),
  graphiqlExpress({
  endpointURL: '/graphql',
  passHeader: "'Clark': 'bar'"
}));

app.listen(PORT);

console.log("Serving on Port 3000");
