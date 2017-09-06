import React, {Component} from 'react';
import {Element} from 'react-scroll';
import {Container, Row, Col} from 'reactstrap';

class Section extends Component {
	constructor(props){
		super(props);

		this.state = {};
	}

	render(){
		let {title, subTitle, children, id} = this.props;

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
				<Element name={id} className="element">
					<Container>
						<div className="titles">
							<Row className="title-row">
								<h2 className="col-12 text-center ">{title}</h2>
							</Row>
							{subTitleElm}
						</div>
						{children}
					</Container>
				</Element>
			</section>
		);
	}
}

export default Section;
