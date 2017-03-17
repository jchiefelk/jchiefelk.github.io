import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../../css/main.css';


class HTML {



	renderAboutMe(){
				this.aboutme = "I'm deployed to Apple and Google Play App Stores, and Heroku.";

				return(
				 <div className="dashboard">	
				    <p className="Title">Full Stack Engineer</p> 
				    
				    <ReactCSSTransitionGroup 
				    	className="About-Me"
          				transitionEnterTimeout={5000}
          				transitionLeaveTimeout={0}>
		       			
		       		<p>{this.aboutme}</p>
				   
				   </ReactCSSTransitionGroup>
				</div>

				);

	}
	



}

module.exports = new HTML();