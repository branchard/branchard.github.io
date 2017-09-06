import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter,
	Redirect,
	Switch,
	Route,
	Link,
	withRouter
} from "react-router-dom";
import {Events, scrollSpy, scroller, animateScroll} from 'react-scroll';

import MainTemplate from "./components/templates/MainTemplate";
import Header from "./components/organisms/Header";
import NavMenu from "./components/organisms/NavMenu";
import Home from "./components/pages/Home";

class App extends React.Component {

	constructor(props){
		super(props);

		this.scrollTo = false; // used to prevent pushState when scrollTo history
		this.componentDidMount = this.componentDidMount.bind(this);
	}

	componentDidMount(){
		console.log("### App.jsx DidMount ###");
		//console.log(scrollSpy);
		let that = this;
		/*scrollSpy.addSpyHandler(function(){
			let callback = function(){
				console.log("this is a callback");
			}

			return callback;
		});*/
		const hash = window.location.pathname;
		if (hash !== ''){
			scroller.scrollTo(hash.replace('/', ''), {
				smooth: true
			});
		}

		Events.scrollEvent.register('begin', function(to, element){
		    console.log("begin", arguments);
			//console.log(to, element);
			//window.location.hash = `#${to}`;
			if(!that.scrollTo){
				console.log("push to history");
				history.pushState({anchor: to}, `${to}`, `${to}`)
			}
			that.scrollTo = false;
		});

		window.onpopstate = function(event){
			console.log(event);
			if (event.state && event.state.anchor) {
				that.scrollTo = true;
			    scroller.scrollTo(event.state.anchor, {
			        smooth: true
				});
			}else{
				animateScroll.scrollToTop();
			}
		}

		Events.scrollEvent.register('end', function(to, element) {
		    //console.log("end", arguments);
		});
	}

	componentWillUnmount() {
	    Events.scrollEvent.remove('begin');
	    Events.scrollEvent.remove('end');
  	}

	hashLinkScroll() {
	    const hash = window.location.pathname;
		console.log("hashLinkScroll: ", hash);
	    if (hash !== '') {
	        // Push onto callback queue so it runs after the DOM is updated,
	        // this is required when navigating from a different page so that
	        // the element is rendered on the page before trying to getElementById.
	        setTimeout(() => {
	            const id = hash.replace('/', '');
	            const element = document.getElementById(id);
	            if (element)
	                element.scrollIntoView();
	            }
	        , 0);
	    }
	}


    render() {
		function LayoutManager(props) {
	        return (
	            <MainTemplate header={<Header/>} nav={<NavMenu/>}>
	                {props.children}
	            </MainTemplate>
	        );
	    }

		//this.hashLinkScroll();

        return (
            <LayoutManager>
				<Home/>
            </LayoutManager>
        );
    }
};

export default App;
