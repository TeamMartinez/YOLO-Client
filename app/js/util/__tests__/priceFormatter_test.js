jest.unmock('../priceFormatter');

import { format, formatter } from '../priceFormatter';

describe('priceFormatter', () => {
  
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
  
});