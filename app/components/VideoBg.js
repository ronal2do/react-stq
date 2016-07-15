import React from 'react';

class VideoBg extends React.Component {
  constructor (props) {
        super(props);
        this.state = {
            videoURL: 'http://stqpublicidade.com.br/video/video.mp4'
        }
    }
    render () {
		const style = {
			display: 'fixed',
			top: 0,
			bottom: 0,
			right: 0,
			zIndex: -100,
			width: '100vw',
			height: '100vh',
			minHeight:'100vh'
		}
        return (
            <video id="video_background" loop autoPlay preload
				   style={style}>
                <source src={this.state.videoURL} type="video/mp4" />
                <source src={this.state.videoURL} type="video/ogg" />
                Your browser does not support the video tag
            </video>
        )
    }
}

export default VideoBg;
