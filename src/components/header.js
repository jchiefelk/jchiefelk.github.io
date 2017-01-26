import React, {  Component } from 'react';
import { Router, Route, Link } from 'react-router';

export default class Header extends Component {

	 constructor(){
	  		super();
	  		this.state = {
	  			width: window.innerWidth
	  		};
	 }
	 componentDidMount(){
	    window.addEventListener('resize', this.handleResize.bind(this));
	 }
	 componentWillUnmount(){
	    window.removeEventListener('resize', this.handleResize.bind(this));
	 }
  	 handleResize(e) {
	    this.setState({
	      windowWidth: window.innerWidth
	    });
   	 }
	render() {
	    return (
	      <div style={{display: 'flex', height: 50, backgroundColor: 'black', alignItems: 'center' }}>
	      	<Link to="/" style={{fontSize: 18,color: 'white', position: 'absolute', top: 15,left: 25, cursor: 'pointer', textDecoration: 'none'  }}>Node.js Boilerplate for Heroku Deployment</Link>
	      	<Link to="/about" style={{fontSize: 18,color: 'white', position: 'absolute', right: window.innerWidth*(0.2), top: 15, cursor: 'pointer', textDecoration: 'none' }}>About</Link>
	      	<Link to="/publishing" style={{fontSize: 18,color: 'white', position: 'absolute', right: window.innerWidth*(0.1) , top: 15, cursor: 'pointer', textDecoration: 'none' }}>Form</Link>
	      </div>
	    );
	}

}