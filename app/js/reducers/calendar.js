'use strict';

import { ADD_EVENT_SUCCESS, GET_EVENTS_SUCCESS, REMOVE_EVENT_SUCCESS } from '../actions/calendar';

//make an error state handler

export default function events(state = [], action) {
  switch(action.type) {
    case ADD_EVENT_SUCCESS:
    case GET_EVENTS_SUCCESS:
    case REMOVE_EVENT_SUCCESS:
      return action.events;
    default:
      return state;
  }
}
