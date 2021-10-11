import {
  AddAccountRepository,
  LoadAccountByEmailRepository,
  UpdateAccessTokenRepository,
  LoadAccountByTokenRepository,
  CheckAccountByEmailRepository,
} from '@data/protocols/db';
import { MongoHelper } from '@infra/db';

export class AccountMongoRepository implements AddAccountRepository,
LoadAccountByEmailRepository,
UpdateAccessTokenRepository,
LoadAccountByTokenRepository,
CheckAccountByEmailRepository {
  async add(data: AddAccountRepository.Params): Promise<AddAccountRepository.Result> {
    const accountCollection = await MongoHelper.getCollection('accounts');
    const result = await accountCollection.create(data);
    return result.insertedId !== null;
  }

  async loadByEmail(email: string): Promise<LoadAccountByEmailRepository.Result> {
    const accountCollection = await MongoHelper.getCollection('accounts');
    const account = await accountCollection.findOne({
      email,
    }).select({
      _id: 1,
      name: 1,
      password: 1,
    }).exec();
    return account && MongoHelper.map(account);
  }

  async checkByEmail(email: string): Promise<CheckAccountByEmailRepository.Result> {
    const accountCollection = await MongoHelper.getCollection('accounts');
    const account = await accountCollection.findOne({
      email,
    }).select({
      _id: 1,
    }).exec();
    return account !== null;
  }

  async updateAccessToken(id: string, token: string): Promise<void> {
    const accountCollection = await MongoHelper.getCollection('accounts');
    await accountCollection.updateOne({
      _id: id,
    }, {
      $set: {
        accessToken: token,
      },
    }).exec();
  }

  async loadByToken(token: string, role?: string): Promise<LoadAccountByTokenRepository.Result> {
    const accountCollection = await MongoHelper.getCollection('accounts');
    const account = await accountCollection.findOne({
      accessToken: token,
      $or: [{
        role,
      }, {
        role: 'admin',
      }],
    }).select({ _id: 1 }).exec();
    return account && MongoHelper.map(account);
  }
}
