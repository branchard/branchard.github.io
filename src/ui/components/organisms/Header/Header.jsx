import React, {Component} from 'react';
import {Link} from 'react-scroll';
import QueueAnim from 'rc-queue-anim';
import Particles from 'react-particles-js';
import Typist from 'react-typist';

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

class Header extends Component {
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
								<Typist
									className="spe"
									component="span"
									cursor={{show: false}}
									startDelay={500}
									avgTypingDelay={150}
									stdTypingDelay={50}
								>
									Développeur Full Stack
								</Typist>
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
