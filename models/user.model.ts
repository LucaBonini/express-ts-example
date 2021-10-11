import { IsEmail, MinLength } from "class-validator";
import mongoose from "mongoose";

export class User {

  // @IsEmail()
  // email: string
  username: string

  @MinLength(6)
  password: string

  salt: string
}

export type UserDocumennt = User & mongoose.Document