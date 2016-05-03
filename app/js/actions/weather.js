'use strict';

import Config from '../config';

export const SET_LOCATION = 'SET_LOCATION';
export const SET_WEATHER = 'SET_WEATHER'; 

export function setWeather(weather) {
  return { 
    type: SET_WEATHER,
    weather
  }
}

export function setLocation(location) {
  return {
    type: SET_LOCATION,
    location
  }
}

export function getWeather() {
  return (dispatch, getState) => {
    let state = getState().weather.location;
    var url = 'http://api.openweathermap.org/data/2.5/weather';
    url += '?lat=' + state.latitude + '&lon=' + state.longitude;
    url += '&appid=' + Config.OWM_API_KEY;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
          var r = JSON.parse(xmlHttp.responseText);
          dispatch(setWeather({
              city : r.name,
              temp : r.main.temp,
              cond : r.weather ? r.weather[0].main : '',
              icon : r.weather ? r.weather[0].icon : '04d'
          }));
        }
    }
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
  }
}

export function getLocaction() {
  return dispatch => {
    navigator.geolocation.getCurrentPosition( 
      (pos) => {
        dispatch(setLocation({
          longitude: pos.coords.longitude,
          latitude: pos.coords.latitude
        }));
        dispatch(getWeather());
      },
      () => { dispatch(getWeather()) }
    )
  }
}
