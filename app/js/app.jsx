'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import { Router, browerHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';

window.onload = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={browerHistory}>
        {routes}
      </Router>
    </Provider>,
    document.querySelector('body')
  );
};

