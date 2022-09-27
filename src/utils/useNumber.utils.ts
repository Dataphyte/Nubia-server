/**
 *
 * Converts a comma separated string to number
 * @param {String} str - String to be converted to a number or 0 for wrong formats
 * @returns {Number} Number
 */
const useNumber = (str: String): Number | undefined => {
  const departed = str.split(',');
  const result: Number = parseInt(departed.join(''));

  if (typeof result !== 'number') return 0;
  if (typeof result === 'number') return result;
};

export default useNumber;
