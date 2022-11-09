import rosae from 'rosaenlg';
import { FAAC, FAAC_LGC } from './faac.interface';
import useNumber from '../../utils/useNumber.utils';
import { parser } from '../../utils/parseCSV.util';

/**
 * FAAC service class
 * Handles all FAAC services
 * @category Services
 * @example <caption>Creating a new FAAC strory</caption>
 * // calling in user.controller.js
 * const faac_service = require('path/to/faac_service.js')
 *
 * const faacData = req.body
 * const newStory = await faac_service.CREATE(faacData)
 * res.status(201).send(newStory)
 */
class faac_service {
  async CREATE() {
    let templates: any[] = [];

    // ======= Get parsed state data -->
    const stateData: FAAC[] = await parser(
      './src/data/faac/faac-state-data.csv',
      this.setStateDifference
    );

    // ======= get oparsed lgc data -->
    const lgcData = await parser(
      './src/data/faac/faac-lgc-data.csv',
      this.setLgcDifference
    );

    stateData.forEach((stateData: FAAC) => {
      lgcData.forEach((lgcData: FAAC_LGC) => {
        stateData.state === lgcData.state && this.pushLGC(stateData, lgcData);
      });
      templates.push(
        rosae.renderFile('./src/static/templates/faac_state.pug', {
          language: 'en_US',
          stateData,
        })
      );
    });

    return templates;
  }

  /**
   * Sets the difference between current month value and last month value for state
   *
   * @param {{Any}} chunck - SIngle data entry from parsed csv files. This param is passed down from the parser function object
   * @returns difference between state total and  previous state total
   */
  setStateDifference(chunck: FAAC): void {
    console.log(chunck);
    chunck.difference =
      Number(useNumber(chunck.state_total)) -
      Number(useNumber(chunck.prev_state_total));

    // ======= Add up lgc data to main state faac object -->
    chunck.lgc_data = [];
  }

  /**
   * Sets the difference between current month value and last month value for LGC
   *
   * @param {{Any}} chunck - SIngle data entry from parsed csv files. This param is passed down from the parser function object
   * @returns difference between state total and  previous state total
   */
  setLgcDifference(chunck: FAAC_LGC): void {
    chunck.difference =
      Number(useNumber(chunck.current_month_lgc)) -
      Number(useNumber(chunck.prev_month_lgc));
  }

  /**
   * Adds the lgc data to the corresponding state data object
   *
   * @param {FAAC} stateData - The current state data to be edited (should be gotten from a loop)
   * @param {FAAC_LGC} lgc - The current lgc data to be added to the state data (should also be gotten from a loop)
   * @returns void
   */
  pushLGC(stateData: FAAC, lgc: FAAC_LGC) {
    return stateData && lgc && stateData.lgc_data?.push(lgc);
  }
}

export default new faac_service();
