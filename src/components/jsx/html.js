import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../css/main.css';


class HTML {



	renderAboutMe(){
				this.aboutme = "I've owned mobile development for an enterprize app deployed to the Apple and Google Play App Stores, Activily.  I'm also into performant stock market analysis, Web Security, and Machine Vision";

				return(
				 <div style={{alignItems: 'center',justifyContent: 'center',display: 'flex',flexDirection: 'column'}}>	
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