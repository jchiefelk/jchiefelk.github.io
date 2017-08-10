import React, {Component} from 'react';
import TimerMixin from 'react-timer-mixin';
import VideoBackground from './components/videobackground';
let HTML = require('./jsx/html');
import './css/main.css';

export default class Dashboard extends Component {
    constructor(){
        super();
    }

    render() {
      return (
            <div style={{justifyContent: 'center',flexDirection: 'column'}}>
                <VideoBackground/> 
                {HTML.renderAboutMe()}    
            </div>
      );
    }
}
