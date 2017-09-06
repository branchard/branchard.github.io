import React, {Component} from 'react';

import {Container, Row, Col} from 'reactstrap';

import SkillCard from "../../molecules/SkillCard";

class ExperiencesList extends Component {
	constructor(props){
		super(props);

		this.componentDidMount = this.componentDidMount.bind(this);
	}

	componentDidMount(){
	}

	render(){
		return(
			<ul className="row experiences-list">
				<SkillCard
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
					title="Autre"
					iconClass="fa fa-gear"
					skills={[
						"Git",
						"Photoshop",
						"Anglais technique"
					]}
				/>
			</ul>
		)
	}
}

export default ExperiencesList;
