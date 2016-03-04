import { combineReducers } from 'redux';
import auth from './auth';
import stock from './stock';
import weather from './weather';
import calendar from './calendar';
import transaction from './transaction';

const app = combineReducers({
  auth,
  calendar,
  stock,
  weather,
  transaction
});

export default app;
