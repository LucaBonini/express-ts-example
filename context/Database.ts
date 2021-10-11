import { ProvideAsSingleton } from "./Ioc";
import mongoose from 'mongoose'

@ProvideAsSingleton(Database)
export class Database {
  private isConnected = false
  private internalConnection: mongoose.Connection

  get connection() {
    return this.internalConnection
  }

  public async init() {
    return new Promise<void>((resolve, reject) => {
      try {
        this.internalConnection = mongoose.createConnection('mongodb://localhost:27017/test')

        this.internalConnection.on('open', () => {
          console.log('database inizialized')
          this.isConnected = true
          resolve()
        })

        this.internalConnection.on('error', (error) => {
          console.log('database ERROR', error)
          if (!this.isConnected) {
            reject(error)
          }
        })

        console.log('DATABASE OK')
      } catch (error) {
        reject(error)
      }
    })
  }
}