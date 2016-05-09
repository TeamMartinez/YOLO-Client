'use strict';

import { ADD_ISSUE_SUCCESS, GET_ISSUES_SUCCESS, REMOVE_ISSUE_SUCCESS } from '../actions/issues';

//make an error state handler

export default function issues(state = [], action) {
  switch(action.type) {
    case ADD_ISSUE_SUCCESS:
    case GET_ISSUES_SUCCESS:
    	return action.issues;
    case REMOVE_ISSUE_SUCCESS:
    default:
      return state;
  }
}
