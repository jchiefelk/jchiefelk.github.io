import React, {  Component } from 'react';
import { Router, Route, Link } from 'react-router';
import { Navbar, Nav, NavItem, MenuItem,NavDropdown } from 'react-bootstrap';



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


	/*****
	      <div style={{display: 'flex', height: 60, backgroundColor: 'black', alignItems: 'center' }}>
	      	<a href="http://jchiefelk.github.io/" style={{fontSize: 13, fontFamily: 'Courier New',color: 'white', position: 'absolute', top: 15,left: 25, cursor: 'pointer', textDecoration: 'none'  }}>Jackson Chief Elk </a>
	      	<a href="http://node-quandl.herokuapp.com/" style={{fontSize: 13,fontFamily: 'Courier New' ,color: 'white', position: 'absolute', right: window.innerWidth*(0.7), top: 17, textDecoration: 'none' }}>Stock Market Analysis</a>
	      	<a href="https://github.com/jchiefelk/pentesting" style={{fontSize: 13,fontFamily: 'Courier New' ,color: 'white', position: 'absolute', right: window.innerWidth*(0.5), top: 17, textDecoration: 'none' }}>Pentesting</a>
	        <a href="https://github.com/jchiefelk/flask-react-form/" style={{fontSize: 13,fontFamily: 'Courier New' ,color: 'white', position: 'absolute', right: window.innerWidth*(0.3), top: 17, textDecoration: 'none' }}>React-Flask</a>
	      	<a href="http://www.activily.com" style={{fontSize: 13,fontFamily: 'Courier New' ,color: 'white', position: 'absolute', right: window.innerWidth*(0.1), top: 17, textDecoration: 'none' }}>Activily</a>
	      </div>
	****/


	    return (


			 <Navbar inverse collapseOnSelect style={{backgroundColor: 'black', borderColor:'transparent', width: this.state.windowWidth }}>
			    
			    <Navbar.Header>
			      <Navbar.Brand >
			      	<a href="http://jchiefelk.github.io/" style={{fontSize: 13, fontFamily: 'Courier New',color: 'white', cursor: 'pointer', textDecoration: 'none'  }}>Jackson Chief Elk </a>
			      </Navbar.Brand>
			      <Navbar.Toggle />
			    </Navbar.Header>


			    <Navbar.Collapse >
			    	<a href="http://node-quandl.herokuapp.com/" style={{fontSize: 13,fontFamily: 'Courier New' ,color: 'white', position: 'absolute', right: window.innerWidth*(0.6), top: 17, textDecoration: 'none' }}>Stock Market Analysis</a>
	      			<a href="https://github.com/jchiefelk/pentesting" style={{fontSize: 13,fontFamily: 'Courier New' ,color: 'white', position: 'absolute', right: window.innerWidth*(0.45), top: 17, textDecoration: 'none' }}>Pentesting</a>
	        		<a href="https://github.com/jchiefelk/flask-react-form/" style={{fontSize: 13,fontFamily: 'Courier New' ,color: 'white', position: 'absolute', right: window.innerWidth*(0.3), top: 17, textDecoration: 'none' }}>React-Flask</a>
	      			<a href="http://www.activily.com" style={{fontSize: 13,fontFamily: 'Courier New' ,color: 'white', position: 'absolute', right: window.innerWidth*(0.15), top: 17, textDecoration: 'none' }}>Activily</a>
			    </Navbar.Collapse>
			  </Navbar>



	    );
	}

}