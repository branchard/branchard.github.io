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
				<center>Ce portfolio n'est pas encore terminer, il le sera très prochainement ...</center>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
            </LayoutManager>
        );
    }
};

export default App;
