import React, {Component} from 'react';
import Header from '../components/header';
import { Router, Route, Link } from 'react-router'
require('../css/about.css');


export default class About extends Component {


	/**
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

	**/


	render(){
		return(
			<div className="main"> 
				<Header/>

				<div className="about">
				<div className="row">
					<div className="col-3 menu" >
					  <ul>
					    <li style={{backgroundColor: 'black'}}><a style={{textDecoration: 'none',color: 'white'}}  href="https://github.com/jchiefelk">Github</a></li>
					    <li style={{backgroundColor: 'black'}}><a style={{textDecoration: 'none',color: 'white'}}  href="https://node-quandl.herokuapp.com/">Bitcoin & Stock Analysis</a></li>
					  </ul>
					</div>

					<div className="col-6">
					  <h2>Full Stack Engineer</h2>
					</div>

					<div className="col-3 right">
						  <div className="aside" style={{backgroundColor: 'black'}}>
							    <h3>Quick Intro</h3>
							    <p>
							    	I’m a Software Developer located in Polson, MT.  I'm super passionate about coding and education.  I currently work 
							    	as an IT and CS Instructor at Salish Kootenai College.
							    </p>

							     <h3>Professional and Teaching Experience</h3>
							    <p>
							    	I've worked for 2 startups as a Mobile, 
							    	Web, and Embedded Engineer.  I'm currently into Full-Stack JavaSript; Node.js, React.js, 
							    	and React-Native. Before I worked for Activily and KinaTouch, I worked as a Teaching Assistant
							    	at UC Santa Cruz, and the University of Montana for Pre-Calculus, Quantum Mechanics, and Biochemistry
							    </p>
						  
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
					</div>
				</div>
				</div>
	        </div>
		);
	}

}