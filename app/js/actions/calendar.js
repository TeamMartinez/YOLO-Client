'use strict';

import api from '../api_wrapper';

export const ADD_EVENT_SUCCESS = 'ADD_EVENT_SUCCESS';
export const ADD_EVENT_FAILURE = 'ADD_EVENT_FAILURE';
export const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS';
export const GET_EVENTS_FAILURE = 'GET_EVENTS_FAILURE';
export const REMOVE_EVENT_SUCCESS = 'REMOVE_EVENT_SUCCESS';
export const REMOVE_EVENT_FAILURE = 'REMOVE_EVENT_FAILURE';

function addEventSuccess(events) {
  return {
    type: ADD_EVENT_SUCCESS,
    events,
  }
}

function addEventFailure(err) {
  return {
    type: ADD_EVENT_FAILURE,
    err,
  }
}

function getEventsSuccess(events) {
  return {
    type: GET_EVENTS_SUCCESS,
    events,
  };
}

function getEventsFailure(err) {
  return {
    type: GET_EVENTS_FAILURE,
    err,
  };
}

function removeEventSuccess(events) {
  return {
    type: REMOVE_EVENT_SUCCESS,
    events,
  }
}

function removeEventFailure(err) {
  return {
    type: REMOVE_EVENT_FAILURE,
    err,
  }
}

export function addEvent(event) {
  return dispatch => {
    api.Events.create(event).then(events => {
      dispatch(addEventSuccess(events));
    }).catch(err => dispatch(addEventFailure(err)));
  }
}

export function getEvents() {
  return dispatch => {
    api.Events.all().then(events => {
      dispatch(getEventsSuccess(events));
    }).catch(err => dispatch(getEventsFailure(err)));
  }
}

export function removeEvent(id) {
  return (dispatch, getState) => {
    api.Events.destory(id).then(events => {
      dispatch(removeEventSuccess(events));
    }).catch(err => dispatch(removeEventFailure(err)));
  }
}
