import React from 'react'

export default class Employee extends React.Component
{
    render(){
        //this.props.index = 5
        return <tr>
                      <td>{this.props.index}</td>
                      <td>{this.props.employee.empid}</td>
                      <td>{this.props.employee.name}</td>
                      <td>{this.props.employee.phone}</td>
                      <td>{this.props.employee.email}</td>
                      <td>{this.props.employee.salary}</td>
                      <td>
                        <button onClick={()=>this.props.delEmp(this.props.employee.empid)}>
                          Delete
                        </button>
                      </td>
        </tr>
    }
}