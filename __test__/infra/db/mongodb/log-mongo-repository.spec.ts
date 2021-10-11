import faker from 'faker';
import { LogMongoRepository, MongoHelper } from '@infra/db';
import env from '@main/config/env';

const makeSut = (): LogMongoRepository => new LogMongoRepository();

let errorCollection: any;

describe('LogMongoRepository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(env.mongoUrl);
  });

  afterAll(async () => {
    await errorCollection.deleteMany({});
    await MongoHelper.disconnect();
  });

  beforeEach(async () => {
    errorCollection = await MongoHelper.getCollection('errors');
    await errorCollection.deleteMany({});
  });

  test('Should create an error log on success', async () => {
    const sut = makeSut();
    await sut.logError(faker.random.words());
    const count = await errorCollection.countDocuments();
    expect(count).toBe(1);
  });
});
