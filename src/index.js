import React from 'react';
import {render} from 'react-dom';
//import {BrowserRouter} from 'react-router-dom';
import App from './ui/App';

setTimeout(function(){
	render(
		<App/>,
		document.getElementById('app'),
	);
}, 223200);
