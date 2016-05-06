'use strict';

import { checkLogin } from './auth';

// upload stocks then pull all transaction history again
// just put up a notification that it worked
export const UPLOAD_STOCK_SUCCESS = 'UPLOAD_STOCK_SUCCESS';
export const UPLOAD_STOCK_FAILURE = 'UPLOAD_STOCK_FAILURE';
export const BUY_STOCK_SUCCESS = 'BUY_STOCK_SUCCESS';
export const BUY_STOCK_FAILURE = 'BUY_STOCK_FAILURE';
export const SELL_STOCK_SUCCESS = 'SELL_STOCK_SUCCESS';
export const SELL_STOCK_FAILURE = 'SELL_STOCK_FAILURE';
export const GET_STOCK_TRANSACTIONS_SUCCESS = 'GET_STOCK_TRANSACTIONS_SUCCESS';
export const GET_STOCK_TRANSACTIONS_FAILURE = 'GET_STOCK_TRANSACTIONS_FAILURE';

function buyStockSuccess(transaction) {
  return {
    type: BUY_STOCK_SUCCESS,
    transaction,
  };
}

function buyStockFailure(err) {
  return {
    type: BUY_STOCK_FAILURE,
    err,
  };
}

function sellStockSuccess(transaction) {
  return {
    type: SELL_STOCK_SUCCESS,
    transaction,
  };
}

function sellStockFailure(err) {
  return {
    type: SELL_STOCK_FAILURE,
    err,
  };
}

function getStockTransactionsSuccess(transactions) {
  return {
    type: GET_STOCK_TRANSACTIONS_SUCCESS,
    transactions,
  };
}

function getStockTransactionsFailure(err) {
  return {
    type: GET_STOCK_TRANSACTIONS_FAILURE,
    err,
  };
}

function uploadStockSuccess(stocks) {
  return {
    type: UPLOAD_STOCK_SUCCESS,
    stocks
  }
}

function uploadStockFailure(err) {
  return {
    type: UPLOAD_STOCK_FAILURE,
    err
  }
}

export function buyStock(stock, amount) {
  return (dispatch, getState) => {
    dispatch(buyStockSuccess());
  }
}

export function sellStock(stock, amount) {
  return (dispatch, getState) => {
    dispatch(buyStockFailure());
  }
}

export function getStockTransactions() {
  return dispatch => {
    dispatch(getStockTransactionsSuccess());
  }
}

export function uploadStocks(files) {
  return dispatch => {
    /*
    req = request.post();
    files.forEach((file) => {
      req.attach(file.name, file);
    });
    req.end((err, resp) => {
      if(err) {
        dispatch(uploadStockFailure(err))
      } else {
        dispatch(uploadStockSuccess(resp.json()));
      }
    });
    */
   dispatch(checkLogin());
  }
}
