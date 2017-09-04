import React from "react";

import {Container, Row, Col} from 'reactstrap';

const Footer = ({}) => {
	return(
		<footer className="page-footer">
			<Container>
				<Row>
					<span className="col-12 text-center copyright">B. Branchard © 2017.</span>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
