import React, {Component} from 'react';

import {Container, Row, Col} from 'reactstrap';

class SkillList extends Component {
	constructor(props){
		super(props);

		this.componentDidMount = this.componentDidMount.bind(this);
	}

	componentDidMount(){
	}

	render(){
		return(
			<Container>
				<Row>
					<h2>Skills</h2>
				</Row>
			</Container>
		)
	}
}

export default SkillList;
