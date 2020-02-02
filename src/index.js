import React from 'react';
import ReactDOM from 'react-dom';
import AddEmp from './components/addEmp'
import ViewSal from './components/ViewSal'
import {BrowserRouter,Route} from 'react-router-dom';

ReactDOM.render(
	<div className="ui container" style={{marginTop:"10px"}}>
	<BrowserRouter>
		<Route path="/" exact component={AddEmp}/>
		<Route path='/salary' exact component={ViewSal}/>

	</BrowserRouter>
	</div>,
	document.querySelector('#root'));