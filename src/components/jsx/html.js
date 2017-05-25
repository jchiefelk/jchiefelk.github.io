import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../css/main.css';


class HTML {


	renderAboutMe(){
				return(
				    <div className="summary"> 


					    <div className="Title">Full Stack Engineer</div> 
					   	
					   	 <div className="about-me-parent">
					   	 	<div style={{display: 'flex', alignItems:'center',justifyContent: 'center', color: 'black'}}>
					   	 		<p>Visit thes links to see examples of my work in.</p>
			       			</div>
			       			<a className="about-me-child" href="http://activily.com/">iOS & Android app on Apple and Google Play stores</a>
							<a className="about-me-child" href="https://node-quandl.herokuapp.com/">Stock market analytics and data visualization</a>
							<a className="about-me-child" href="https://www.youtube.com/watch?v=leHrdxnxjvA">Augmented Reality</a>
							<a className="about-me-child" href="https://www.youtube.com/watch?v=aY7nMQaw03s">Machine Vision with OpenCV</a>
							<a className="about-me-child" href="https://github.com/jchiefelk/pentesting">Penetration Testing with Python</a>
						</div>
				   </div>
				);

	}
	

}

module.exports = new HTML();