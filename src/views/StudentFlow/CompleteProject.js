import React, { Component, Fragment } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import "../../assets/css/CompleteProject.css";
import PlanePic from '../../assets/css/PlanePic.png'; 
import OverviewPic from '../../assets/css/OverviewPic.png';
import User from '../../assets/css/User.png';

export class CompleteProject extends Component {

    UploadDoc = () =>{
        document.getElementById("UPLOAD").click()
        console.log("UPLOAD NOW")
        this.setState({
            Uploaded:true
        })

    }
    
    render() {
        return (
            <Fragment>
                <div className='COMPLETEPROJECTHEAD'>
                    <div className='COMPLETEPROJECTINFO'>
                        <h3>Hi Manvi,</h3>
                        <p>We have few things for you to look at...</p>
                    </div>

                    <img src={PlanePic}></img>
                </div>
            
                <div className='COMPLETEPROJECTCONTENT'>
                    <div className='ColumnDivs'>
                        <div className='OverviewDiv'>
                            <div className='OverviewText'>
                                <h4>Project Overview</h4>
                                <h5>Secure Online Auction System</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem diam ut ac quisque mattis dignissim. 
                                    Donec urna egestas nulla tortor ultricies tincidunt. A gravida pellentesque dui nunc, lectus. 
                                    Nullam at commodo sed ultrices. Dolor porta integer sed et. Lorem diam ut ac quisque mattis dignissim.
                                </p>

                                <h6>Technology Required</h6>
                                <span>Python, Django Framework, MySQL</span>
                            </div>
                            <img src={OverviewPic}></img>
                        </div>
                        

                        <div className='ProgressDiv'>
                            <h4>Track your Progress</h4>
                            <table className='EachProgressBar'>
                                <tr>
                                    <th>Submit SRS and SDD</th>
                                    <td>Due Date: 21 Oct, 2020</td>
                                    <td className='GREENCOLOR'>Complete</td>
                                </tr>
                                <tr>
                                    <th>Submit SRS and SDD Presentation</th>
                                    <td>Due Date: 29 Oct, 2020</td>
                                    <td className='REDCOLOR'>Pending</td>
                                </tr>
                                <tr>
                                    <th>Submit Final Synopsis</th>
                                    <td>Due Date: 12 Nov, 2020</td>
                                    <td className='REDCOLOR'>Pending</td>
                                </tr>

                                
                                <tr>
                                    <th>Submit Requirement Analysis Documentation</th>
                                    <td>Due Date: 29 Nov, 2020</td>
                                    <td className='REDCOLOR'>Pending</td>
                                </tr>
                                
                                <tr>
                                    <th>Submit Requirement Analysis Presentation</th>
                                    <td>Due Date: 29 Dec, 2020</td>
                                    <td className='REDCOLOR'>Pending</td>
                                </tr>
                                
                                <tr>
                                    <th>Submit Presentation</th>
                                    <td>Due Date: 12 Jan, 2021</td>
                                    <td className='REDCOLOR'>Pending</td>
                                </tr>
                            </table>
                        </div>

                    </div>
                    <div className='ROWDivs'>
                            <h4>Team Members</h4>
                            <div className='TeamMembersDiv'>
                                <img src={User}></img>
                                <span>Aditi Saini</span>
                            </div>
                            <div className='TeamMembersDiv'>
                                <img src={User}></img>
                                <span>Aditi Saini</span>
                            </div>
                            <div className='TeamMembersDiv'>
                                <img src={User}></img>
                                <span>Aditi Saini</span>
                            </div>
                            
                            <h4>Faculty Mentor</h4>

                            <div className='TeamMembersDiv'>
                                <img src={User}></img>
                                <div className='TeamFacultyDiv'>
                                    <span>Ms. Shikha Baliyan</span>
                                    <small>Assistant Professor, IT</small>
                                </div>
                            </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default CompleteProject
