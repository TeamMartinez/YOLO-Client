'use strict';

const CURR_FORMATTERS = {
  'USD' : '$-',
  'EUR' : '€-',
  'GBP' : '£-',
  'JPY' : '¥-'
}

export function format(price, currency) {
  const unformatted = CURR_FORMATTERS[currency] || '-';
  return unformatted.replace(/-/, parseFloat(price).toFixed(2));
}

export function formatter(currency) {
  return price => { return format(price, currency) }
}