import React, {Component} from "react";
import PropTypes from "prop-types";

import Section from "../../organisms/Section";
import SkillList from "../../organisms/SkillsList";
import PdfView from "../../organisms/PdfView";
import Footer from "../../organisms/Footer";

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
				{/* <PdfView/> */}
				<Footer/>
			</div>
		);
	}
}

export default Home;
