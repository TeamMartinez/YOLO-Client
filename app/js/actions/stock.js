'use strict';

import { fetchStock, fetchStocks, fetchStockHistory } from '../providers/stock';
import moment from 'moment';

export const ADD_STOCK_SUCCESS = 'ADD_STOCK_SUCCESS';
export const ADD_STOCK_FAILURE = 'ADD_STOCK_FAILURE';
export const ADD_STOCK_HISTORY_SUCCESS = 'ADD_STOCK_HISTORY_SUCCESS';
export const ADD_STOCK_HISTORY_FAILURE = 'ADD_STOCK_HISTORY_FAILURE';

export function addStockSuccess(stock) {
  return {
    type: ADD_STOCK_SUCCESS,
    stock
  }
}

export function addStockFailure(err) {
  return {
    type: ADD_STOCK_FAILURE,
    err
  }
}

export function addStockHistorySuccess(stock) {
  return {
    type: ADD_STOCK_HISTORY_SUCCESS,
    stock
  }
}

export function addStockHistoryFailure(err) {
  return {
    type: ADD_STOCK_HISTORY_FAILURE,
    err
  }
}

export function getStock(ticker) {
  return dispatch => {
    fetchStock(ticker, function (r) {
      r.query.results.quote.Name === null ?
        dispatch(addStockFailure('No stock with ticker "' + ticker + '"')) :
        dispatch(addStockSuccess(r.query.results.quote));
    }, err => {
      dispatch(addStockFailure(err));
    })
  }
}

export function getStocks(tickers) {
  return dispatch => {
    fetchStocks(tickers, function (r) {
      r.query.results.quote.forEach(s => {
        s.Name === null ?
          dispatch(addStockFailure('No stock with ticker "' + ticker + '"')) :
          dispatch(addStockSuccess(s));
      })
    }, err => {
      dispatch(addStockFailure(err))
    })
  }
}

export function getStockHistory(ticker) {
  return dispatch => {
    fetchStockHistory(ticker, function (r) {
      if (r.query.results === null) {
        dispatch(
          addStockHistoryFailure('No stock with ticker "' + ticker + '"')
        );
      } else {
        const history = r.query.results.quote;
        const now = moment();

        const historyValues = history.map(hist => {
          return {
            x : moment(hist.Date).toDate(),
            y : parseFloat(hist.Close)
          }
        });

        dispatch(addStockHistorySuccess({
          'Symbol' : ticker,
          'History' : historyValues
        }))
      }
    }, err => {
      dispatch(addStockFailure(err))
    })
  }
}