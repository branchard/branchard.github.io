import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Container, Row, Col} from 'reactstrap';
import {Card, CardImg, CardText, CardBlock, CardHeader,
	CardTitle, CardSubtitle, Button, Badge } from 'reactstrap';

//import SkillCard from "../../molecules/SkillCard";
import {OverPack as ScrollOverPack} from "rc-scroll-anim";
import QueueAnim from 'rc-queue-anim';

function guidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
} // TODO move in "utils" module

class Timeline extends Component {

	static propTypes = {
		content: PropTypes.array.isRequired,
	};

	constructor(props){
		super(props);

		this.state = {
			timelineHeight: 1000
		}

		this.cardsClass = `timeline-cards-${guidGenerator()}`;

		this.defineContainerHeight = this.defineContainerHeight.bind(this);
		this.renderCards = this.renderCards.bind(this);
		this.componentDidMount = this.componentDidMount.bind(this);
	}

	defineContainerHeight(){
		let cards = document.querySelectorAll(`.${this.cardsClass}`);
		let totalHeight = 0;
		let isBreakSize = window.innerWidth < 991;

		let marginHeight = (isBreakSize ? 60 : 80);
		for (let i = 0; i < cards.length / (isBreakSize ? 1 : 2); i++) {
			totalHeight += cards[i].clientHeight + marginHeight;// 60 = margin-top height;
			//marginHeight = 80;
		}

		this.setState({
			timelineHeight: totalHeight
		});
	}

	componentDidMount(){
		let that = this;
		this.defineContainerHeight();
		window.addEventListener('resize', () => {this.defineContainerHeight();});
	}

	renderCards(){
		let cards = [];
		let that = this;
		this.props.content.forEach(function(item, i){
			let detailsList = [];
			let detailsListUl;
			if(item.details){
				item.details.forEach(function(detail, i){
					detailsList.push(
						<li key={i}>{detail}</li>
					)
				});

				detailsListUl = (
					<ul>{detailsList}</ul>
				);
			}

			let detail;
			if(item.detail){
				detail = (
					<p>{item.detail}</p>
				)
			}

			let techsBadges = [];
			let techsBadgesBlock;
			if(item.techs){
				item.techs.forEach(function(tech, i){
					techsBadges.push(
						<Badge key={i}>{tech}</Badge>
					);
				});

				techsBadgesBlock = (
					<CardBlock className="techs">
						{techsBadges}
					</CardBlock>
				);
			}

			let dateBox;
			if(item.dateBegin && item.dateEnd){
				dateBox = (
					<div className="date-box-container">
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
					</div>
				);
			}else if (item.dateBegin){
				dateBox = (
					<div className="date-box-container">
						<div className="date-box">
							<span className="month" style={{width: "7rem"}}>Depuis {item.dateBegin[0]}</span>
							<span className="year">{item.dateBegin[1]}</span>
						</div>
					</div>
				);
			}


			cards.push(
				<Card key={i} tag="li" className={that.cardsClass}>
					<CardHeader>
						{dateBox}
						<div className="titles">
							<CardTitle tag="h3">{item.title}</CardTitle>
							<CardSubtitle tag="h4">{item.subtitle}</CardSubtitle>
						</div>
			        </CardHeader>
					<CardBlock>
						{detailsListUl}
						{detail}
        			</CardBlock>
					{techsBadgesBlock}
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
