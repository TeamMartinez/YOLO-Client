'use strict';

import { ADD_ISSUE_SUCCESS, GET_ISSUES_SUCCESS, REMOVE_ISSUE_SUCCESS } from '../actions/issues';

//make an error state handler

export default function issues(state = [], action) {
  switch(action.type) {
    case ADD_ISSUE_SUCCESS:
    case GET_ISSUES_SUCCESS:
    case REMOVE_ISSUE_SUCCESS:
      return action.issues;
    default:
      return state;
  }
}
