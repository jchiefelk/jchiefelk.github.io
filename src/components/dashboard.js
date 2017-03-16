import React, {Component} from 'react';
import TimerMixin from 'react-timer-mixin';
import VideoBackground from './components/videobackground';
import '../css/main.css';

export default class Dashboard extends Component {
	
    constructor(){
        super();
        this.aboutMe1 = "I'm deployed to Apple and Google Play App Stores, and Heroku.";
        this.state = {
            aboutMe1: '', 
            iterator: 0, 
            start1: false
        };
    }
    componentDidMount(){
         TimerMixin.setTimeout(
          () => { 
                this.setState({
                    aboutMe1: this.aboutMe1.charAt(0),
                    iterator: this.state.iterator+=1,
                    start1: true
                })
             },
          60
         );
    }
    componentDidUpdate(){
        if(this.state.start1===true) {
             TimerMixin.setTimeout(
              () => { 
                    this.setState({
                        aboutMe1: this.state.aboutMe1+this.aboutMe1.charAt(this.state.iterator),
                        iterator: this.state.iterator+=1
                    });
               },
              60
             );
        } 
        if(this.state.iterator==( this.aboutMe1.length) && this.state.start1==true ) {
            this.setState({ 
                start1: false, 
                iterator: this.state.iterator+=1
            });
        }
    }

  render() {

    return (
          <div className="dashboard">
                 
                    <p className="Title">Full Stack Engineer</p> 
              
                    <p className="About-Me">{this.state.aboutMe1}</p>
   
                    <VideoBackground/>

                    <div className="box">
                        <p> d</p>

                    </div>
          </div>
    );
  }


}
