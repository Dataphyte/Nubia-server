// -- used to send responses from api -->
import { CustomResponseInterface } from '../typescript/interfaces/customResponse.interface.js';

/**
 *
 * @param {CustomResponseInterface} res - Response Object
 * @param {number} status - Status of the request made to server
 * @param {('ok' | 'error')} state - String state of the request for direct access purposes
 * @param {string} message - Message describing the result of the request
 * @param {any} data - Data to be returned if any
 */
export const responder = (
  res: CustomResponseInterface,
  status: number,
  state: 'ok' | 'error',
  message: string = 'This is an unedited response',
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
