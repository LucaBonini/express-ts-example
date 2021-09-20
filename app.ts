import { useContainer, useExpressServer } from 'routing-controllers';
import "reflect-metadata";

import express from 'express';
import { Container } from 'typedi';
useContainer(Container);

let app = express(); // your created express server
// app.use() // you can configure it the way you want
useExpressServer(app, {
  // register created express server in routing-controllers
  controllers: [__dirname + '/controllers/*.js'], // and configure it the way you need (controllers, validation, etc.)
  development: process.env.NODE_ENV !== 'production',
  // authorizationChecker: async (action) => {}
  validation: true, // use class transformer to validate 
});
app.listen(3000); // run your express server
console.log('started....')