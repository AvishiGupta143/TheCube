import React, { Component, Fragment } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import "../../assets/css/MentorList.css";

export class StudentList extends Component {
    render() {
        return (
            <Fragment><div className='TeamPage'>
            <div className='TeamProcessFlow'>
                <h4>List of Student Members</h4>
            </div>
            <table className='TeamMemberTable'>
                <thead>
                    <th>NAME</th>
                    <th>STUDENT NUMBER</th>
                    <th>EMAIL ID</th>
                    <th>AVAILIBILITY</th>
                </thead>
                <tr>
                    <td className='STUDENTNAME'>Manvi Srivastava</td>
                    <td>1713067</td>
                    <td>imanvisrivastava@gmail.com</td>
                    <td className='GREENCOLOR'>Available</td>
                </tr>
                <tr>
                    <td className='STUDENTNAME'>Manvi Srivastava</td>
                    <td>1713067</td>
                    <td>imanvisrivastava@gmail.com</td>
                    <td className='GREENCOLOR'>Available</td>
                </tr>
            </table>
        </div>
            </Fragment>
        )
    }
}

export default StudentList
