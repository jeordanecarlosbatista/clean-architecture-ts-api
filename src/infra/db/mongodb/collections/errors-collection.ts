import { Model, model, Schema } from 'mongoose';

export const errorCollection: Model<any> = model('errors', new Schema({ date: Date, stack: String }));
