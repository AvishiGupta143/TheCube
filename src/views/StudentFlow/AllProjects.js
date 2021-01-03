import React, { Component, Fragment } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import "../../assets/css/AllProjects.css";
import { Link } from 'react-router-dom';

export class AllProjects extends Component {
    render() {
        return (
            <Fragment>
                <div className='AllProjectsDiv'>
                    <h3>Available Projects</h3>
                    <table className='AllProjectsTable'>
                        <thead>
                            <th>Project Name</th>
                            <th>Faculty Mentor</th>
                            <th>Technology Required</th>
                            <th>Action</th>
                        </thead>
                        <tr>
                            <th>Secure Online Auction System</th>
                            <td>Ms. Shikha Baliyan</td>
                            <td>Python, Django Framework, MySQL</td>
                            <td><button className='ViewProjectBtn'><Link to='/cube/studentdashboard/MentorProfile'>View</Link> <i className='fa fa-angle-right'></i></button></td>
                        </tr>
                    </table>
                </div>
            </Fragment>
        )
    }
}

export default AllProjects
