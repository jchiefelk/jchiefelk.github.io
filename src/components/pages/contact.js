import React, {Component} from 'react';
import Header from '../components/header';
import { Router, Route, Link } from 'react-router'


export default class Contact extends Component {

	render(){
		return(
			<div style={{display: 'flex',flexDirection: 'column'}}> 
	        	<Header/>

	        	<div style={{display: 'flex', flex: 1, alignItems: 'center',justifyContent: 'center', flexDirection: 'column'}}>
		        	<p>email - jchiefelk@gmail.com</p>
		        	<p>phone - (831)-588-6504</p>
	       		</div>

	        </div>
		);
	}
}