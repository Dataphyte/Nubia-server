import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { Express } from 'express';
import express from 'express';
import AppRouter from '../routes/router';
import ErrorMiddleware from './Error.middleware';

/**
 *
 * Adds all middleware to the
 * @category Middlewares
 * @param {Express} app - Express App instance
 *
 * @returns {void}
 */
const preRoute = (app: Express): void => {
  !app &&
    console.warn(
      '[⚠️warn]: pre-route middleware expected an app instance but got nothing'
    );

  // prettier-ignore
  app &&
    app
      .use(cors())
      .use(helmet())
      .use(express.json())
      .use(morgan('[:method - :status] :url :response-time ms'))
      .use(AppRouter)

  // Add error middleware
  app && ErrorMiddleware(app);
};

export default preRoute;
