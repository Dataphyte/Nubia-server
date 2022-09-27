/**
 * Custom error OPbject
 *
 * @extends Error
 * @param {String} message - Error message
 * @param {Number} statusCode - State code of the request
 * @example <caption> Throwing custom errors</caption>
 * const CustomError = require('path/to/CustomError.js')
 *
 * // Something goes wrong
 * throw new CustomError('Something went wrong', 402)
 */
class CustomError extends Error {
  status: Number;
  constructor(message: string, statusCode?: Number) {
    super(message);
    this.name = this.constructor.name;
    this.status = statusCode || 400;
  }
}

export default CustomError;
