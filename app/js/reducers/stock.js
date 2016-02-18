import { ADD_STOCK, UPDATE_STOCK } from '../actions/stock';

export default function stocks(state = [], action) {
  switch(action.type){
    case ADD_STOCK:
      return [
        ...state,
        action.stock
      ];
    default:
      return state;
  }
}
