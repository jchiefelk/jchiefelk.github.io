import React, {Component} from 'react';
import VideoBackground from './components/videobackground';
let HTML = require('./jsx/html');


export default class Dashboard extends Component {
    constructor(){
        super();
    }

    render() {
        //   <VideoBackground/> 
      return (
            <div style={{justifyContent: 'center',flexDirection: 'column'}}>
                {HTML.renderAboutMe()}    
            </div>
      );
    }
}
