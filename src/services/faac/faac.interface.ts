export interface FAAC {
  rank: number;
  state: string;
  no_of_lgc: number;
  lgc_data: FAAC_LGC[];
  prev_month: string;
  population: number;
  difference: number;
  state_value: number;
  state_total: number;
  faac_per_capita: number;
  prev_state_value: number;
  prev_state_total: number;
}

export interface FAAC_LGC {
  state: string;
  month: string;
  male_pop: string;
  lgc_name: string;
  district: string;
  lgc_value: number;
  land_size: string;
  population: number;
  female_pop: string;
}
