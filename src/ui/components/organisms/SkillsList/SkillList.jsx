import React, {Component} from 'react';

import {Container, Row, Col} from 'reactstrap';

import SkillCard from "../../molecules/SkillCard";

class SkillList extends Component {
	constructor(props){
		super(props);

		this.componentDidMount = this.componentDidMount.bind(this);
	}

	componentDidMount(){
	}

	render(){
		return(
			<ul className="row skill-list">
				<SkillCard
					title="Front-end"
					iconClass="fa fa-desktop"
					skills={[
						"HTML/CSS",
						"JavaScript (ES6)",
						"Bootstrap 3 et 4",
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
						"Symfony (PHP)",
						"SQL / MongoDB",
						"Linux / Apache / Nginx"
					]}
				/>
				<SkillCard
					title="Autre"
					iconClass="fa fa-gear"
					skills={[
						"Photoshop",
						"Anglais technique"
					]}
				/>
			</ul>
		)
	}
}

export default SkillList;
