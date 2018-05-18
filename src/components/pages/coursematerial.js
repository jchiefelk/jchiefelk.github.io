import React, {Component} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';



export default class CourseMaterial extends Component {


	render(){

		return(
			<div className="main">
				<Header/>
				<div className="about">
					<div className="row">
						<div className="middlecol">
						  <h3><a href="https://github.com/jchiefelk/ITEC-430">Scripting for Systems Administrators & DevOps</a></h3>  
						  <h3><a href="https://github.com/jchiefelk/ITEC-335">Administrating Networking Services in Linux</a></h3>
				  		  <h3><a href="https://github.com/jchiefelk/ITEC-240-241">Windows Server Administration</a></h3>
						</div>
		  				</div>
					</div>
					<Footer/>
	        </div>

		);
	}

}