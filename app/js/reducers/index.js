import { combineReducers } from 'redux';
import stock from './stock';
import weather from './weather';
import calendar from './calendar';
import transaction from './transaction';

const app = combineReducers({
  stock,
  weather,
  calendar,
  transaction
});

export default app;
