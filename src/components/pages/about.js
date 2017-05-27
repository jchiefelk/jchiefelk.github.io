import React, {Component} from 'react';
import Header from '../components/header';
import { Router, Route, Link } from 'react-router'
require('../css/about.css');

export default class About extends Component {


	render(){
		return(
			<div style={{display: 'flex',flexDirection: 'column'}}> 
	        		<Header/>


				<div className="row">

					<div className="col-3 menu" >
					  <ul>
					    <li style={{backgroundColor: 'black'}}><a style={{textDecoration: 'none',color: 'white'}}  href="https://github.com/jchiefelk">Github</a></li>
					    <li style={{backgroundColor: 'black'}}><a style={{textDecoration: 'none',color: 'white'}}  href="https://twitter.com/jchiefelk">Twitter</a></li>
					    <li style={{backgroundColor: 'black'}}><a style={{textDecoration: 'none',color: 'white'}}  href="https://node-quandl.herokuapp.com/">Stock Analysis</a></li>
					  </ul>
					</div>

					<div className="col-6">
					  <h1>Hello!</h1>
					  <p>I'm a UI, Mobile, Backend, and Data Engineer</p>
					  <img src="https://s3-us-west-2.amazonaws.com/jchiefelkportfolio/portrait.jpg" className="portrait"/>
					</div>

					<div className="col-3 right">
						  <div className="aside" style={{backgroundColor: 'black'}}>
						    
						    <h3>Quick Intro</h3>
						    <p>
						    	I’m a software developer located in Capitola, CA.  I have a background in biochemistry and biophysics. 
						    	While in grad school I was spending all of my time coding for my thesis project, so much so that I enjoyed it 
						    	more than the science, so I decided to pursue a career as a software developer.  I've worked for 2 startups
						    	as a Mobile, Full Stack, and Augmented Reality Engineer.  On my spare time I like building out performant C++ addons for Node.js
						    	to do Stock, Futures, and ETF Market Analysis.
						    </p>

						    <h3>My skills include</h3>
  							<div className="HolyGrail">
								  <div className="HolyGrail-body">

								    <div className="HolyGrail-content">
								    	<h5 style={{color: 'red'}}>UI</h5>
								    	<h5 style={{marginTop: 5}}>HTML/CSS3</h5>
								    	<h5>JavaScript</h5>
								    	<h5>React.js</h5>
								    	<h5>React-Native</h5>
								    	<h5>jQuery</h5>
								    </div>
								    <div className="HolyGrail-content">
								    	<h5 style={{color: 'red'}}>Back-End</h5>
								    	<h5 style={{marginTop: 5}}>Node.js</h5>
								    	<h5>C++</h5>
								    	<h5>Python</h5>
								    	<h5>MySQL</h5>
								    	<h5>Flask</h5>
								    	<h5>Django</h5>
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