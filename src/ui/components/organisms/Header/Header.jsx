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
        "detect_on": "canvas",
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

const textToType = "Développeur Full Stack";

class Header extends Component {
	constructor(props){
		super(props);

		this.state = {
			typingEffect: ""
		}

		this.componentDidMount = this.componentDidMount.bind(this);
	}

	componentDidMount(){
		let that = this;

		// typing effect init
		setTimeout(function() {
			(function loop() {
			    var rand = Math.round(Math.random() * (300 - 100)) + 100;
			    setTimeout(function() {
					that.setState({
						typingEffect: that.state.typingEffect + textToType[that.state.typingEffect.length]
					})
					if(that.state.typingEffect.length < textToType.length){
						loop();
					}
			    }, rand);
			}());
		}, 500);
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
							<span className="spe">
								{this.state.typingEffect === undefined ? "Développeur Full Stack" : this.state.typingEffect}
							</span>
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
