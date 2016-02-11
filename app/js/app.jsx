'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import { Router, browerHistory } from 'react-router';

window.onload = () => {
  ReactDOM.render(
    <Router history={browerHistory}>
      {routes}
    </Router>,
    document.getElementById('app')
  );
};

