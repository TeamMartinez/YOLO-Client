import { ADD_EVENTS, ADD_EVENT_SUCCESS, ADD_EVENT_FAILURE, REMOVE_EVENT_SUCCESS, REMOVE_EVENT_FAILURE } from '../actions/calendar';

//make an error state handler

export default function events(state = {}, action) {
  switch(action.type) {
    case ADD_EVENTS:
      return Object.assign({}, state, actions.events);
    case ADD_EVENT_SUCCESS :
      return Object.assign({}, state, action.event);
    case REMOVE_EVENT_SUCCESS :
      let newState = Object.assign({}, state);
      delete newState[actions.id];
      return newState;
    default:
      return state;
  }
}
