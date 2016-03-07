import { ADD_STOCK_SUCCESS, ADD_STOCK_HISTORY_SUCCESS } from '../actions/stock';

export default function stock(state = {}, action) {
  switch(action.type){
    case ADD_STOCK_SUCCESS:
      var update = {
        [action.stock.symbol] : action.stock
      };
      return Object.assign({}, state, update);
    case ADD_STOCK_HISTORY_SUCCESS:
      // update 'History' field
      const stockUpdate =
        Object.assign({}, state[action.stock.Symbol], action.stock)
      let update = {
        [action.stock.Symbol] : stockUpdate
      };
      return Object.assign({}, state, update);
    default:
      return state;
  }
}
