// -- used to send responses from api -->
import { COGNITO_CLIENT } from './aws.js';
import { CustomResponseInterface } from '../typescript/interfaces/customResponse.interface.js';

/**
 *
 * @param {*} res - Response Object
 * @param {Number} status - Status of the request made to server
 * @param {('ok' | 'error')} state - String state of the request for direct access purposes
 * @param {String} message - Message describing the result of the request
 * @param {*} data - Data to be returned if any
 */
export const responder = (
  res: CustomResponseInterface,
  status: number,
  state: 'ok' | 'error',
  message = 'This is an unedited response',
  data?: any
) => {
  // -- if no response object was passed -->
  if (!res || typeof res === 'string' || typeof res === 'number')
    throw new Error(
      'Responder did not get any response object or got the wrong type'
    );

  res.status(status).json({
    state,
    message,
    data,
  });
};

/**
 * Takes a cognito command and runs the query
 *
 * @category AWS
 *
 * @param {{*}} command - A valid aws command instance
 * @returns
 * response - Unique uccess response or unified failed response
 */

// @ts-ignore
export const cognito_service_commander = async (command) => {
  const response = COGNITO_CLIENT.send(command)
    .then((response: any) => response)
    .catch((error: any) => ({ error }));

  return response;
};
