const Sequelize = require('sequelize');

export default function(sequelize) {
  const User = sequelize.define('user', {
    id: { type: Sequelize.STRING, primaryKey: true },
    accessToken: Sequelize.STRING,
    refreshToken: Sequelize.STRING,
    profile: Sequelize.STRING,
  });

  return User;
}
