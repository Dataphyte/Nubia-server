import CustomResponse from '../utils/customResponse.utils';
import { Express, Response, Request, NextFunction } from 'express';
import { CustomErrorInterface } from '../typescript/interfaces/customError.interface';

// ======= list of error types -->
const ErrorList = [
  'CastError',
  'JsonWebTokenError',
  'ValidationError',
  'SyntaxError',
  'MongooseError',
  'MongoError',
];

export default (app: Express) => {
  // ======= 404 NotFound -->
  app.use('*', (req: Request, res: Response) => {
    res.status(404).send(new CustomResponse('Route not found', null, false));
  });

  // ======= Error Routes -->
  app.use(
    (
      error: CustomErrorInterface,
      req: Request,
      res: Response,
      next: NextFunction
    ) => {
      if (error.name === 'CustomError') {
        return res
          .status(error.status)
          .send(new CustomResponse(error.message, null, false));
      }

      if (error.name === 'AuthError') {
        return res
          .status(error.status)
          .send(new CustomResponse(error.message, null, false));
      }

      if (error.name === 'MongoError') {
        return res
          .status(error.status)
          .send(new CustomResponse(error.message, null, false));
      }

      if (ErrorList.includes(error.name)) {
        return res
          .status(400)
          .send(new CustomResponse(error.message, null, false));
      }

      return res
        .status(500)
        .send(
          new CustomResponse(
            error.message || 'Internal server error',
            null,
            false
          )
        );
    }
  );

  return app;
};
