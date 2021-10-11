import { Provide } from "../context/Ioc";
import mongoose from 'mongoose'

@Provide(Repository)
export abstract class Repository<TDocument extends mongoose.Document> {

  protected model: mongoose.Model<TDocument>
  protected connection: any

  public getById(id: string): Promise<TDocument | null> {
    return this.model.findById(id).exec()
  }

  public getPage(pageOffset: number, pageSize: number): Promise<TDocument[]> {
    return this.model
      .find()
      .skip(pageOffset)
      .limit(pageSize)
      .exec()
  }

  // add insert
}