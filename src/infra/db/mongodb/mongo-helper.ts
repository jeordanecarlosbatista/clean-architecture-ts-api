import {
  connect, disconnect, Model,
} from 'mongoose';
import { collections } from './collections';

export const MongoHelper = {
  uri: null as any as string,

  async connect(uri: string): Promise<void> {
    this.uri = uri;
    await connect(uri);
  },

  async disconnect(): Promise<void> {
    await disconnect();
  },

  async getCollection(name: any): Promise<Model<any>> {
    return collections[name];
  },

  map: (data: any): any => {
    const { _id } = data;
    // eslint-disable-next-line no-underscore-dangle
    return { ...data._doc, id: _id.toHexString() };
  },

  mapCollection: (collection: any[]): any[] => collection.map((c) => MongoHelper.map(c)),
};
