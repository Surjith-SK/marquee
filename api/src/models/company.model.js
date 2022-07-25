/**
 * File: src/models/company.models.js
 * Description: Schema for Company.
 * Date: 15/Jul/2022
 * Author: Surjith S K
 */
module.exports = (sequelize, Sequelize) => {
    const Company = sequelize.define("Company", {
      company_id: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      company_name: {
        type: Sequelize.STRING
      },
      
    });
    return Company;
  };