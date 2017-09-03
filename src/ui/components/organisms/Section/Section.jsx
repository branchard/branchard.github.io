import React from "react";

import {Container, Row, Col} from 'reactstrap';

const Section = ({title, subTitle, children, id}) => {
	let subTitleElm;
	if(subTitle){
		subTitleElm = (
			<Row className="subtitle-row">
				<p className="col-12 text-center ">{subTitle}</p>
			</Row>
		);
	}

	return(
		<section className="page-section" id={id}>
			<Container>
				<Row className="title-row">
					<h2 className="col-12 text-center ">{title}</h2>
				</Row>
				{subTitleElm}
				{children}
			</Container>
		</section>
	);
};

export default Section;
