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
	      	<Link to="/" style={{fontSize: 18,fontFamily: 'Courier New',color: 'white', position: 'absolute', top: 15,left: 25, cursor: 'pointer', textDecoration: 'none'  }}>Jackson Chief Elk</Link>
	      	<p  style={{fontSize: 18,fontFamily: 'Courier New' ,color: 'white', position: 'absolute', right: window.innerWidth*(0.2), top: 15, textDecoration: 'none' }}>Portfolio</p>
	      </div>
	    );
	}

}