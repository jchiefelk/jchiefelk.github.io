import React, { Component } from 'react';
import Dashboard from './dashboard';
import Header from './components/header';
import Footer from './components/footer';
import About from './pages/about';
import { Router, Route, Link } from 'react-router'

class App extends Component {

    render() {
        return(
        	<div style={{display: 'flex',flexDirection: 'column'}}> 
        		<Header/>
                <Dashboard/>
                <Footer/>
            </div>
        );
    }
}
export default App;
