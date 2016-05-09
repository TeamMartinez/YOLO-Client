'use strict';

import { combineReducers } from 'redux';
import auth from './auth';
import user from './user';
import stock from './stock';
import modal from './modal';
import alerts from './alerts';
import weather from './weather';
import calendar from './calendar';
import transaction from './transaction';
import issues from './issues';

const app = combineReducers({
  alerts,
  auth,
  user,
  calendar,
  modal,
  stock,
  transaction,
  weather,
  issues,
});

export default app;
