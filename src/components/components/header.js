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
				     <Navbar.Brand>
				    	<Link to="/" style={{textDecoration: 'none', color: 'white'}}>Jackson Chief Elk</Link>
				     </Navbar.Brand>
			      <Navbar.Toggle />
			    </Navbar.Header>

			    <Navbar.Collapse>
			    	<Nav pullRight>
				    	<NavItem><Link to="about" style={{textDecoration: 'none', color: 'white'}}>about</Link></NavItem>
		        		<NavItem><Link to="contact" style={{textDecoration: 'none', color: 'white'}}>connect</Link></NavItem>
	        		</Nav>
			    </Navbar.Collapse>
			  
			  </Navbar>
	    );
	}

}