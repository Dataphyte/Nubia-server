
import { Request, Response } from 'express';

// predefined methods added to the response object
export interface CustomResponseInterface extends Response {
  success?: any;
  created?: any;
  found?: any;
  updated?: any;
  deleted?: any;
}

export interface CustomRequestInterface extends Request {
  authData?: {
    email: string;
    email_verified: boolean;
    cognito_id: string;
  };
}
