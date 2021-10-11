import { Model, model, Schema } from 'mongoose';

const schema = new Schema({
  name: String, email: String, password: String, accessToken: String, role: String,
});

export const accountCollection: Model<any> = model('accounts', schema);
