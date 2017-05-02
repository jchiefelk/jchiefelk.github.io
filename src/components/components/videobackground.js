import React, { Component } from 'react';
import '../css/main.css';

class VideoBackground extends Component {

	constructor(){
		super();
			this.index = 0;
			this.videosources = [
					{
						mp4: "https://s3-us-west-1.amazonaws.com/cointelmob/backgroundVideos/bigwavebackground.mp4",
						webm: "https://s3-us-west-1.amazonaws.com/cointelmob/backgroundVideos/bigwavebackground.webm"
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
				<video 
					id="background-video" 
					poster="https://www.lonelyplanet.com/travel-blog/tip-article/wordpress_uploads/2015/04/Lion-Rock-at-Piha-Beach.-Image-by-russellstreet-CC-BY-SA-2.0.jpg"
					onEnded={()=> {
						this.setState({
							ended: true, 
							view: null
						}); 
					}} 
					playsinline
					autoPlay 
					muted >
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
					<video 
						id="background-video" 
						poster="https://www.lonelyplanet.com/travel-blog/tip-article/wordpress_uploads/2015/04/Lion-Rock-at-Piha-Beach.-Image-by-russellstreet-CC-BY-SA-2.0.jpg"
						onEnded={()=> {
								this.setState({
									ended: true, 
									view: null
								}); 
						}} 
						autoPlay muted >
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