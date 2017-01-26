import React, { Component } from 'react';
import '../css/videobackground.css';

class VideoBackground extends Component {

	render() {

			return (
					<video id="background-video" loop autoPlay muted playsInline>
					  <source src="https://s3-us-west-1.amazonaws.com/cointelmob/backgroundVideos/StandingRockHorseRiders.mp4" type="video/mp4"/>
					  <source src="https://s3-us-west-1.amazonaws.com/cointelmob/backgroundVideos/StandinRockHorseRiders.webm" type="video/webm"/>
					</video>
			);
	}
};

export default VideoBackground;