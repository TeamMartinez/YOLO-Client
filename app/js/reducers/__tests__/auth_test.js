jest.unmock('../auth/')
jest.unmock('../../actions/auth');

import auth from '../auth';
import { login, logout } from '../../actions/auth';

describe('auth', () => {
  it('it should log in', () => {
    const action = login();
    expect(auth(false, action)).toBe(true);
  });
  it('it should log out', () => {
    const action = logout();
    expect(auth(true, action)).toBe(false);
  });
});
