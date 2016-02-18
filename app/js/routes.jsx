'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import CalendarPage from './containers/CalendarPage';
import Portfolio from './components/Portfolio';

export default (
  <Route component={App} path='/'>
    <IndexRoute component={Home}></IndexRoute>
    <Route component={CalendarPage} path='/calendar'/>
    <Route component={Portfolio} path='/portfolio'/>
  </Route>
)
