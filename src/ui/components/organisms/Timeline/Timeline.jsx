import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Container, Row, Col} from 'reactstrap';
import {Card, CardImg, CardText, CardBlock, CardHeader,
	CardTitle, CardSubtitle, Button, Badge } from 'reactstrap';

import SkillCard from "../../molecules/SkillCard";

class Timeline extends Component {

	static propTypes = {
		content: PropTypes.array.isRequired,
	};

	constructor(props){
		super(props);

		this.state = {
			timelineHeight: 1000
		}

		this.cardsClass = "timeline-cards-444";

		this.renderCards = this.renderCards.bind(this);
		this.componentDidMount = this.componentDidMount.bind(this);
	}

	componentDidMount(){

		console.log(this.timelineRow);
		//document.querySelector("#experiences > div > div > div.timeline.row > div:nth-child(1)").clientHeight + 60px
		console.log(document.querySelectorAll(`.${this.cardsClass}`));
		let cards = document.querySelectorAll(`.${this.cardsClass}`);
		let totalHeight = 0;

		let marginHeight = 0;
		for (let i = 0; i < cards.length / 2; i++) {
			totalHeight += cards[i].clientHeight + 60;//marginHeight;
			marginHeight = 60;
		}

		this.setState({
			timelineHeight: totalHeight
		});
	}

	renderCards(){
		let cards = [];
		let that = this;
		this.props.content.forEach(function(item, i){
			let detailsList = [];
			if(item.details){
				item.details.forEach(function(detail, i){
					detailsList.push(
						<li key={i}>{detail}</li>
					)
				});
			}

			let techsBadges = [];
			if(item.techs){
				item.techs.forEach(function(tech, i){
					techsBadges.push(
						<Badge key={i}>{tech}</Badge>
					);
				});
			}

			cards.push(
				<Card key={i} tag="li" className={that.cardsClass}>
					<CardHeader>
						<div className="date-box">
							<span className="month">{item.dateBegin[0]}</span>
							<span className="year">{item.dateBegin[1]}</span>
						</div>
						<div className="date-box">
							<span className="chevron">
								<i className="fa fa-chevron-right" aria-hidden="true"></i>
							</span>
						</div>
						<div className="date-box">
							<span className="month">{item.dateEnd[0]}</span>
							<span className="year">{item.dateEnd[1]}</span>
						</div>
						<div className="titles">
							<CardTitle tag="h3">{item.title}</CardTitle>
							<CardSubtitle tag="h4">{item.subtitle}</CardSubtitle>
						</div>
			        </CardHeader>
					<CardBlock>
						<ul>
							{detailsList}
						</ul>
        			</CardBlock>
					<CardBlock className="techs">
						{techsBadges}
					</CardBlock>
				</Card>
			);
		});

		return cards;
	}

	render(){
		return(
			<Row className="timeline" tag="ul" style={{height: `${this.state.timelineHeight}px`}}>
				{this.renderCards()}
			</Row>
		)
	}
}

export default Timeline;
