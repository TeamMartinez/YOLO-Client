jest.unmock('../weather');
jest.unmock('../../actions/weather');

import weather from '../weather';
import { setWeather, setLocation } from '../../actions/weather';

describe('weather', () => {
  it('sets the location', () => {
    const action = setLocation({
      longitude: '55.5555',
      latitude: '-55.5555'
    });
    expect(weather({
      location: {},
      weather: {}
    }, action)).toEqual({
      location: {
        longitude: '55.5555',
        latitude: '-55.5555'
      },
      weather: {}
    });
  });
  it('sets the weather', () => {
    const action = setWeather({
      city: 'swag',
      temp: '56',
      cond: 'raining duhhh',
      icon: 'im not a computer'
    });
    expect(weather({
      location: {},
      weather: {}
    }, action)).toEqual({
      location: {},
      weather: {
        city: 'swag',
        temp: '56',
        cond: 'raining duhhh',
        icon: 'im not a computer'
      }
    });
  });
});
