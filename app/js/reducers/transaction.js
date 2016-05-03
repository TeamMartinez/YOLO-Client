'use strict';

import { UPLOAD_STOCK_SUCCESS } from '../actions/transaction';

export default function transaction(state = {}, action) {
  switch(action.type) {
    case UPLOAD_STOCK_SUCCESS:
      return Object.assign({}, state, update);
    default:
      return state;
  }
}
