import { Model } from 'mongoose';
import { accountCollection } from './account-collection';
import { errorCollection } from './errors-collection';

type tplotOptions = {
    [key: string]: Model<any>
}

export const collections: tplotOptions = {
  errors: errorCollection,
  accounts: accountCollection,
};
