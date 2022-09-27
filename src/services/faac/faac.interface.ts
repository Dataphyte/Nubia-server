export interface FAAC {
  rank: Number;
  state: String;
  no_of_lgc: Number;
  // sum_of_lgc: Number;
  population: Number;
  difference: Number;
  state_value: Number;
  state_total: Number;
  prev_month: String;
  faac_per_capita: Number;
  prev_state_value: Number;
  prev_state_total: Number;
}

export interface FAAC_LGC extends FAAC {
  month: String;
  lgc_name: String;
  lgc_value: Number;
}
