import React, {Component} from 'react';

import Particles from 'react-particles-js';

/*const Header = () =>(
	<header>
		test header
	</header>
);*/

const particlesParams = {
	"particles": {
		"number": {
			"value": 50,
			"density": {
				"enable": true,
				"value_area": 1420
			}
		}
	},
    "interactivity": {
        "detect_on": "window",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 143,
                "line_linked": {
                    "opacity": 0.6
                }
            }
        }
    }
}

class Header extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<header id="app-header">
				<div className="particles">
					<Particles params={particlesParams}/>
				</div>
				<div className="centered-container">
					<div className="inner">
						<h1>
							<span>B. Branchard</span>
							<hr/>
							<span>Développeur Full Stack</span>
							<span className="cursor">_</span>
						</h1>
					</div>
				</div>
				<div className="next">
					<a href="#">
						En savoir plus
						<br/>
						<i className="fa fa-chevron-down"></i>
					</a>

				</div>
			</header>
		)
	}
}

export default Header;
