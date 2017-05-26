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
						    	I’m a software developer located in Capitola, CA.  I have a background in biochemistry and biophysics, 
						    	I originally wanted to make an impact being a professor, 
						    	but while in grad school I was coding so much for my thesis project I started enjoying and spending all my time
						    	doing it more than the science, so I decided to pursue a career as a software developer.  
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