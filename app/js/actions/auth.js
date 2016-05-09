'use strict';

import Api from '../api_wrapper';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export function login(user) {
  return {
    type: LOGIN,
    money: user.user.money, // WHY???
  }
}

export function logout() {
  return {
    type: LOGOUT,
  }
}

export function checkLogin() {
  return (dispatch, getState) => {
    Api.Auth.check().then(loginState => {
      if(getState().auth !== loginState.authenticated) {
        loginState ? dispatch(login(loginState)) : dispatch(logout());
      }
    });
  }
}
