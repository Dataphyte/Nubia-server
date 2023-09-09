import env from './config/env.config';
import express, { Express } from 'express';
import preRoute from './middlewares/pre-route.middleware';

const app: Express = express();

preRoute(app);

// ======= trust proxies ( to get IP addresses if needed) -->
app.set('trust proxy', true);

// prettier-ignore
app.listen(env.PORT|| process.env.PORT || 8080, () =>
  console.log(`⚡[server]: ${env.PORT}::Server started...`)
);
