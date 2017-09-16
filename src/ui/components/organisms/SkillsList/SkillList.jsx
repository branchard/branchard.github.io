import React, {Component} from 'react';

import {Container, Row, Col} from 'reactstrap';

import SkillCard from "../../molecules/SkillCard";

import {OverPack as ScrollOverPack} from "rc-scroll-anim";
import QueueAnim from 'rc-queue-anim';

class SkillList extends Component {
	constructor(props){
		super(props);

		this.componentDidMount = this.componentDidMount.bind(this);
	}

	componentDidMount(){
	}

	render(){
		return(
			<ScrollOverPack
				playScale="10vh"
			>
				<QueueAnim component="ul" className="row skill-list" key='queueAnim'>
					<SkillCard
						key="a"
						title="Front-end"
						iconClass="fa fa-desktop"
						skills={[
							"HTML/CSS",
							"SASS",
							"Bootstrap 3 et 4",
							"JavaScript (ES6)",
							"jQuery",
							"React"
						]}
					/>
					<SkillCard
						key="b"
						title="Back-end"
						iconClass="fa fa-server"
						skills={[
							"Node.js",
							"Meteor",
							"Django (Python)",
							"Silex (PHP orienté objet)",
							"SQL / MongoDB",
							"Linux / Apache / Nginx"
						]}
					/>
					<SkillCard
						key="c"
						title="Autre"
						iconClass="fa fa-gear"
						skills={[
							"Git",
							"Photoshop",
							"Anglais technique"
						]}
					/>
				</QueueAnim>
			</ScrollOverPack>
		)
	}
}

export default SkillList;
