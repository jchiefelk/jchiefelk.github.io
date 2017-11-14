import React, { Component } from 'react';
import Dashboard from './dashboard';
import Header from './components/header';
import Footer from './components/footer';
import About from './pages/about';
import { Router, Route, Link } from 'react-router'

class App extends Component {

    render() {

    	// redo header with mobile responsive css
    	// 		<Header/>
        return(
        	<div style={{display: 'flex',flexDirection: 'column'}}> 
        
                <Dashboard/>
                <Footer/>
            </div>
        );
    }
}
export default App;
