import { SET_LOCATION, SET_WEATHER } from '../actions/weather';

const getInitialState = {
  location: {
    longitude: '43.1656',
    latitude: '-77.6114'
  },
  weather: {
    city : '--',
    temp : '--',
    cond : '',
    icon : ''
  }
}

function weather(state = getInitialState, action) {
  switch(action.type){
    case SET_LOCATION:
      return Object.assign({}, state, {
        location: action.location
      });
    case SET_WEATHER:
      return Object.assign({}, state, {
        weather: action.weather
      });
    default:
      return state;
  }
}

export default weather;
