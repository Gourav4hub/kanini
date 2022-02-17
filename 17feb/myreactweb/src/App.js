import React from "react";

import Demo from './Demo'
import EmployeeRecord from "./employeeComponents/EmployeeRecord";
import Sample from "./Sample";

import {Link , Routes , Route} from 'react-router-dom'

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

    // Props Drilling
    deleteEmployee = (empid)=>{
        this.setState(
          {
          employees: this.state.employees.filter(ob=>ob.empid!=empid)
          })
    }

    render(){
        return <div>
          <Link to="/"> <b>Home</b> </Link> &nbsp;
          <Link to="/employee"> <b>Employee Record</b> </Link> &nbsp;
          <Link to="/demo"> <b>Demo</b>  </Link>&nbsp;
       

           <hr/> 

          <Routes>
              <Route path="/employee" element={<EmployeeRecord records={this.state.employees} deleteEmployee={this.deleteEmployee}/>}/>

              <Route path="/demo" element={<Demo records={this.state.employees}/>}/>

              <Route path="/" element={<Sample/>}/>
          </Routes>          
        </div>
    }
}

export default App