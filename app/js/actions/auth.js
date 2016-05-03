'use strict';

import Api from '../api_wrapper';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export function login() {
  return {
    type: LOGIN
  }
}

export function logout() {
  return {
    type: LOGOUT
  }
}

export function checkLogin() {
  return (dispatch, getState) => {
    Api.Auth.check().then(loginState => {
      if(getState().auth !== loginState) {
        loginState ? dispatch(login()) : dispatch(logout());
      }
    });
  }
}
