import React from 'react';

class Hamburger extends React.Component {
constructor() {
	super();
	this.state = {
		open: false
	};
		this.handleClick = this.handleClick.bind(this);
		console.log(this);
	}
	handleClick() {
		this.setState({open: !this.state.open});
		console.log(this);	
	}
	render() {
		return (
		    <div className="header-handles-container">
			      <div className="handles-content">
			        <a href="#cd-nav" 
			           onClick={this.handleClick}
			           className="cd-nav-trigger triggered">
			          <span className="visually-hidden">
			            Menu
			          </span>
			          	<svg width="50px" height="56px" 
			          		xlinkHref="http://www.w3.org/1999/xlink" 
			          		version="1.1" id="Hexagon" x="0px" y="0px" 
			          		viewBox="0 0 48 54" xmlSpace="preserve" 
			          		enableBackground="new 0 0 48 54">      
			          	</svg>
			          <span className="cd-nav-icon"></span>
			        </a>
			      </div>
			</div>
    );
  }
}

export default Hamburger;
