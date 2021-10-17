import { Express, Router } from 'express';
import { readdirSync } from 'fs';
import { join } from 'path';

export default async (app: Express): Promise<void> => {
  const router = Router();
  app.use('/api', router);

  const routes = readdirSync(join(__dirname, '../routes'));

  for (const file of routes) {
    if (!file.endsWith('.map')) {
      // eslint-disable-next-line no-await-in-loop
      (await import(`../routes/${file}`)).default(router);
    }
  }
};
