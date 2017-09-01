import React from 'react';
import ReactDOM from 'react-dom';

import MainTemplate from "./components/templates/MainTemplate";
import Header from "./components/organisms/Header";

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
				child
            </LayoutManager>
        );
    }
};

export default App;
