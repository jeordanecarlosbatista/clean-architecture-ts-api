import express, { Express } from 'express';
import setupSwagger from '@main/config/swagger';

export const setupApp = async (): Promise<Express> => {
  const app = express();
  setupSwagger(app);

  return app;
};
