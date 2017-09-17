import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Container, Row, Col} from 'reactstrap';
import {OverPack as ScrollOverPack} from "rc-scroll-anim";
import Tween from 'rc-tween-one';

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
		let that = this;
		this.props.skills.forEach(function(skill, id){
			skills.push(
				<Tween
				  key={id}
				  component="li"
				  animation={{x: -30, type: 'from', ease: 'easeOutQuart', opacity: 0, delay: id * 150 + that.props.delay}}
				>
					{skill}
				</Tween>
			);
		});

		return(
			<li className="skill-card col-12 col-lg-4">
				<ScrollOverPack
					playScale="15vh"
				>
					<Tween
					  key={1}
					  animation={{x: 30, type: 'from', ease: 'easeOutQuart', opacity: 0, delay: this.props.delay}}
					>
						<i className={this.props.iconClass}/>
					</Tween>
					<Tween
					  key={2}
					  animation={{x: -30, type: 'from', ease: 'easeOutQuart', opacity: 0, delay: this.props.delay + 100}}
					>
						<h3>{this.props.title}</h3>
					</Tween>
				</ScrollOverPack>
				<ScrollOverPack
					playScale="10vh"
					component="ul"
				>
					{skills}
				</ScrollOverPack>
		</li>
		)
	}
}

export default SkillCard;
