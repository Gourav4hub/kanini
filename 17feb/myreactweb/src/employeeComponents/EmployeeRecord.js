import React from 'react'
import Employee from "./Employee";
export default class EmployeeRecord extends React.Component {
    render() {
        return <div>
            <h1>Employee Records</h1>

            <form onSubmit={this.save}>
                <input type="text" ref={(ob) => this.idbox = ob} placeholder="Employee ID" required />&nbsp;

                <input type="text" ref={(ob) => this.namebox = ob} placeholder="Employee Name" required />&nbsp;

                <input type="text" ref={(ob) => this.phonebox = ob} placeholder="Employee Phone" />&nbsp;

                <input type="email" ref={(ob) => this.mailbox = ob}
                    placeholder="Employee Email" required />&nbsp;

                <input type="number" ref={(ob) => this.salarybox = ob} placeholder="Employee Salary" required />&nbsp;
                <br /><br />
                <button type="submit">Save Employee</button>
            </form>
            <hr />
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
                    {this.props.records.map((emp, index) =>
                        <Employee key={index} employee={emp}
                            index={index + 1} 
                            delEmp={this.props.deleteEmployee} />
                    )}
                </tbody>
            </table>
        </div>
    }
}