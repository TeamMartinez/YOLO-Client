'use strict';

import {
  BUY_STOCK_SUCCESS,
  SELL_STOCK_SUCCESS,
  GET_STOCK_TRANSACTIONS_SUCCESS,
} from '../actions/transaction';

export default function transaction(state = [], action) {
  switch(action.type) {
    case BUY_STOCK_SUCCESS:
      return [
        action.transaction,
        ...state,
      ];
    case SELL_STOCK_SUCCESS:
      return [
        action.transaction,
        ...state,
      ];
    case GET_STOCK_TRANSACTIONS_SUCCESS:
      return action.transactions;
    default:
      return state;
  }
}
