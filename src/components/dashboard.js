import React, {Component} from 'react';
import TimerMixin from 'react-timer-mixin';
import VideoBackground from './components/videobackground';
let HTML = require('./jsx/html');
import '../css/main.css';

export default class Dashboard extends Component {
	
    constructor(){
        super();
        this.state = {
            aboutMe: '' 
        };
    }
    componentDidMount(){
        this.setState({
                aboutMe: HTML.renderAboutMe()
        });
    }

    render() {

      return (
            <div className="dashboard">
      
                      {this.state.aboutMe}
                      <VideoBackground/>
            </div>
      );
    }


}
