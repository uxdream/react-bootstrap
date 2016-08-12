import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Route, Router } from 'react-router';

import View from './view';

ReactDOM.render(
  <Router history={ browserHistory }>
    <Route
      component={ View }
      path="/"
    />
  </Router>,
  document.getElementById('root')
);