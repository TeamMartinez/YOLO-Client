import { combineReducers } from 'redux';
import stocks from './stock';
import weather from './weather';
import calendar from './calendar';

const app = combineReducers({
  stocks,
  weather,
  calendar
});

export default app;
