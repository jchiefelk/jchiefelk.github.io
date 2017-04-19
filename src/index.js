import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/routes';
import {browserHistory,hashHistory} from 'react-router';




ReactDOM.render(
  <Routes history={hashHistory}/>,
  document.getElementById('root')
);
