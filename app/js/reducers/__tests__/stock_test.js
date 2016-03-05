jest.unmock('../stock');
jest.unmock('../../actions/stock');

import stock from '../stock';
import { addStockSuccess } from '../../actions/stock';

describe('stock', () => {
  it('should add a stock', () => {
    const action = addStockSuccess({
      symbol: "APPL",
      price: 250
    });
    expect(stock({}, action)).toEqual({
      APPL: {
        symbol: "APPL",
        price: 250
      }
    });
  });
});
