import { combineReducers } from 'redux';
import stocks from './stock';

const app = combineReducers({
  stocks
});

export default app;
