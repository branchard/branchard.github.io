import React from "react";

import {Container, Row, Col, Button} from 'reactstrap';

const Footer = ({}) => {
	return(
		<footer className="page-footer">
			<Container>
				<Row>
					<a href="/assets/CV-benoit-branchard-print.pdf" className="mx-auto btn btn-outline-secondary">Télécharger mon CV</a>
				</Row>
				<Row>
					<span className="col-12 text-center copyright">B. Branchard © 2017.</span>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
