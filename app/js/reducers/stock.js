'use strict';

import { ADD_STOCK_SUCCESS } from '../actions/stock';

export default function stock(state = {}, action) {
  switch(action.type){
    case ADD_STOCK_SUCCESS:
      var update = {
        [action.stock.symbol] : action.stock
      };
      return Object.assign({}, state, update);
    default:
      return state;
  }
}
