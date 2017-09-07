import React, {Component} from "react";
import PropTypes from "prop-types";

import Section from "../../organisms/Section";
import SkillList from "../../organisms/SkillsList";
import Timeline from "../../organisms/Timeline";
//import PdfView from "../../organisms/PdfView";
import Footer from "../../organisms/Footer";

class Home extends Component {
	constructor(props) {
		super(props)
	}

	render(){
		return(
			<div className="page-home">
				<Section
					title="Compétences"
					subTitle="Autodidacte, je peux acquérir de nouvelles compétences."
					id="skills"
				>
					<SkillList/>
				</Section>
				<Section
					title="Expériences"
					id="experiences"
					secondary
				>
					<Timeline
						content={[
							{
								dateBegin: ["Fév.", "2017"],
								dateEnd: ["Juil.", "2017"],
								title: "Développeur web (stage)",
								subtitle: "ASTMICRO - Gien (45)",
								details: [
									"Conception, en autonomie, d'un panel « single page » de gestion de boutique eBay",
									"Création d’une interface WYSIWYG",
									"Utilisation de l’API eBay"
								],
								techs: [
									"Node.js",
									"Meteor",
									"MongoDB",
									"React",
									"Bootstrap 4",
									"HTML",
									"CSS",
									"JavaScript"
								]
							},
							{
								dateBegin: ["Oct.", "2016"],
								dateEnd: ["Fév.", "2017"],
								title: "Développeur web (projet tutoré)",
								subtitle: "Mme. Brossier - Orléans (45)",
								details: [
									"Mise en place d’une interface web pour créer des CV et des lettres de motivation",
									"Travail en groupe de 7",
									"Méthode de développement"
								],
								techs: [
									"Silex",
									"PHP Objet",
									"SQL",
									"Twig",
									"jQuery",
									"Bootstrap 3",
									"HTML",
									"CSS",
									"JavaScript",
									"Git"
								]
							},
							{
								dateBegin: ["Avr.", "2015"],
								dateEnd: ["Juin", "2015"],
								title: "Développeur web (stage)",
								subtitle: "Marie - Dampierre-en-Burly (45)",
								details: [
									"Conception d’une interface web de dépôt de fichiers",
								],
								techs: [
									"Django",
									"Jinja",
									"Python",
									"MySQL",
									"jQuery",
									"Bootstrap 3",
									"HTML",
									"CSS",
									"JavaScript"
								]
							},
							{
								dateBegin: ["Nov.", "2014"],
								dateEnd: ["Mars", "2015"],
								title: "Développeur mobile (projet tutoré)",
								subtitle: "Compagnie Aede - Orléans (45)",
								details: [
									"Développement d’une application mobile multiplateforme",
								],
								techs: [
									"Apache Cordova",
									"Javascript"
								]
							},
						]}
					/>
				</Section>
				<Section
					title="Formations"
					id="trainings"
				>
					<Timeline
						content={[
							{
								dateBegin: ["Fév.", "2017"],
								dateEnd: ["Juil.", "2017"],
								title: "Développeur web (stage)",
								subtitle: "ASTMICRO - Gien (45)",
								details: [
									"Conception, en autonomie, d'un panel « single page » de gestion de boutique eBay",
									"Création d’une interface WYSIWYG",
									"Utilisation de l’API eBay"
								],
								techs: [
									"Node.js",
									"Meteor",
									"MongoDB",
									"React",
									"Bootstrap 4",
									"HTML",
									"CSS",
									"JavaScript"
								]
							},
							{
								dateBegin: ["Oct.", "2016"],
								dateEnd: ["Fév.", "2017"],
								title: "Développeur web (projet tutoré)",
								subtitle: "Mme. Brossier - Orléans (45)",
								details: [
									"Mise en place d’une interface web pour créer des CV et des lettres de motivation",
									"Travail en groupe de 7",
									"Méthodes de développement"
								],
								techs: [
									"Silex",
									"PHP Objet",
									"SQL",
									"Twig",
									"jQuery",
									"Bootstrap 3",
									"HTML",
									"CSS",
									"JavaScript",
									"Git"
								]
							},
							{
								dateBegin: ["Avr.", "2015"],
								dateEnd: ["Juin", "2015"],
								title: "Développeur web (stage)",
								subtitle: "Marie - Dampierre-en-Burly (45)",
								details: [
									"Conception d’une interface web de dépôt de fichiers",
								],
								techs: [
									"Django",
									"Jinja",
									"Python",
									"MySQL",
									"jQuery",
									"Bootstrap 3",
									"HTML",
									"CSS",
									"JavaScript"
								]
							},
							{
								dateBegin: ["Nov.", "2014"],
								dateEnd: ["Mars", "2015"],
								title: "Développeur mobile (projet tutoré)",
								subtitle: "Compagnie Aede - Orléans (45)",
								details: [
									"Développement d’une application mobile multiplateforme",
								],
								techs: [
									"Apache Cordova",
									"Javascript"
								]
							},
						]}
					/>
				</Section>
				{/* <PdfView scale={10.0}/> */}
				<Footer/>
			</div>
		);
	}
}

export default Home;
