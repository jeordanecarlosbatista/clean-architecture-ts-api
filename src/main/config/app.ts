import express, { Express } from 'express';
import setupSwagger from './swagger';
import setupRoutes from './routes';
import setupMiddlewares from './middlewares';

export const setupApp = async (): Promise<Express> => {
  const app = express();
  setupSwagger(app);
  setupMiddlewares(app);
  setupRoutes(app);

  return app;
};
