import { combineReducers } from 'redux';
import stocks from './stock';
import weather from './weather';

const app = combineReducers({
  stocks,
  weather
});

export default app;
