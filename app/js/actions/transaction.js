'use strict';

import { checkLogin } from './auth';
import api from '../api_wrapper';
import { getStocks } from './user';

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

function buyStockSuccess(transaction, money) {
  return {
    type: BUY_STOCK_SUCCESS,
    transaction,
    money,
  };
}

function buyStockFailure(err) {
  return {
    type: BUY_STOCK_FAILURE,
    err,
  };
}

function sellStockSuccess(transaction, money) {
  return {
    type: SELL_STOCK_SUCCESS,
    transaction,
    money,
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
  return dispatch => {
    const trans = {
      ticker: stock.Symbol,
      market_value: parseInt(stock.LastTradePriceOnly),
      amount: parseFloat(amount),
    }
    api.Buy.create(trans).then(user => {
      dispatch(buyStockSuccess(trans, user.money))
      dispatch(getStocks());
    }).catch(err => dispatch(buyStockFailure(err)));
  }
}

export function sellStock(stock, amount) {
  return dispatch => {
    const trans = {
      ticker: stock.Symbol,
      market_value: parseInt(stock.LastTradePriceOnly),
      amount: parseFloat(amount),
    }
    api.Sell.create(trans).then(user => {
      dispatch(buyStockSuccess(trans, user.money))
      dispatch(getStocks());
    }).catch(err => dispatch(buyStockFailure(err)));
  }
}

export function getStockTransactions() {
  return dispatch => {
    api.Transactions.all().then(trans => {
      dispatch(getStockTransactionsSuccess(trans));
    }).catch(err => dispatch(getStockTransactionsFailure(err)));
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
