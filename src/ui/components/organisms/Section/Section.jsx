import React, {Component} from 'react';
import {Element} from 'react-scroll';
import {Container, Row, Col} from 'reactstrap';

import {OverPack as ScrollOverPack} from "rc-scroll-anim";
import QueueAnim from 'rc-queue-anim';

class Section extends Component {
	constructor(props){
		super(props);

		this.state = {};
	}

	render(){
		let {title, subTitle, children, id, secondary, style} = this.props;

		let subTitleElm;
		if(subTitle){
			subTitleElm = (
				<Row key="b" className="subtitle-row">
					<p className="col-12 text-center ">{subTitle}</p>
				</Row>
			);
		}

		return(
			<section className={`page-section ${secondary ? "secondary" : ""}`} id={id}>
				<Element name={id} className="element">
					<Container style={style}>
						<div className="titles">
							<ScrollOverPack
								playScale="5vh"
							>
								<QueueAnim key='queueAnim' interval={25}>
									<Row key="a" className="title-row">
												<h2 className="col-12 text-center ">{title}</h2>
									</Row>
									{subTitleElm}
								</QueueAnim>
							</ScrollOverPack>
						</div>
						{children}
					</Container>
				</Element>
			</section>
		);
	}
}

export default Section;
