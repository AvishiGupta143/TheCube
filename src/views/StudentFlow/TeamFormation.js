import React, { Component, Fragment } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import "../../assets/css/TeamPage.css";
import { Link } from 'react-router-dom';

export class TeamFormation extends Component {
    render() {
        return (
            <Fragment>
                <div className='TeamPage'>
                    <div className='TeamProcessFlow'>
                        <h4>Find your Team Members</h4>

                        <div className='SearchBar'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.22226 13.4445C10.6587 13.4445 13.4445 
                            10.6587 13.4445 7.22226C13.4445 3.7858 10.6587 1 7.22226 1C3.7858 
                            1 1 3.7858 1 7.22226C1 10.6587 3.7858 13.4445 7.22226 13.4445Z" 
                            stroke="black" stroke-opacity="0.32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.0001 15.0001L11.6167 11.6167" 
                            stroke="black" stroke-opacity="0.32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            <input type='text' placeholder='Search'></input>

                        </div>
                    </div>
                    <p>
                        Given below is a list of all the Students. You can select minimum 2 and maximum 3 students in your Team (including yourself). 
                        If you have already formed your team then <span>Click here</span> to proceed to select your Mentor.
                    </p>
                    <table className='TeamMemberTable'>
                        <thead>
                            <th></th>
                            <th>NAME</th>
                            <th>STUDENT NUMBER</th>
                            <th>EMAIL ID</th>
                            <th>AVAILIBILITY</th>
                        </thead>
                        <tr>
                            <td><input type='checkbox'></input></td>
                            <td className='STUDENTNAME'>Manvi Srivastava</td>
                            <td>1713067</td>
                            <td>imanvisrivastava@gmail.com</td>
                            <td className='GREENCOLOR'>Available</td>
                        </tr>
                        <tr>
                            <td><input type='checkbox'></input></td>
                            <td className='STUDENTNAME'>Manvi Srivastava</td>
                            <td>1713067</td>
                            <td>imanvisrivastava@gmail.com</td>
                            <td className='GREENCOLOR'>Available</td>
                        </tr>
                    </table>

                    <button>Send Invite to Team Up</button>
                </div>
            </Fragment>
        )
    }
}

export default TeamFormation
