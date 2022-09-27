import CustomResponse from '../utils/customResponse.utils';
import { Express, Request, NextFunction, Router } from 'express';
import { CustomResponseInterface } from '../typescript/interfaces/customResponse.interface';

/**
 *
 * Wrapper function for routes to set Pre-defined response methods
 * @param {Router} Route - Root route to use the Response middleware
 * @returns List of pre-defined response methods to be used in query response. theses are passed on to the next middleware/controller by calling next()
 *
 * @category Middlewares
 *
 * @property {Method} success - Method for undefined queries
 * @property {Method} created - Response for create queries
 * @property {Method} found - Method for find/get queries
 * @property {Method} updated - Method for update queries
 * @property {Method} deleted - Method for delete queries
 *
 * @example <caption>Using the middleware on a route</caption>
 * // Import middleware into route or root route
 * const Response = require('path/to/middleware')
 * const {Router} = require('express')
 *
 * // set route
 * const AppRoute = Router()
 * // wrap route at top level with Response middleware
 * Response(AppRoute)
 * // Apply other routes or middlewares below
 *
 * @example <caption>Using the methods to return response data inside a middleware or controller</caption>
 * // there is no need for imports as the methods are added to the res object
 * async GET_USER(req, res) {
 * const queryData = await user_service.GET_USER()
 * res.found(queryData, 'All Users')
 * }
 *
 * @class
 */
const Response = (Route: Router) => {
  if (!Route)
    return console.warn(
      'Response Middleware requires 1 parameter(Route) but got nothing'
    );

  Route.use(
    (req: Request, res: CustomResponseInterface, next: NextFunction) => {
      // ======= success response -->
      res.success = (data: any, target: string) => {
        // prettier-ignore
        return res
              .status(200)
              .json(new CustomResponse(target ? `${target} [successful]`:'Success' , data, true));
      };
      // ======= created response -->
      res.created = (data: any, target: string) => {
        //   prettier-ignore
        return res
            .status(201)
            .json(new CustomResponse(target? `${target} [created]`:'Created', data, true))
      };

      // ======= found response -->
      res.found = (data: any, target: string) => {
        //   prettier-ignore
        return res
          .status(200)
          .json(new CustomResponse(target? `${target} [found]`:'Found', data, true))
      };

      // ======= Update response -->
      res.updated = (data: any, target: string) => {
        return res
          .status(202)
          .json(
            new CustomResponse(
              target ? `${target} [updated]` : 'updated',
              data,
              true
            )
          );
      };

      // ======= Delete response -->
      res.deleted = (data: any, target: string) => {
        return res
          .status(200)
          .json(
            new CustomResponse(
              target ? `${target} [deleted]` : 'deleted',
              data,
              false
            )
          );
      };
      next();
    }
  );
};

export default Response;
