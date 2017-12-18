import React, {Component} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';



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
	//  className="row"
	//  className="about"
	/**
						  <div className="aside">
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
	**/

	render(){

		return(
			<div className="main">
				<Header/>
				<div className="about">

					<div className="row">

						<div className="leftcol">
							<h3>Courses</h3>
							<ul>
								<li><Link to="/">ITEC 240 - Windows Server Install & Configure</Link></li>
								<li><Link to ="/">ITEC 430 - Shell Scripting</Link></li>
							</ul>
						</div>

						<div className="middlecol">
						  <h3>ITEC 430 Scripting: Course Material</h3>  
						  <h4>Fun and Insightful Links</h4>
						  <a href="https://motherboard.vice.com/en_us/article/gv5wjy/hack-this-a-command-line-quick-start">Hack This: Become a Command Line Assassin</a>
						  <a href="https://null-byte.wonderhowto.com/how-to/hack-like-pro-scan-globe-for-vulnerable-ports-services-0148132/">How to Scan the Globe for Vulnerable Ports & Services</a>
						  <a href="https://www.hackingloops.com/bash-scripting-tutorial-for-penetration-testers/">BASH Scripting Tutorial for Penetration Testers</a>
						  <a href="https://www.hackingloops.com/bash/">Bash Shell Commands You Really Need to Know</a>
						  <a href="https://null-byte.wonderhowto.com/how-to/hack-like-pro-scripting-for-aspiring-hacker-part-1-bash-basics-0149422">Scripting for the Aspiring Hacker</a>
			  				
			  				<h4>Text Search, File Manipulation, Text Extraction</h4>
				  			<a href="https://www.tutorialspoint.com/unix_commands/grep.htm">grep</a>
				  			<a href="https://www.tutorialspoint.com/unix_commands/awk.htm">awk</a>
				  			<a href="http://www.geeksforgeeks.org/sed-command-in-unix/">sed</a>
				  			<h4>Package Management Tools in 2017</h4>
				  			<a href="https://git-scm.com/">git</a>
				  			<a href="https://www.npmjs.com/">npm</a>
				  			<a href="https://pypi.python.org/pypi/pip">pip</a>
					
				  			<h3>ITEC 240 Windows Server Administration</h3>
				  			<h4>Helpful Links for the Course</h4>
				  			<a href="https://www.youtube.com/watch?v=OlUhfSRolIw">Eli the Computer Guy - Understanding Windows Server Editions</a>
				  			<a href="https://www.youtube.com/watch?v=tlI8okaWXVM&index=2&list=PLJcaPjxegjBVnEN8c6O8w1mNit4WGeAWN">Eli the Computer Guy - Introduction to Windows Server</a>
				  			<a href="https://www.youtube.com/watch?v=3DLTo-j9qck&index=3&list=PLJcaPjxegjBVnEN8c6O8w1mNit4WGeAWN">Eli the Computer Guy - Installing Windows Server 2012</a>
				  			<a href="https://www.youtube.com/watch?v=lFwek_OuYZ8">Eli the Computer Guy - Active Directory, Directory Services</a>
				  			<a href="https://www.youtube.com/watch?v=fJHFmt6F0Rc">Eli the Computer Guy - Introduction to File and Share Permissions</a>
						</div>

		  				</div>
					</div>
					<Footer/>
	        </div>

		);
	}

}