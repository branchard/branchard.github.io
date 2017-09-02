import React, {Component} from "react";
import PropTypes from "prop-types";

import SkillList from "../../organisms/SkillsList"

class Home extends Component {
	constructor(props) {
		super(props)
	}

	render(){
		return(
			<div className="page-home">
				<SkillList/>
			</div>
		);
	}
}

export default Home;
