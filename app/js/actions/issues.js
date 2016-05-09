'use strict';

import api from '../api_wrapper';

export const ADD_ISSUE_SUCCESS = 'ADD_ISSUE_SUCCESS';
export const ADD_ISSUE_FAILURE = 'ADD_ISSUE_FAILURE';
export const GET_ISSUES_SUCCESS = 'GET_ISSUES_SUCCESS';
export const GET_ISSUES_FAILURE = 'GET_ISSUES_FAILURE';
export const REMOVE_ISSUE_SUCCESS = 'REMOVE_ISSUE_SUCCESS';
export const REMOVE_ISSUE_FAILURE = 'REMOVE_ISSUE_FAILURE';

function addIssueSuccess(issues) {
  return {
    type: ADD_ISSUE_SUCCESS,
    issues,
  }
}

function addIssueFailure(err) {
  return {
    type: ADD_ISSUE_FAILURE,
    err,
  }
}

function getIssuesSuccess(issues) {
  return {
    type: GET_ISSUES_SUCCESS,
    issues,
  };
}

function getIssuesFailure(err) {
  return {
    type: GET_ISSUES_FAILURE,
    err,
  };
}

function removeIssueSuccess(issues) {
  return {
    type: REMOVE_ISSUE_SUCCESS,
    issues,
  }
}

function removeIssueFailure(err) {
  return {
    type: REMOVE_ISSUE_FAILURE,
    err,
  }
}

export function getIssues() {
  return dispatch => {
    api.Issues.all().then(issues => {
      dispatch(getIssuesSuccess(issues));
    }).catch(err => dispatch(getIssuesFailure(err)));
  }
}

export function addIssue(evt) {
  return dispatch => {
    api.Issues.create(evt).then(issues => {
      dispatch(addIssueSuccess(issues));
    }).catch(err => dispatch(addIssueFailure(err)));
  }
}
