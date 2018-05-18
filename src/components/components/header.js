import React, {  Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    constructor() {
        super();
        this.state={
            clicked: false,
            navClass: 'topnav'
        };
    }
    handleResize(e) {
        this.setState({ windowWidth: window.innerWidth});
        if(this.state.windowWidth > 500) {
            this.setState({
                navClass: 'topnav',
                clicked: false
            });
        }
    }
    componentDidMount() {
        window.addEventListener('resize', this.handleResize.bind(this))
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }
    clickNav(){
        if(this.state.clicked===false){
                this.setState({
                        navClass: 'topnav responsive',
                        clicked: true
                });
        } else {
                this.setState({
                        navClass: 'topnav',
                        clicked: false
                });
        }
    }
	render() {

	    return(
            <div className={this.state.navClass} id="myTopnav">
              <Link to="/">Jackson Chief Elk</Link>
              <Link to="classes">Classes</Link>
              <Link to="contact">Connect</Link>
              <a href="javascript:void(0);" className="icon" onClick={this.clickNav.bind(this)}>
                <i className="fa fa-bars"></i>
              </a>
            </div>
	    );
	}
}