import React from 'react';
import VideoBg from './VideoBg';

class Hero extends React.Component {
	
  render() {
  	const divStyle = {
		height: '100vh'
	}
	const marginTop = {
		marginTop: 418.5
	}
	const zIndex = {
		zIndex: 3, 
		opacity: 0.65
	}
	const transformTranslate3d = {
		transformTranslate3d: (0, 0, 0)
	}
    return (
		<section id="home" className="hero video-background dark center nav-trigger" style={divStyle}>
		    <div id="bgVideo" data-0="transform: translate3d(0px, 0px, 0px);" className="skrollable skrollable-between" style={transformTranslate3d}>
		    		<VideoBg />
		    </div>
		    <div className="container hero-content" style={marginTop}>
		        <div className="col-xs-12 col-sm-10 col-sm-offset-1 skrollable skrollable-between" data-0="opacity: 0.65;" data-top-bottom="opacity: 0;" style={zIndex}>
		            <h1 className="titulo">stq</h1>                                    
		        </div>
		    </div>
		</section>
    );
  }
}

export default Hero;
