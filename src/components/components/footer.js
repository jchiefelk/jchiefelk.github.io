import React, {  Component } from 'react';
import { Router, Route, Link } from 'react-router';
import { Navbar, Nav, NavItem} from 'react-bootstrap';



export default class Footer extends Component {

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
			<div style={{display: 'flex', height: 50, color: 'black', alignItems: 'center', justifyContent: 'center'}}>
				 © Jackson Chief Elk
			</div>
	    );
	}

}