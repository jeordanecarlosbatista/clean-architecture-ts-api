import express from 'express';
import '@controllers/UserController';

const app = express();

app.get('/', (request, response) => {
  response.json({ msg: 'Hello World' });
});

app.listen(3333);
