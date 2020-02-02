import React from 'react';
import App from './App'
import Emp from '../apis/sql'
import FilteredSalary from './filteredSalary'

class ViewSal extends React.Component{
	constructor(){
		super();
		this.state={employee:[],filter:'',userInput:''}
	}

	async componentDidMount() { 
		const response =await Emp.get('/getEmp');
		this.setState({employee:response.data})
	}

	renderData=()=>{
		if(this.state.employee.length>0){
			if(this.state.userInput>=0){
				switch(this.state.filter){
				case 'LESS_THAN':
					return <FilteredSalary emp={this.state.employee.filter(e=>e.salary<this.state.userInput)}/>
				case 'GREATER_THAN':
					return <FilteredSalary emp={this.state.employee.filter(e=>e.salary>this.state.userInput)}/>
				default:
					return null;
				}
			}
		} 	 
	}

	isNumberKey=(val)=>{
	    
	}

	handleChange=(e)=> {
		const input=e.target;
   	    const name=input.name;
     	const value=input.value;
     	if(name==="userInput"){
     		const re = /^[0-9\b]+$/;
      		if (value === '' || re.test(value)) {
     		this.setState({[name]:value})
      }
     	}else if(name==="filter"){
     		this.setState({[name]:value})
     	}
	}

	render(){
		return(
			<div>
				<App/>
      			<div className="ui action input" style={{marginLeft: "400px"}}> 
				  	<input name="userInput" onChange={this.handleChange} 
				  	value={this.state.userInput} 
				  	 placeholder="Enter Amount" type="number"/>
				  	<select name="filter" value={this.state.filter}
				   		onChange={this.handleChange}
				   		className="ui compact selection dropdown">
						    <option ></option>
						    <option value="LESS_THAN">Less than</option>
						    <option value="GREATER_THAN">Greater than</option>
				  	</select>
				</div>
				{this.renderData()}
			</div>
		)
	}
}

export default ViewSal;