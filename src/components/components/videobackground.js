import React, { Component } from 'react';
import '../css/main.css';

class VideoBackground extends Component {

	constructor(){
		super();
			this.index = 0;


			this.state ={
				mp4src: null,
				webmsrc: null,
				ended: false,
				index: 0,
				view: null
			};
	}

	componentDidMount(){
		/**
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
					playsInline
					autoPlay 
					muted >
					  <source src={this.videosources[0].mp4} type="video/mp4"/>
					  <source src={this.videosources[0].webm} type="video/webm"/>
				</video>
				)
		});
		***/
	}

	componentDidUpdate(){
	
		/***
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
						playsInline 
						autoPlay 
						muted 
						>
					  <source src={this.videosources[this.index].mp4} type="video/mp4"/>
					  <source src={this.videosources[this.index].webm} type="video/webm"/>
					</video>
				)
			});
		}
		***/
	}


	renderVideoBackground() {
		// 
		return(
				<video 
					id="background-video" 

					onEnded={()=> {
						this.setState({
							ended: true, 
							view: null
						}); 
					}} 
					playsInline
					autoPlay 
					muted>
					  <source src={'https://giphy.com/gifs/LukAHGCMfxMbK/html5'} />
				</video>
		);
	}

	render() {
		return this.renderVideoBackground();
	}


};

export default VideoBackground;