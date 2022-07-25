/**
 * File: app.js
 * Description: Define necessary imports in app
 * Date: 15/Jul/2022
 * Author: Surjith S K
 */

 const express = require('express');
 const cors = require('cors');

 const app = express();
 
 // ==> Rotas da API:
 const index = require('./routes/index');
 const companyRoute = require('./routes/company.routes');
 
 app.use(express.urlencoded({ extended: true }));
 app.use(express.json());
 app.use(express.json({ type: 'application/vnd.api+json' }));
 app.use(cors());
 const db = require("./models");

 db.sequelize.sync();
   app.use(index);
 app.use('/api/', companyRoute);
 
 module.exports = app;