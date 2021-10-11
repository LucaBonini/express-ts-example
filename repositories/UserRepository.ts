import { Database } from "../context/Database";
import { Inject, ProvideAsSingleton } from "../context/Ioc";
import { UserDocumennt } from "../models/user.model";
import { Repository } from "./Repository";
import mongoose from 'mongoose'

@ProvideAsSingleton(UserRepository)
export class UserRepository extends Repository<UserDocumennt> {
  constructor(
    @Inject(Database) database: Database
  ){
    super()

    this.connection = database.connection
    this.model = this.getModel()
  }

  protected getModel() {
    const userSchema: mongoose.Schema = new mongoose.Schema({
      username: {
        type: 'string',
        required: true
      },
      password: {
        type: 'string',
        required: true
      },

      salt: {
        type: 'string',
        required: true
      }
    })

    return this.connection.model('User', userSchema) as mongoose.Model<UserDocumennt>;
  }

  public async getAll() {
    return this.model.find().exec()
  }

}