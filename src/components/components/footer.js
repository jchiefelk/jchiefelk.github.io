import React, {  Component } from 'react';
import { Router, Route, Link } from 'react-router';


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
		// className="footer"
	    return (
			<div id="footer">
				 © Jackson Chief Elk
			</div>
	    );
	}

}