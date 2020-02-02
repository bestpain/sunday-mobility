import React from 'react';

class FilteredSalary extends React.Component{

	renderTable=()=>{
		let res;
		res=this.props.emp.map(e=>{
    			return(
					<tr>
						<td data-label="Name">{e.name}</td>
						<td data-label="Age">{e.email}</td>
						<td data-label="Job">{e.salary}</td>
				   </tr>
				  )
			})
		return res;
		}

	render(){
		return (<div>
				<br/>
				<table className="ui celled table">
					  <thead>
					    <tr><th>Name</th>
					    <th>Email</th>
					    <th>Salary</th>
					  </tr></thead>
					<tbody>
						{this.renderTable()}
					</tbody>
				</table>
			</div>
			)
			
		}
}


export default FilteredSalary;