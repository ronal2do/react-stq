import React from 'react';

const NotFound = (props) => {

	const content = {
	    textAlign: 'center',
	    display: 'inlineBlock'
	}


  return (
    <div style={{textAlign: 'center', display: 'tableCell', verticalAlign: 'middle'}}>
    	<div style={{textAlign: 'center',  display: 'inlineBlock', verticalAlign: 'middle'}}>
                <p style={{  color: 'white', fontSize: '72px' }}>=(</p>
                <p style={{  color: 'white', fontSize: '72px' }}>page not found 
                	<span className="fundo-verde">_404</span>
                </p>
    	</div>
    </div>
  );
};

export default NotFound;