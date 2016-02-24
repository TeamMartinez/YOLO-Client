import { ADD_STOCK } from '../actions/stock';

export default function stocks(state = {}, action) {
  switch(action.type){
    case ADD_STOCK:
      var update = {
        [action.stock.symbol] : action.stock
      };
      return Object.assign({}, state, update);
    default:
      return state;
  }
}
