import React, {  Component } from 'react';
import { Router, Route, Link } from 'react-router';
import { Navbar, Nav, NavItem} from 'react-bootstrap';



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
		// style={{backgroundColor: 'black', borderColor:'transparent', width: this.state.windowWidth }}

	    return (

			 <Navbar inverse collapseOnSelect style={{backgroundColor: 'black', borderColor:'transparent', width: this.state.windowWidth , fontSize: 14, fontFamily: 'Avante Garde',fontWeight: '500',color: 'white', cursor: 'pointer', textDecoration: 'none' }}>
			    <Navbar.Header>
			      <Navbar.Brand >
			      	<a href="http://jchiefelk.github.io/" >Jackson Chief Elk </a>
			      </Navbar.Brand>
			      <Navbar.Toggle />
			    </Navbar.Header>
			   
			    <Navbar.Collapse>
			    	<Nav pullRight>
				    	<NavItem href="#">about</NavItem>
		      			<NavItem href="#">work</NavItem>
		        		<NavItem href="#">connect</NavItem>
	        		</Nav>
			    </Navbar.Collapse>
			  
			  </Navbar>
	    );
	}

}