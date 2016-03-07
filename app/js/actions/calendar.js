'use strict';

import { checkLogin } from './auth';

export const ADD_EVENTS = 'ADD_EVENTS';
export const ADD_EVENT_SUCCESS = 'ADD_EVENT_SUCCESS';
export const ADD_EVENT_FAILURE = 'ADD_EVENT_FAILURE';
export const REMOVE_EVENT_SUCCESS = 'REMOVE_EVENT_SUCCESS';
export const REMOVE_EVENT_FAILURE = 'REMOVE_EVENT_FAILURE';

export function addEvents(events) {
  return {
    type: ADD_EVENTS,
    events
  }
}

export function addEventSuccess(event) {
  return {
    type: ADD_EVENT_SUCCESS,
    event
  }
}

export function addEventFailure(err) {
  return {
    type: ADD_EVENT_FAILURE,
    err
  }
}

export function removeEventSuccess(index) {
  return {
    type: REMOVE_EVENT_SUCCESS,
    index
  }
}

export function removeEventFailure(err) {
  return {
    type: REMOVE_EVENT_FAILURE,
    err
  }
}

export function addEvent(event) {
  return dispatch => {
    // Do server comm here
    dispatch(checkLogin);
    dispatch(addEventSuccess(event));
    // dispatch(addEventFailure(err)
  }
}

export function removeEvent(index) {
  return dispatch => {
    // Do server comm here
    dispatch(checkLogin);
    dispatch(removeEventSuccess(index));
    // dispatch(removeEventFailure(err));
  }
}
