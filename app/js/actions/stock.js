export const ADD_STOCK = 'ADD_STOCK';

function _error(response) { console.log(response) }

function fetchStocks(tickers, callback, failback) {
  const baseUrl = 'https://query.yahooapis.com/v1/public/yql?q=';
  const formatted = tickers.map(t => { return '"' + t + '"' }).join(',');
  const query = 
    'select * from yahoo.finance.quotes where symbol in (' + formatted + ')';
  const params =
    '&format=json&env=store://datatables.org/alltableswithkeys&callback=';
  const url = baseUrl + encodeURI(query + params);

  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
      callback(JSON.parse(xmlHttp.responseText));
  }
  xmlHttp.open('GET', url, true);
  xmlHttp.send(null);
}

function fetchStock(ticker, callback, failback) {
  fetchStocks(JSON.parse('["' + ticker + '"]'), callback, failback);
}

export function addStock(stock) {
  return {
    type: ADD_STOCK,
    stock
  }
}

export function getStock(ticker) {
  return dispatch => {
    fetchStock(ticker, function (r) {
      dispatch(addStock(r.query.results.quote));
    }, _error)
  }
}

export function getStocks(tickers) {
  return dispatch => {
    fetchStocks(tickers, function (r) {
      r.query.results.quote.forEach(s => { dispatch(addStock(s)) })
    }, _error)
  }
}