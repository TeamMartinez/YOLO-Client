import { HIDE_TRANSACTION_MODAL, SHOW_TRANSACTION_MODAL, UPLOAD_STOCK_SUCCESS } from '../actions/transaction';

const initState = {
  stocks: {},
  modal: false
}

function stocks(state, action) {
  switch(action.type) {
    case UPLOAD_STOCK_SUCCESS:
      return Object.assign({}, state, update);
    default:
      return state;
  }
}

function modal(state, action) {
  switch(action.type) {
    case SHOW_TRANSACTION_MODAL:
      return true;
    case HIDE_TRANSACTION_MODAL:
      return false;
    default:
      return state;
  }
}

export default function transaction(state = initState, action) {
  return {
    stocks: stocks(state.stocks, action),
    modal: modal(state.modal, action)
  }
}
