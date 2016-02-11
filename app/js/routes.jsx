'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/app';
import Home from './containers/home';
import Calendar from './containers/calendar';
import Portfolio from './containers/portfolio';

export default (
  <Route component={App} path='/'>
    <IndexRoute component={Home}></IndexRoute>
    <Route component={Calendar} path='/calendar'/>
    <Route component={Portfolio} path='/portfolio'/>
  </Route>
)
