import React from "react";

//import {First} from './MyComponent'
//import {Second} from './MyComponent'

//import {First,Second} from './MyComponent'

//import Third from './MyComponent'
import ThirdComponent , {First,Second} from './MyComponent'

class App extends React.Component
{
    constructor(){
      super()
      this.state = {
        employees : [
          {empid:101,name:'John',phone:'9837428934',email:'john@gmail.com',salary:45678.43},
          {empid:102,name:'Vikas',phone:'7328947982',email:'vikas@gmail.com',salary:48756.43}
        ]
      }
    }

    save = (event)=>{
        var empid = this.idbox.value*1;
        var name = this.namebox.value;
        var phone = this.phonebox.value;
        var email = this.mailbox.value;
        var salary = this.salarybox.value*1;

        var obj = {empid,name,phone,email,salary}
        //console.log(obj)
        this.setState({employees: [...this.state.employees,obj] })
        event.preventDefault()
    }

    deleteEmployee = (empid)=>{
        this.setState(
          {
          employees: this.state.employees.filter(ob=>ob.empid!=empid)
          })
    }

    render(){
        return <div>
            <h1>Employee Records</h1>

              <form onSubmit={this.save}>
                <input type="text" ref={(ob)=>this.idbox=ob} placeholder="Employee ID" required/>&nbsp;  

                <input type="text" ref={(ob)=>this.namebox=ob}placeholder="Employee Name" required/>&nbsp;

                <input type="text" ref={(ob)=>this.phonebox=ob}placeholder="Employee Phone"/>&nbsp;

                <input type="email" ref={(ob)=>this.mailbox=ob}
                placeholder="Employee Email" required/>&nbsp;
                
                <input type="number" ref={(ob)=>this.salarybox=ob}placeholder="Employee Salary" required/>&nbsp;
                <br/><br/>
                <button type="submit">Save Employee</button>
            </form>
            <hr/>
            <table align='center' border='1' cellPadding='10' cellSpacing='5'>
              <thead>
                <tr>
                  <th>S. No.</th>
                  <th>Employee ID</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Salary</th>
                  <th>Operation</th>
                </tr>
              </thead>
              <tbody>
                {this.state.employees.map((emp,index)=>
                  <tr key={index}>
                      <td>{index+1}</td>
                      <td>{emp.empid}</td>
                      <td>{emp.name}</td>
                      <td>{emp.phone}</td>
                      <td>{emp.email}</td>
                      <td>{emp.salary}</td>
                      <td>
                        <button onClick={()=>this.deleteEmployee(emp.empid)}>
                          Delete
                          </button>
                      </td>
                  </tr>
                )}
              </tbody>
            </table>
            <hr/>
            <First/>
            <Second/>
            <ThirdComponent/>
        </div>
    }
}

export default App