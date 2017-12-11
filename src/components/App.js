import React, { Component } from 'react';
import Dashboard from './dashboard';
import Header from './components/header';
import Footer from './components/footer';
import About from './pages/about';
import CourseMaterial from './pages/coursematerial';
import { Router, Route, Link } from 'react-router'

class App extends Component {

    render() {

    	// redo header with mobile responsive css
    	// 		<Header/>
        return(
        	<div> 
                <Header/>
                <CourseMaterial/>
                <Footer/>
            </div>
        );
    }
}
export default App;
