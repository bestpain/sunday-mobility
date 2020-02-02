import React from 'react';
import {Link} from 'react-router-dom';

const App=()=>{
	return (
	<div className="ui two item menu">
		
	  		<Link to="/" className="item">Add Employee</Link>
	  		<Link to='/salary' className="item">View Salary</Link>
  		
	</div>
	)
}

export default App;