const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

console.log(dbConfig.DATABASEURL);
const sequelize = new Sequelize(dbConfig.DATABASEURL) 

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.company = require("./company.model.js")(sequelize, Sequelize);
module.exports = db;
