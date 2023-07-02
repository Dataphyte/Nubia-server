import env from '../config/env.config.js';
import { Request, Response, NextFunction } from 'express';
import {
  GetUserCommand,
  GetUserCommandInput,
} from '@aws-sdk/client-cognito-identity-provider';
import { cognito_service_commander, responder } from '../utils/responder.js';
import {
  CustomRequestInterface,
  CustomResponseInterface,
} from '../typescript/interfaces/customResponse.interface.js';

class AuthMiddleware {
  /**
   * Gets the bearer token from the header of the req object
   *
   * @param {object} req - Express request object
   * @param {object} res - Express request object
   * @returns Bearer token for use
   */
  static #getTokem(
    req: CustomRequestInterface,
    res: CustomResponseInterface
  ): string | void {
    // -- get auth header -->
    const authHeader = req.headers['authorization'];

    // -- check if token exists -->
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return responder(res, 403, 'error', 'Unauthorized Access!!');
    }

    // -- extract token from header -->
    const token = authHeader.split(' ')[1];

    return token;
  }

  /**
   * Auth method for users
   * @method
   *
   * @param {*} req - Express request object
   * @param {object} res - Express response object
   * @param {function} next - Express next function (callable)
   * @returns void
   */
  async USER(
    req: CustomRequestInterface,
    res: CustomResponseInterface,
    next: NextFunction
  ) {
    // ======= Get token -->
    const token = AuthMiddleware.#getTokem(req, res);

    try {
      const params: GetUserCommandInput = { AccessToken: token as string };
      const command = new GetUserCommand(params); // get user with access token

      const response = await cognito_service_commander(command);
      if (response.error) return next(response.error);

      /*
    This is just to destructure the results from AWS into simpler readable content for controller
    */
      req.authData = {
        email: response.UserAttributes.filter(
          (item: any) => item.Name === 'email'
        )[0].Value,
        email_verified: response.UserAttributes.filter(
          (item: any) => item.Name === 'email_verified'
        )[0].Value,
        cognito_id: response.Username,
      };

      // -- call next middleware -->
      next();
    } catch (error) {
      next(error);
    }
  }

  /**
   * Auth method for Admin
   * @method
   *
   * @param {*} req - Express request object
   * @param {object} res - Express response object
   * @param {function} next - Express next function (callable)
   * @returns void
   */
  async ADMIN(req: Request, res: Response, next: NextFunction) {
    // ======= Get token -->
    // const token = AuthMiddleware.#getTokem(req);
  }
}

export default new AuthMiddleware();
