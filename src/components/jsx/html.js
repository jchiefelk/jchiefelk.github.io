import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../css/main.css';


class HTML {


	renderAboutMe(){
				return(
				    <div className="summary"> 
					    <p className="Title">Full Stack Engineer</p> 
					   	
					   	 <div className="About-Me">
			       			<p>I have experience in...</p>
			       			<p>1. Mobile Development</p>
							<p>2. Full Stack Web Development</p>
							<p>3. Augmented Reality</p>
							<p>3. Security Testing</p>
							<p>4. Performance Engineering</p>
							<p>5. Data Visualization & Statistics</p>
						</div>

				   </div>
				);

	}
	

}

module.exports = new HTML();