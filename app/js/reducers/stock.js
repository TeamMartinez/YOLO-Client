import { ADD_STOCK, UPDATE_STOCK } from '../actions/stock';

function stocks(state = {}, action) {
  console.log(action);
  switch(action.type){
    case ADD_STOCK:
      var update = {};
      update[action.stock.symbol] = action.stock;
      return Object.assign({}, state, update);
    default:
      return state;
  }
}

export default stocks;
