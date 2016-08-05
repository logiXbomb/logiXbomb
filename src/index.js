import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

const App = () => <h2>logiXbomb</h2>;

render(
  <Router routes={routes} history={browserHistory} />,
  document.getElementById('logiXbomb')
);
