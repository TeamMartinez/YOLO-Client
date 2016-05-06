'use strict';

import api from '../api_wrapper';

export const ADD_ISSUE_SUCCESS = 'ADD_ISSUE_SUCCESS';
export const ADD_ISSUE_FAILURE = 'ADD_ISSUE_FAILURE';
export const GET_ISSUES_SUCCESS = 'GET_ISSUES_SUCCESS';
export const GET_ISSUES_FAILURE = 'GET_ISSUES_FAILURE';
export const REMOVE_ISSUE_SUCCESS = 'REMOVE_ISSUE_SUCCESS';
export const REMOVE_ISSUE_FAILURE = 'REMOVE_ISSUE_FAILURE';

function addIssueSuccess(events) {
  return {
    type: ADD_ISSUE_SUCCESS,
    events,
  }
}

function addIssueFailure(err) {
  return {
    type: ADD_ISSUE_FAILURE,
    err,
  }
}

function getIssuesSuccess(events) {
  return {
    type: GET_ISSUES_SUCCESS,
    events,
  };
}

function getIssuesFailure(err) {
  return {
    type: GET_ISSUES_FAILURE,
    err,
  };
}

function removeIssueSuccess(events) {
  return {
    type: REMOVE_ISSUE_SUCCESS,
    events,
  }
}

function removeIssueFailure(err) {
  return {
    type: REMOVE_ISSUE_FAILURE,
    err,
  }
}

export function addIssue(event) {
  return dispatch => {
    api.Issues.create(event).then(events => {
      dispatch(addIssueSuccess(events));
    }).catch(err => dispatch(addIssueFailure(err)));
  }
}

export function getIssues() {
  return dispatch => {
    api.Issues.all().then(events => {
      dispatch(getIssuesSuccess(events));
    }).catch(err => dispatch(getIssuesFailure(err)));
  }
}

export function removeIssue(id) {
  return (dispatch, getState) => {
    api.Issues.destory(id).then(events => {
      dispatch(removeIssueSuccess(events));
    }).catch(err => dispatch(removeIssueFailure(err)));
  }
}
