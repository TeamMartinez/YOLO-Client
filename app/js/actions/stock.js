import { fetchStock, fetchStocks } from '../providers/stock';

export const ADD_STOCK_SUCCESS = 'ADD_STOCK_SUCCESS';
export const ADD_STOCK_FAILURE = 'ADD_STOCK_FAILURE';

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

export function getStock(ticker) {
  return dispatch => {
    fetchStock(ticker, function (r) {
      dispatch(addStockSuccess(r.query.results.quote));
    }, err => {
      dispatch(addStockFailure(err));
    })
  }
}

export function getStocks(tickers) {
  return dispatch => {
    fetchStocks(tickers, function (r) {
      r.query.results.quote.forEach(s => { dispatch(addStockSuccess(s)) })
    }, err => {
      dispatch(addStockFailure(err))
    })
  }
}
