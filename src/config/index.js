/*
Merge keys from environment variables on top of  ```settings.json```
*/
import fs from 'fs';
import path from 'path';

let _default_config = {
    "DOMAIN": "http://localhost:3000", 
    "MASTODON_DOMAIN": "https://mastodon.social", /*https://yourmastodondomain.social*/
    "OAUTH_KEY": "", /*Your Mastodon App Key*/
    "OAUTH_SECRET": "", /*Your Mastodon App Secret*/
    "SQL_DBNAME": "endpointer", /*DB Name*/
    "SQL_DBUSER": "admin", /*DB Username*/
    "SQL_DBPASS": "password", /*DB Password*/
    "SQL_DBHOST": "localhost", /*DB Endpoint*/
    "SQL_DBDIALECT": "sqlite", /*One of 'mysql'|'sqlite'|'postgres'|'mssql',*/
}

let config = {}
config = Object.assign(config, _default_config)

// File based configuration
try
{
    const fname = process.env["ENDPOINTER_CONFIG"] || `${process.cwd()}/settings.json`;

    const s = fs.readFileSync(fname).toString();
    const fconfig = JSON.parse(s);
    config = Object.assign(config, fconfig);
}
catch(e)
{
    console.log(e)
    console.info("Configuring without a settings.json");
}

// Environment variable configuration
Object.keys(_default_config).map((e,i) => {
   config[e] = process.env[e] || config[e];
   return; 
});

export default config;