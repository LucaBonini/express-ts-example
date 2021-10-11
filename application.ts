import { Action, useExpressServer } from 'routing-controllers';
import * as http from 'http'
import "reflect-metadata";

import express from 'express';
import { Inject, Provide } from './context/Ioc';
import { Database } from './context/Database';

@Provide(Application)
export class Application {
  private app: Express.Application
  private server: http.Server

  constructor(
    @Inject(Database) private database: Database
  ){}

  private connectToDatabase() {

  }

  public async bootstrap() {
    console.log('Start to bootstrap server')

    this.app = express()
    this.server = http.createServer(this.app)
    useExpressServer(this.app, {
      // currentUserChecker: (action: Action) => {
      //   const token = action.request.headers['authorization'];
      //   if (!token) {
      //     return null
      //   }
      //   // do stuff with token

      // },
      // register created express server in routing-controllers
      controllers: [__dirname + '/controllers/*.js'], // and configure it the way you need (controllers, validation, etc.)
      development: process.env.NODE_ENV !== 'production',
      // authorizationChecker: async (action) => {}
      validation: true, // use class transformer to validate 
    });

    await this.database.init()
  }

  get applicationServer(): http.Server {
    return this.server
  }
}