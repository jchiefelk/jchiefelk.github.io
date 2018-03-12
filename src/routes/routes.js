import React from 'react';
import { Route,  Switch } from 'react-router-dom';
import App from '../components/App';
import About from '../components/pages/about';
import Work from '../components/pages/work';
import Contact from '../components/pages/contact';
import CourseMaterial from '../components/pages/coursematerial';
import {hashHistory} from 'react-router';
require('../components/css/about.css');




const Routes = () => (

	  		<div>
	  			<Switch>
				    <Route exact path="/" component={About} />
				    <Route exact path="/classes" component={CourseMaterial}/>
				    <Route exact path="/work" component={Work}/>
				    <Route exact path="/contact" component={Contact} />
		 		</Switch>
		    </div>
);
export default Routes;