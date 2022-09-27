import cors from 'cors';
import morgan from 'morgan';
import { Express } from 'express';
import helmet from 'helmet';
import AppRoutes from '../routes/router';

export default (app: Express): void => {
  !app &&
    console.warn(
      'WARN: There is no app instace passed to pre-route middleware '
    );

  // prettier-ignore
  app &&
    app
      .use(cors())
      .use(helmet())
      .use(morgan('[:method - :status] :url :response-time ms'))
      .use(AppRoutes);
};
