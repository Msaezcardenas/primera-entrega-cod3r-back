import mongoose, { Schema } from 'mongoose';

const userCollection = 'users';

const userSchema = new Schema({
  first_name: {
    type: String,
    require: true,
  },
  last_name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  age: {
    type: Number,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  cart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'carts',
  },
  role: {
    type: String,
    default: 'user',
  },
});

export const UserModel = mongoose.model(userCollection, userSchema);
