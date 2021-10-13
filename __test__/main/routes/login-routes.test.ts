import { hash } from 'bcrypt';
import { Express } from 'express';
import { setupApp } from '@main/config/app';
import { MongoHelper } from '@infra/db';
import env from '@main/config/env';
import request = require('supertest');

let accountCollection: any;
let app: Express;

describe('Login Routes', () => {
  beforeAll(async () => {
    app = await setupApp();
    await MongoHelper.connect(env.mongoUrl);
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  beforeEach(async () => {
    accountCollection = await MongoHelper.getCollection('accounts');
    await accountCollection.deleteMany({});
  });

  describe('POST /signup', () => {
    test('Should return 200 on signup', async () => {
      await request(app)
        .post('/api/signup')
        .send({
          name: 'Jeordane',
          email: 'jeordane.batista@gmail.com',
          password: '123',
          passwordConfirmation: '123',
        })
        .expect(201);
      await request(app)
        .post('/api/signup')
        .send({
          name: 'Jeordane',
          email: 'jeordane.batista@gmail.com',
          password: '123',
          passwordConfirmation: '123',
        })
        .expect(403);
    });
  });

  describe('POST /login', () => {
    test('Should return 200 on login', async () => {
      const password = await hash('123', 12);
      await accountCollection.create({
        name: 'Jeordane',
        email: 'jeordane.batista@gmail.com',
        password,
      });
      await request(app)
        .post('/api/login')
        .send({
          email: 'jeordane.batista@gmail.com',
          password: '123',
        })
        .expect(200);
    });

    test('Should return 401 on login', async () => {
      await request(app)
        .post('/api/login')
        .send({
          email: 'jeordane.batista@gmail.com',
          password: '123',
        })
        .expect(401);
    });
  });
});
