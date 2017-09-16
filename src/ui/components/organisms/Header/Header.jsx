import React, {Component} from 'react';
import {Link} from 'react-scroll';
import QueueAnim from 'rc-queue-anim';
import Particles from 'react-particles-js';

const particlesParams = {
	"particles": {
		"number": {
			"value": 50,
			"density": {
				"enable": true,
				"value_area": parseInt(2000000/window.innerWidth) // dynamic particles density depending of the window width
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
		this.componentWillUnmount = this.componentWillUnmount.bind(this);
	}

	componentDidMount(){
		this._mounted = true;
		let that = this;

		// typing effect init
		setTimeout(function() {
			(function loop() {
			    var rand = Math.round(Math.random() * (260 - 75)) + 75;
			    setTimeout(function() {
					if(that._mounted) { // TODO: This is bad
						that.setState({
							typingEffect: that.state.typingEffect + textToType[that.state.typingEffect.length]
						})

						// continue typing effect if textToType is not entirely print
						if(that.state.typingEffect.length < textToType.length){
							loop();
						}
					}
			    }, rand);
			}());
		}, 500);
	}

	componentWillUnmount() {
	    this._mounted = false;
	}

	render(){
		return(
			<header id="app-header">
				<div className="particles">
					<Particles params={particlesParams}/>
				</div>
				<div className="centered-container">
					<div className="inner">
						<QueueAnim type="right" delay={300} duration={500}>
							<h1 key="c">
								<span>B. Branchard</span>
								<span className="spe">
									{this.state.typingEffect === undefined ? "Développeur Full Stack" : this.state.typingEffect}
								</span>
							</h1>
						</QueueAnim>
					</div>
				</div>
				<div className="next">
					<QueueAnim type="bottom" delay={300} duration={500}>
						<Link key="c" href="/skills" to="skills" smooth={true} spy={false}>
							En savoir plus
							<br/>
							<i className="fa fa-chevron-down"></i>
						</Link>
					</QueueAnim>
				</div>
			</header>
		)
	}
}

export default Header;
