import React from 'react';

class HTML {


	renderAboutMe(){
				return(
				    <div className="summary"> 
					    <div className="Title">Full Stack Engineer</div> 
					   	 
					   	 <div className="about-me-parent">
					   	 	

					   	 	<div style={{display: 'flex', alignItems:'center',justifyContent: 'center', color: 'black', marginTop: 30}}>
					   	 		<p>Visit these links to see examples of my work.</p>
			       			</div>

			     
			       
							<a className="about-me-child" href="https://github.com/jchiefelk/pentesting">Penetration Testing with Python</a>
							
			       			<a className="about-me-child" href="http://activily.com/">iOS & Android app on Apple and Google Play stores</a>
							<a className="about-me-child" href="https://node-quandl.herokuapp.com/">Bitcoin analytics and data visualization</a>
							
							
							<a className="about-me-child" href="https://www.youtube.com/watch?v=aY7nMQaw03s">Machine Vision with OpenCV and C++</a>
							<a className="about-me-child" href="https://www.youtube.com/watch?v=leHrdxnxjvA">Augmented Reality with a Leap Motion Controller</a>
							

							<a className="about-me-child" href="https://www.youtube.com/watch?v=xVQuBaHheUo">Physics-Based atomic simulation of human membrane protein</a>
							<a className="about-me-child" href="http://science.sciencemag.org/content/335/6072/1055/F1">Editorial I co-authored in Science</a>
							<a className="about-me-child" href="http://pubs.acs.org/doi/abs/10.1021/acs.langmuir.5b01025?journalCode=langd5">Research article I published in a materials science journal called Langmuir</a>
						</div>
				   </div>
				);

	}
	

}

module.exports = new HTML();