'use strict';

import { CLOSE_ALERT } from '../actions/alerts';
import { UPLOAD_STOCK_FAILURE, BUY_STOCK_FAILURE, SELL_STOCK_FAILURE } from '../actions/transaction';
import { GET_STOCKS_FAILURE } from '../actions/user';
import { ADD_STOCK_FAILURE, ADD_STOCK_HISTORY_FAILURE } from '../actions/stock';
import { ADD_EVENT_FAILURE, GET_EVENTS_FAILURE, REMOVE_EVENT_FAILURE } from '../actions/calendar';

export default function alerts(state=null, action) {
  switch(action.type) {
    case ADD_STOCK_FAILURE:
    case ADD_STOCK_HISTORY_FAILURE:
    case UPLOAD_STOCK_FAILURE:
    case ADD_EVENT_FAILURE:
    case GET_EVENTS_FAILURE:
    case REMOVE_EVENT_FAILURE:
    case GET_STOCKS_FAILURE:
    case BUY_STOCK_FAILURE:
    case SELL_STOCK_FAILURE:
      return action.err;
    case CLOSE_ALERT:
      return null;
    default:
      return state;
  }
}
