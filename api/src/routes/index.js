/**
 * File: src/routes/index.js
 * Description: Define root route/path
 * Date: 15/Jul/2022
 * Author: Surjith S K
 */

 const express = require('express');

 const router = express.Router();
 
 router.get('/api', (req, res) => {
   res.status(200).send({
     success: 'true',
     message: 'Welcome to Zauba Companies api services',
     version: '1.0.0',
   });
 });
 
 module.exports = router;