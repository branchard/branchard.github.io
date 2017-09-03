import React, {Component} from "react";
import PropTypes from "prop-types";

import Section from "../../organisms/Section"
import SkillList from "../../organisms/SkillsList"

class Home extends Component {
	constructor(props) {
		super(props)
	}

	render(){
		return(
			<div className="page-home">
				<Section
					title="Mes compétences"
					subTitle="Autodidacte, je peux acquérir de nouvelles compétences."
					id="skills"
				>
					<SkillList/>
				</Section>
			</div>
		);
	}
}

export default Home;
