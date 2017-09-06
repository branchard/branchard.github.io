import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Container, Row, Col} from 'reactstrap';

class MainTemplate extends Component {
	static propTypes = {
		nav: PropTypes.node,
		header: PropTypes.node,
		children: PropTypes.any
	};

	constructor(props) {
    	super(props);
  	}

	render() {
		const {header, nav, children, ...props} = this.props;

		return (
	        <div {...props} className="app-layout main-template">
	            <div className="header-wrapper">{header}</div>
				<div className="nav-wrapper">{nav}</div>
				{children}
	        </div>
	    )
	}
}

/*MainTemplate.defaultProps = {
	header: <Header/>
};

MainTemplate.propTypes = {
    header: PropTypes.node,
    children: PropTypes.any
}*/

export default MainTemplate;
