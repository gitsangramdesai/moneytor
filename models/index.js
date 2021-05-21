const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});



const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.persons = require("./person.model.js")(sequelize, Sequelize);
db.addresses = require("./address.model.js")(sequelize, Sequelize);
db.phones = require("./phone.model.js")(sequelize, Sequelize);
db.emails = require("./email.model.js")(sequelize, Sequelize);

//foreign key
db.persons.hasMany(db.addresses, {
  foreignKey: 'person_id'
});
db.addresses.belongsTo(db.persons);

db.persons.hasMany(db.phones, {
  foreignKey: 'person_id'
});
db.phones.belongsTo(db.persons);

db.persons.hasMany(db.emails, {
  foreignKey: 'person_id'
});
db.emails.belongsTo(db.persons);

module.exports = db;
