import React, {Component} from 'react';
import PDF from 'react-pdf-js';
import {NavLink} from 'react-router-dom'
import Scrollchor from 'react-scrollchor';;

class PdfView extends Component {
	constructor(props){
		super(props);

		this.state = {
		}
	}

	render(){
		return(
			<div>
				<PDF file="assets/CV-benoit-branchard-print.pdf" />
			</div>
		)
	}
}

export default PdfView;
