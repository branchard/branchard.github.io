import React from 'react';
import ReactDOM from 'react-dom';

import MainTemplate from "./components/templates/MainTemplate";
import Header from "./components/organisms/Header";
import Home from "./components/pages/Home";

class App extends React.Component {


    render() {
		function LayoutManager(props) {
	        return (
	            <MainTemplate header={<Header/>}>
	                {props.children}
	            </MainTemplate>
	        );
	    }

        return (
            <LayoutManager>
				<Home/>
            </LayoutManager>
        );
    }
};

export default App;
