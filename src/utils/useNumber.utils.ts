/**
 *
 * Converts a comma separated string to number
 * @param {String} str - String to be converted to a number or 0 for wrong formats
 * @returns {Number} Number
 */
const useNumber = (str: string | number): number | undefined => {
  if (!str) return undefined;

  /* ====== if a number was passed as param */
  if (typeof str === 'number') return str;

  /* ====== if it is a string */
  if (typeof str === 'string') {
    const departed = str.split(',');
    const result: number = parseInt(departed.join(''));

    if (typeof result !== 'number') return 0;
    if (typeof result === 'number') return result;
  }
};

export default useNumber;
