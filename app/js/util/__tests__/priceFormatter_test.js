jest.unmock('../priceFormatter');

import { format, formatter } from '../priceFormatter';

describe('price_format', () => {
  
  it('should format the empty string to $0.00', () => {
    const price = '';
    const currency = 'USD';

    expect(format(price, currency)).toEqual('$0.00');
  });

  it('should format the empty string to €0.00', () => {
    const price = '';
    const currency = 'EUR';

    expect(format(price, currency)).toEqual('€0.00');
  });

  it('should format number 10 to $10.00', () => {
    const price = 10;
    const currency = 'USD';

    expect(format(price, currency)).toEqual('$10.00');
  });

  it('should format string \'10\' to $10.00', () => {
    const price = '10';
    const currency = 'USD';

    expect(format(price, currency)).toEqual('$10.00');
  });

  it('should round 100.394857 to two decimal places', () => {
    const price = 100.394857;
    const currency = 'USD';

    expect(format(price, currency)).toEqual('$100.39');
  })

});


describe('price_formatter', () => {

  it('should provide a formatter in USD', () => {
    const price = '10';
    const currency = 'USD';
    const format = formatter(currency);

    expect(format(price)).toEqual('$10.00');
  });

  it('should provide a formatter in GBP', () => {
    const price = '10';
    const currency = 'GBP';
    const format = formatter(currency);

    expect(format(price)).toEqual('£10.00');
  })

});