import fs from 'fs';
import csvParser from 'csv-parser';

/**
 * Custom function to parse csv files into arrays of Js Objects
 * @see
 *
 * @param {String} path - Path to the file to be parsed
 * @param {Function} loopCallback - callback function to execute on every data entry
 * @param {Function} endCallback - callback function to execute at the end of the parsing process
 * @returns any[]
 */
export const parser = async (
  path: string,
  loopCallback: Function | null = null,
  endCallback: Function | null = null
): Promise<any> => {
  return new Promise((resolve, reject) => {
    const result: any[] = [];
    const reader = fs.createReadStream(path);

    reader
      .pipe(csvParser())
      .on('data', (chunk) => {
        loopCallback && loopCallback(chunk);
        result.push(chunk);
      })
      .on('end', () => {
        endCallback && endCallback(result);
        resolve(result);
      });

    reader.on('error', (error) => reject(error));
  });
};
