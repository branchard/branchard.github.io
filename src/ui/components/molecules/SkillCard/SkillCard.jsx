import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Container, Row, Col} from 'reactstrap';

class SkillCard extends Component {
	static propTypes = {
		"title": PropTypes.string.isRequired,
		"iconClass": PropTypes.string.isRequired,
		"skills": PropTypes.arrayOf(PropTypes.string).isRequired
	};

	constructor(props){
		super(props);
	}

	render(){
		let skills = [];
		this.props.skills.forEach(function(skill, id){
			skills.push(
				<li key={id}>
					{skill}
				</li>
			);
		});

		return(
			<li className="skill-card col-12 col-lg-4">
				<i className={this.props.iconClass}/>
				<h3>{this.props.title}</h3>
				<ul>
					{skills}
				</ul>
			</li>
		)
	}
}

export default SkillCard;