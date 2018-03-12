import React, {Component} from 'react';
import Header from '../components/header';
import { Router, Route, Link } from 'react-router'


export default class Contact extends Component {

	render(){
		return(
			<div style={{display: 'flex',flexDirection: 'column'}}> 
	        	<Header/>

	        	<div style={{marginTop: 100,display: 'flex', flex: 1, alignItems: 'center',justifyContent: 'center', flexDirection: 'column'}}>
		        	<p>email - jackson_chiefelk@skc.edu</p>
		        	<p>phone - (406)-275-4800 ext. 4898</p>
	       		</div>

	        </div>
		);
	}
}