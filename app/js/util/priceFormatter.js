'use strict';

const CURR_FORMATTERS = {
  'USD' : '$-',
  'EUR' : '€-',
  'GBP' : '£-',
  'JPY' : '¥-'
}

// return the given amount as a string with the given currency's format
export function format(amount, currency) {
  const unformatted = CURR_FORMATTERS[currency] || '-';
  return unformatted.replace(/-/, parseFloat(amount || 0).toFixed(2));
}

// return a formatting function that uses the given currency's format and takes
// only an amount
export function formatter(currency) {
  return amount => { return format(amount, currency) }
}