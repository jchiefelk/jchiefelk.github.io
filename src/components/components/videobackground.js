import React, { Component } from 'react';
import '../../css/videobackground.css';

class VideoBackground extends Component {

	constructor(){
		super();
			this.index = 0;
			this.videosources = [
						{
							mp4: "https://s3-us-west-1.amazonaws.com/cointelmob/backgroundVideos/StandingRockHorseRiders2.mp4",
							webm: "https://s3-us-west-1.amazonaws.com/cointelmob/backgroundVideos/StandinRockHorseRiders2.webm"
						},

						{
							mp4: "https://s3-us-west-1.amazonaws.com/cointelmob/backgroundVideos/StandingRockHorseRiders.mp4" ,
							webm: "https://s3-us-west-1.amazonaws.com/cointelmob/backgroundVideos/StandinRockHorseRiders.webm"
						}

			];

			this.state ={
				mp4src: null,
				webmsrc: null,
				ended: false,
				index: 0,
				view: null
			};
	}

	componentDidMount(){

		this.setState({
				mp4src: this.videosources[0].mp4,
				webmsrc: this.videosources[0].webm,
				view: (
				<video id="background-video" onEnded={()=> {
						this.setState({
							ended: true, 
							view: null
						}); 


				}} autoPlay muted >
					  <source src={this.videosources[this.index].mp4} type="video/mp4"/>
					  <source src={this.videosources[this.index].webm} type="video/webm"/>
				</video>
				)
		});
	}

	componentDidUpdate(){

		if(this.state.ended==true){
			
			this.index+=1;
			if(this.index==(this.videosources.length) ){
				this.index = 0;
			}
			
			this.setState({
				ended: false,
				view: (
					<video id="background-video" onEnded={()=> {
								this.setState({
									ended: true, 
									view: null
								}); 
						}} autoPlay muted >
					  <source src={this.videosources[this.index].mp4} type="video/mp4"/>
					  <source src={this.videosources[this.index].webm} type="video/webm"/>
					</video>
				)
			});
		}
	}

	render() {
		return (this.state.view);
	}
};

export default VideoBackground;