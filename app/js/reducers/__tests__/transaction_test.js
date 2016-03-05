jest.unmock('../transaction');
jest.unmock('../../actions/transaction');

import transaction from '../transaction';
import { showModal, hideModal, uploadStockSuccess } from '../../actions/transaction';

describe('transaction', () => {
  it('shows modal', () => {
    const action = showModal();
    expect(transaction({
      stocks: {},
      modal: false
    }, action)).toEqual({
      stocks: {},
      modal: true
    });
  });
  it('hides modal', () => {
    const action = hideModal();
    expect(transaction({
      stocks: {},
      modal: true
    }, action)).toEqual({
      stocks: {},
      modal: false
    });
  });
});
