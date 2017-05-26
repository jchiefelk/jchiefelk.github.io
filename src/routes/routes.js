import React from 'react';
import { Router, Route } from 'react-router';
import App from '../components/App';
import About from '../components/pages/about';
import Work from '../components/pages/work';
import Contact from '../components/pages/contact';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/about" component={About}/>
    <Route path="/work" component={Work}/>
    <Route path="/contact" component={Contact} />
  </Router>
);
export default Routes;