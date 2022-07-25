/**
 * File: src/config/db.config.js
 * Description: DB settings .
 * Date: 24/Jul/2022
 * Author: Surjith S K
 */

 const dotenv = require('dotenv');
 
 dotenv.config();
 
module.exports = {
  DATABASEURL: `${process.env.DATABASE_URL}`,
  DIALECT: `${process.env.DIALECT}`,
  HOST: `${process.env.HOST}`,
  USER: `${process.env.USER}`,
  PASSWORD: `${process.env.PASSWORD}`,
  DB: `${process.env.DATABASE}`,
      pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
}
