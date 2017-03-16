import React, { Component } from 'react';
import Dashboard from './dashboard';
import Header from './components/header';
import { Router, Route, Link } from 'react-router'

class App extends Component {

    render() {
        return(
        	<div style={{alignItems: 'center'}}> 
        		<Header/>
                <Dashboard/>
            </div>
        );
    }
}
export default App;
