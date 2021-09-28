import express from 'express';

const app = express();

app.get('/', (request, response) => {
  response.json({ msg: 'Hello World' });
});

app.listen(3333);
