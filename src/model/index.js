import config from '../config';

const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.SQL_DBNAME, config.SQL_DBUSER, config.SQL_DBPASS, {
  host: config.SQL_DBHOST,
  dialect: config.SQL_DBDIALECT,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // SQLite only
  storage: 'database.sqlite',

  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});

import makeUser from './user';

const User = makeUser(sequelize);

sequelize.sync();


export {
  sequelize,
  User
}
