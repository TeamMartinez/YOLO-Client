import { ADD_EVENTS, ADD_EVENT_SUCCESS, ADD_EVENT_FAILURE, REMOVE_EVENT_SUCCESS, REMOVE_EVENT_FAILURE } from '../actions/calendar';

//make an error state handler

export default function events(state = [], action) {
  switch(action.type) {
    case ADD_EVENTS:
      return [
        ...state,
        action.events
      ]
    case ADD_EVENT_SUCCESS :
      return [
        ...state,
        action.event
      ]
    case REMOVE_EVENT_SUCCESS :
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index+1)
      ]
    default:
      return state;
  }
}
