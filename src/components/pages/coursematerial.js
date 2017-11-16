import React, {Component} from 'react';
import Header from '../components/header';
import { Router, Route, Link } from 'react-router'
require('../css/about.css');


export default class CourseMaterial extends Component {


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
					    <li style={{backgroundColor: 'black'}}><h2 style={{textDecoration: 'none',color: 'white'}}  href="https://github.com/jchiefelk">Github Exercises</h2></li>
					  </ul>
					</div>

					<div className="col-6">


					  <h1>Useful Links for Salish Kootenai College</h1>
					  
					  <h3>ITEC 430 Scripting: Course Material</h3>
					  <h4>Useful Links</h4>
					  <a href="https://motherboard.vice.com/en_us/article/gv5wjy/hack-this-a-command-line-quick-start">Hack This: Become a Command Line Assassin</a>
					  <a href="https://null-byte.wonderhowto.com/how-to/hack-like-pro-scan-globe-for-vulnerable-ports-services-0148132/">How to Scan the Globe for Vulnerable Ports & Services</a>
					  <a href="https://www.hackingloops.com/bash-scripting-tutorial-for-penetration-testers/">BASH Scripting Tutorial for Penetration Testers</a>
					  <a href="https://www.hackingloops.com/bash/">Bash Shell Commands You Really Need to Know</a>
					  <a href="https://null-byte.wonderhowto.com/how-to/hack-like-pro-scripting-for-aspiring-hacker-part-1-bash-basics-0149422">Scripting for the Aspiring Hacker</a>
		  				<h4>Classic Shell Commands</h4>
			  			<a href="https://www.tutorialspoint.com/unix_commands/grep.htm">grep</a>
			  			<a href="https://www.tutorialspoint.com/unix_commands/awk.htm">awk</a>
			  			<a href="http://www.geeksforgeeks.org/sed-command-in-unix/">sed</a>
			  			<h4>Essential Shell Tools in 2017</h4>
			  			<a href="https://git-scm.com/">git</a>
			  			<a href="https://www.npmjs.com/">npm</a>
			  			<a href="https://pypi.python.org/pypi/pip">pip</a>
			  			<a href="https://gcc.gnu.org/">gcc</a>
			  			<a href="https://clang.llvm.org/">clang</a>
			  			<a href="https://cmake.org/">cmake</a>
			  			<a href="https://www.gnu.org/software/make/">GNU make</a>
					</div>


					<div className="col-3 right">
						  <div className="aside" style={{backgroundColor: 'black'}}>

						    <h3>Courses</h3>
  							<div className="HolyGrail">
								  <div className="HolyGrail-body">
								    <div className="HolyGrail-content">
								    	<h5 style={{marginTop: 5}}>ITEC 240 Windows Server 1: Install & Configure</h5>
								    	<h5>ITEC 430 Scripting: Bash & PowerShell</h5>
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