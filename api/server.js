/**
 * File: server.js
 * Description: Initialise the app
 * Date: 15/Jul/2022
 * Author: Surjith S K
 */

 const app = require('./src/app');

 const port = process.env.PORT ||  4000; 
 
 app.listen(port, () => {
   console.log('Application is running at ', port);
 });