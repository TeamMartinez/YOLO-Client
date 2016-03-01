'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './components/HomePage';
import CalendarPage from './containers/CalendarPage';
import PortfolioPage from './components/PortfolioPage';
import Calendar from './components/Calendar';
import Day from './components/Day';

export default (
  <Route component={App} path='/'>
    <IndexRoute component={HomePage} />
    <Route component={CalendarPage} path='calendar'>
      <IndexRoute component={Calendar} />
      <Route component={Day} path=':day' />
    </Route>
    <Route component={PortfolioPage} path='portfolio' />
  </Route>
)
