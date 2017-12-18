import React, {Component} from 'react';
import Header from '../components/header';
import Footer from '../components/footer'


export default class About extends Component {
	/*****
						<h3>My skills include</h3>
  							<div className="HolyGrail">
								  <div className="HolyGrail-body">
								    <div className="HolyGrail-content">
								    	<h5 style={{color: 'red'}}>Programming Languages</h5>
								    	<h5 style={{marginTop: 5}}>JavaScript</h5>
								    	<h5>Python</h5>
								    	<h5>C++</h5>
								    	<h5>C</h5>
								    	<h5>Shell</h5>
								    </div>

								    <div className="HolyGrail-content">
								    	<h5 style={{color: 'red'}}>Databases</h5>
								    	<h5>MySQL</h5>
								    	<h5>MongoDB</h5>
								    </div>
								  </div>
							</div>

							  
						 	<div className="HolyGrail">
								  <div className="HolyGrail-body">
								    <div className="HolyGrail-content">
								    	<h3>Languages</h3>
								    	<p style={{marginTop: 5}}>JavaScript</p>
								    	<p>Python</p>
								    	<p>C++</p>
								    	<p>C</p>
								    	<p>Shell</p>
								    </div>

								    <div className="HolyGrail-content">
								    	<h3>Databases</h3>
								    	<p>MySQL</p>
								    	<p>MongoDB</p>
								    </div>

								    <div className="HolyGrail-content">
								    	<h3>Hardware</h3>
								    	<p>iPhone</p>
								    	<p>Android</p>
								    	<p>Leap Motion Controller</p>
								    	<p>Macbooks</p>
								    </div>
								  </div>
							</div>
						  </div>
	****/

	render(){
		return(
			<div className="main"> 
				<Header/>
				<div className="about">
					<div className="row">

						<div className="leftcol">
						 <h3>Work</h3>

						  <ul>
						    <li><a href="https://github.com/jchiefelk">Github</a></li>
						    <li><a href="https://node-quandl.herokuapp.com/">Bitcoin & Stock Analysis</a></li>
						  </ul>
						</div>


						<div className="middlecol">
						  	<h3>Full Stack Engineer</h3>
								<p>
								    I’m a Software Developer located in Polson, MT.  I'm super passionate about coding and education.  I currently work 
								    as an IT and CS Instructor at Salish Kootenai College.
								</p>
								 <p>
								    	I've worked for 2 startups as a Mobile, 
								    	Web, and Embedded Engineer.  I'm currently into Full Stack JavaSript; Node.js, React.js, 
								    	and React-Native. Before I worked for Activily and KinaTouch, I worked as a Teaching Assistant
								    	at UC Santa Cruz, and the University of Montana for Pre-Calculus, Quantum Mechanics, and Biochemistry
								</p>
						</div>
					</div>

				</div>
				<Footer/>
	        </div>
		);
	}

}