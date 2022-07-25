/**
 * File: src/routes/company.routes.js
 * Description: Path's for Company.
 * Date: 15/Jul/2022
 * Author: Surjith S K
 */

 const router = require('express-promise-router')();
 const companyController = require('../controllers/company.controller');
 
 // ==> Definition for routes of  - 'Company':
  // ==> Route path used to search company: (GET): localhost:3000/api/search-company
router.get('/search-company', companyController.searchCompany);
  // ==> Route path used to add company: (POST): localhost:3000/api/company
  router.post('/company', companyController.addCompany);
  // ==> Route path used to get all company: (GET): localhost:3000/api/company
  router.get('/company', companyController.listAllCompany);
 module.exports = router;