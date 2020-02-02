import React from 'react';
import App from './App'
import Emp from '../apis/sql'


class AddEmp extends React.Component{
	constructor () {
      super()	
      this.state = {
         name:'',
         email:'',
         salary:'',
         nameError:'',
         emailError:'',
         salaryError:'',
      }
    
  }
  
  validateAndSubmit=async e=>{
  	e.preventDefault()
  	if(this.state.nameError==null && this.state.emailError==null && this.state.salaryError==null){
  		const emp={
  			name:this.state.name,
  			email:this.state.email,
  			salary:this.state.salary
  		}
			await Emp.post(`/addEmp`,{emp});
			
		this.setState({
			name:'',
	         email:'',
	         salary:'',
	         nameError:'',
	         emailError:'',
	         salaryError:''
		})					
  	}
  }
   handleEmailChange = event => {
    this.setState({ email: event.target.value }, () => {
      this.validateEmail();
    });
  };

   validateEmail = () => {
    const { email } = this.state;
    this.setState({
      emailError:
        (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[?=(com|org)]{3}$/i.test(email)) ? null : 'Email is not valid'
    });
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value }, () => {
      this.validateName();
    });
  };

   validateName = () => {
    const { name } = this.state;
    this.setState({
      nameError:
        name.length > 3 ? null : 'Name must be longer than 3 characters'
    });
  }

  handleSalaryChange =event=>{
  	this.setState({salary:event.target.value},()=>{
  		this.validateSalary();
  	})
  }

  validateSalary=()=>{
  	const {salary} =this.state;
  	this.setState({
  		salaryError:
  			salary > 0 ? null : 'Salary Must be greater than Zero'
  	})
  }


	render(){
	return (
		<div>
			<App/>
			<form onSubmit={this.validateAndSubmit} className="ui form error" 
			 style={{width:'600px',marginLeft:'300px',marginTop:'50px'}}>
				<div className={`field ${this.state.nameError ? 'error' : ''}`}>
				  <label>Full Name</label>
				  <input value={this.state.name} 
				  		onChange={this.handleNameChange} 
				   		name="name" 
				   		placeholder="Enter Name" 
				   		type="text"
				   		onBlur={this.validateName}
				   />
				<div className='ui error message'>{this.state.nameError}</div>
				</div>
				
				<div className={`field ten wide ${this.state.emailError ? 'error': ''}`}>
					    <label>Email</label>
					    <input name="email" 
					    	value={this.state.email} 
					    	onChange={this.handleEmailChange} 
				     	 	placeholder="Enter Email"
				     	 	onBlur={this.validateEmail} 
				     	 	type="text"/>
				     <div className='ui error message'>{this.state.emailError}</div>
				</div>
    		    <div className={`five wide field ${this.state.salaryError ? 'error' :''}`}>
      					<label>Salary</label>
      					<input value={this.state.salary} 
      						onChange={this.handleSalaryChange} 
      					 	name="salary" 
      					 	maxLength="16" 
      					 	placeholder="Enter Salary" 
      					 	onBlur={this.validateSalary}
      					 	type="text"/>
      				 <div className='ui error message'>{this.state.salaryError}</div>
    			</div>
    				
				  <button className="ui button" type="submit">Submit</button>
			</form>
		</div>
		)
	}
}

export default AddEmp;