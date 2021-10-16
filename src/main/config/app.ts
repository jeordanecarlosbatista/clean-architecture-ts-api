import express, { Express } from 'express';
import setupStaticFiles from '@main/config/static-files';
import setupSwagger from './swagger';
import setupRoutes from './routes';
import setupMiddlewares from './middlewares';

export const setupApp = async (): Promise<Express> => {
  const app = express();
  setupStaticFiles(app);
  setupSwagger(app);
  setupMiddlewares(app);
  setupRoutes(app);

  return app;
};
