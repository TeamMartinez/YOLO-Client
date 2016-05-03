'use strict';

import { CLOSE_ALERT } from '../actions/alerts';
import { UPLOAD_STOCK_FAILURE } from '../actions/transaction';
import { ADD_STOCK_FAILURE, ADD_STOCK_HISTORY_FAILURE } from '../actions/stock';
import { ADD_EVENT_FAILURE, REMOVE_EVENT_FAILURE } from '../actions/calendar';

export default function alerts(state=null, action) {
  switch(action.type) {
    case ADD_STOCK_FAILURE:
    case ADD_STOCK_HISTORY_FAILURE:
    case UPLOAD_STOCK_FAILURE:
    case ADD_EVENT_FAILURE:
    case REMOVE_EVENT_FAILURE:
      return action.err;
    case CLOSE_ALERT:
      return null;
    default:
      return state;
  }
}
