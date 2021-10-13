import { Express } from 'express';
import request = require('supertest');
import { setupApp } from '@main/config/app';

let app: Express;

describe('Body Parser Middleware', () => {
  beforeAll(async () => {
    app = await setupApp();
  });

  test('Should parse body as json', async () => {
    app.post('/test_body_parser', (req, res) => {
      res.send(req.body);
    });
    await request(app)
      .post('/test_body_parser')
      .send({ name: 'Rodrigo' })
      .expect({ name: 'Rodrigo' });
  });
});
