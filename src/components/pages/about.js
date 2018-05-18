import React, {Component} from 'react';
import Header from '../components/header';
import Footer from '../components/footer'


export default class About extends Component {

/**

**/
	render(){
		return(
			<div> 
				<Header/>
				<div className="about">
					<div className="row">
						<div className="leftcol">
						 <h3>Work</h3>
						  <ul>
						    <li><a href="https://github.com/jchiefelk">Github</a></li>
						    <li><a href="https://cryptocorrelation.herokuapp.com/">Bitcoin Price Visualization with D3.js</a></li>
						  </ul>
						</div>
						<div className="middlecol">
						  	<h3>Full Stack Engineer</h3>
								<p>
								    I’m a Software Engineer located in Polson, MT.  I'm super passionate about coding, computers, security, Bitcoin, plants, power lifting, and education.  I currently work 
								    as a IT and CS Instructor at Salish Kootenai College.
								</p>
								 <p>
								    I've worked for 2 startups as a Mobile, Web, and Augmented Reality Engineer.  I'm currently into V8 and Full Stack JavaSript.  
								    Before I worked for Activily and KinaTouch, I worked as a Data Scientist for the Neuroproject and a Material Science research group.  At the 
								    I also worked as a Teaching Assistant at UC Santa Cruz, and the University of Montana. I've taught classes in Pre-Calculus, 
								    Quantum Mechanics, and Biochemistry.
								</p>
						</div>
						</div>
					</div>
				<Footer/>
	        </div>
		);
	}

}