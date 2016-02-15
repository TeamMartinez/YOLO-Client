'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './page-components/app';
import Home from './page-components/home';
import Calendar from './page-components/calendar';
import Portfolio from './page-components/portfolio';

export default (
  <Route component={App} path='/'>
    <IndexRoute component={Home}></IndexRoute>
    <Route component={Calendar} path='/calendar'/>
    <Route component={Portfolio} path='/portfolio'/>
  </Route>
)
