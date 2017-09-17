import React, {Component} from 'react';
import {Element} from 'react-scroll';
import {Container, Row, Col} from 'reactstrap';

import {OverPack as ScrollOverPack} from "rc-scroll-anim";
import QueueAnim from 'rc-queue-anim';
import Tween from 'rc-tween-one';

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
				<Tween
				  key="2"
				  animation={{ x: -30, type: 'from', ease: 'easeOutQuart', opacity: 0, delay: 100 }}
				>
					<Row className="subtitle-row">
						<p className="col-12 text-center ">{subTitle}</p>
					</Row>
				</Tween>
			);
		}

		return(
			<section className={`page-section ${secondary ? "secondary" : ""}`} id={id}>
				<Element name={id} className="element">
					<Container style={style}>
						<div className="titles">
							<ScrollOverPack
								playScale="10vh"
							>
								<Tween
						          key="1"
						          animation={{x: 30, type: 'from', ease: 'easeOutQuart', opacity: 0}}
						        >
									<Row className="title-row">
												<h2 className="col-12 text-center ">{title}</h2>
									</Row>
								</Tween>
								{subTitleElm}
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
