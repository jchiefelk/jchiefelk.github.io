import React, {  Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {

    constructor() {
        super();
        this.state={
            clicked: false,
            navClass: 'nav'
        };
    }

    handleResize(e) {
        this.setState({ windowWidth: window.innerWidth});
        if(this.state.windowWidth > 500) {
            this.setState({
                navClass: 'nav',
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
                        navClass: 'nav open',
                        clicked: true
                });
        } else {
                this.setState({
                        navClass: 'nav',
                        clicked: false
                });
        }
    }

	render() {
		/**
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
		**/
	    return(
            <header id="header">
                  <div className="container">

              		<Link to="/" style={{textDecoration: 'none', color: 'white'}}>Jackson Chief Elk</Link>

                    <nav className={this.state.navClass}  onClick={this.clickNav.bind(this)}>
                        <ul>
                            <li>
                              <Link to="about" style={{textDecoration: 'none', color: 'white'}}>about</Link>
                            </li>
                            <li>
                              <Link to="contact" style={{textDecoration: 'none', color: 'white'}}>connect</Link>
                            </li>
                        </ul>
                    </nav>
                  </div>
            </header>
	    );
	}

}