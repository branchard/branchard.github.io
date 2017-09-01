import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Container, Row, Col} from 'reactstrap';

class MainTemplate extends Component {
	static propTypes = {
		header: PropTypes.node,
		children: PropTypes.any
	};

	constructor(props) {
    	super(props);
  	}

	render() {
		const {header, children, ...props} = this.props;
		console.log(this.props);


		return (
	        <div {...props} className="app-layout main-template">
	            <div className="header-wrapper">{header}</div>
				<div className="app-body">
					<main className="main">
						<div className="main-overlay" onClick={this.overlayClickHandler}></div>

						<Container className="main-container" fluid={true}>
							{children}
						</Container>
					</main>
				</div>
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
