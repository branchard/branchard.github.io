import React, {Component} from 'react';
import {Link} from 'react-scroll';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import QueueAnim from 'rc-queue-anim';

class NavMenu extends Component {
	constructor(props){
		super(props);

	    this.state = {
	    	isOpen: false
	    };

		this.fixNavbar = this.fixNavbar.bind(this);
		this.toggle = this.toggle.bind(this);
		this.componentDidMount = this.componentDidMount.bind(this);
		this.componentWillUnmount = this.componentWillUnmount.bind(this);
	}

	toggle() {
	    this.setState({
	        isOpen: !this.state.isOpen
	    });
	}

	fixNavbar() {
		let headerHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - (this.navbarContainer.offsetHeight);
	    if (window.pageYOffset > headerHeight) {
	        this.navbarContainer.classList.add("bg");
	    } else {
	        this.navbarContainer.classList.remove("bg");
	    }
	}

	componentDidMount(){
		let that = this;
		window.onscroll = function() {
    		that.fixNavbar();
		}
	}

	componentWillUnmount() {
	}

	render(){
		return(
			<div className="nav-menu" ref={(ref) => this.navbarContainer = ref}>
				<Navbar light inverse toggleable>
					<NavbarToggler right onClick={this.toggle}/>
					<Collapse navbar isOpen={this.state.isOpen}>
						{/* <Nav className="ml-auto" navbar> */}
							<QueueAnim
								component={Nav}
								componentProps={{className:"ml-auto", navbar: true}}
								type="top"
								delay={500}
								duration={500}
								interval={15}
							>
								<NavItem key={0}>
									<Link className="nav-link" href="/skills" to="skills" smooth={true} spy={true}>
										Compétences
									</Link>
								</NavItem>
								<NavItem key={1}>
									<Link className="nav-link" href="/experiences" to="experiences" smooth={true} spy={true}>
										Expériences
									</Link>
								</NavItem>
								<NavItem key={2}>
									<Link className="nav-link" href="/trainings" to="trainings" smooth={true} spy={true}>
										Formations
									</Link>
								</NavItem>
								<NavItem key={3}>
									<NavLink href="https://github.com/branchard">Github</NavLink>
								</NavItem>
							</QueueAnim>
						{/* </Nav> */}
					</Collapse>
				</Navbar>
			</div>
		)
	}
}

export default NavMenu;
