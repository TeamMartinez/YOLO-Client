export const HIDE_TRANSACTION_MODAL = 'HIDE_TRANSACTION_MODAL';
export const SHOW_TRANSACTION_MODAL = 'SHOW_TRANSACTION_MODAL';
export const UPLOAD_STOCK_SUCCESS = 'UPLOAD_STOCK_SUCCESS';
export const UPLOAD_STOCK_FAILURE = 'UPLOAD_STOCK_FAILURE';

export function uploadStockSuccess(stocks) {
  return {
    type: UPLOAD_STOCK_SUCCESS,
    stocks
  }
}

export function uploadStockFailure(err) {
  return {
    type: UPLOAD_STOCK_FAILURE,
    err
  }
}

export function showModal() {
  return {
    type: SHOW_TRANSACTION_MODAL
  }
}

export function hideModal() {
  return {
    type: HIDE_TRANSACTION_MODAL
  }
}

export function uploadStocks(file) {
  return dispatch => {
  }
}
