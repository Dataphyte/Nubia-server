import preRoute from './middlewares/pre-route.middleware';
import express, { Express } from 'express';

const app: Express = express();

preRoute(app);

app.listen(8080, () => console.log('⚡[server]: Server started...'));
