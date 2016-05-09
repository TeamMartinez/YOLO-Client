'use strict';

import api from '../api_wrapper';
import { getStockInfo } from './stock';

export const GET_STOCKS_SUCCESS = 'GET_STOCKS_SUCCESS';
export const GET_STOCKS_FAILURE = 'GET_STOCKS_FAILURE';

function getStocksSuccess(stocks) {
  return {
    type: GET_STOCKS_SUCCESS,
    stocks,
  };
}

function getStocksFailure(err) {
  return {
    type: GET_STOCKS_FAILURE,
    err,
  };
}

export function getStocks() {
  return (dispatch, getState) => {
    api.Stock.all().then(stocks => {
      const s = stocks.filter(stock => {
        return stock.amount > 0;
      });
      const symbols = s.map(owned => owned.ticker);
      symbols.forEach(symbol => {
        dispatch(getStockInfo(symbol));
      });
      dispatch(getStocksSuccess(s));
    }).catch(err => dispatch(getStocksFailure(err)));
  }
}
