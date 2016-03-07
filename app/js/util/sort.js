'use strict';

import moment from 'moment';

export function compareEvent(a, b) {
  let moment_a = moment(a.start_time, moment.ISO_8601);
  let moment_b = moment(b.start_time, moment.ISO_8601);
  if(moment_a.unix() < moment_b.unix()){
    return -1;
  }else if(moment_a.unix() > moment_b.unix()){
    return 1;
  }
  return 0;
}
