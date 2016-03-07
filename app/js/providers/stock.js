import moment from 'moment';

export function fetchStocks(tickers, callback, failback) {
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

export function fetchStock(ticker, callback, failback) {
  fetchStocks(JSON.parse('["' + ticker + '"]'), callback, failback);
}

export function fetchStockHistory(ticker, callback, failback) {
  const baseUrl = 'https://query.yahooapis.com/v1/public/yql?q=';
  const query = 'select * from yahoo.finance.historicaldata where symbol="' +
    ticker + '" and startDate="' + moment().subtract(1, 'years').format('YYYY-MM-DD') + '" and endDate="' + moment().format('YYYY-MM-DD') + '"';
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