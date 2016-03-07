'use strict';

import { LOGIN, LOGOUT } from '../actions/auth';

export default function auth(state = false, action) {
  switch(action.type) {
    case LOGIN:
      return true;
    case LOGOUT:
      return false;
    default:
      return state;
  }
}
