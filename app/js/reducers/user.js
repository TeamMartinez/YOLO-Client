'user strict';

import { GET_STOCKS_SUCCESS } from '../actions/user';
import { BUY_STOCK_SUCCESS, SELL_STOCK_SUCCESS } from '../actions/transaction';

const initState = {
  amount: 1000,
  stocks: [],
}

function amount(state, action) {
  switch(action.type) {
    case BUY_STOCK_SUCCESS:
    case SELL_STOCK_SUCCESS:
      return action.money;
    default:
      return state;
  }
}

function stocks(state, action) {
  switch(action.type) {
    case GET_STOCKS_SUCCESS:
      return action.stocks;
    default:
      return state;
  }
}

export default function user(state = initState, action) {
  return {
    amount: amount(state.amount, action),
    stocks: stocks(state.stocks, action),
  }
}
