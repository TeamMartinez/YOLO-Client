'user strict';

import { GET_STOCKS_SUCCESS } from '../actions/user';

export default function user(state = [], action) {
  switch(action.type) {
    case GET_STOCKS_SUCCESS:
      return action.stocks;
    default:
      return state;
  }
}
