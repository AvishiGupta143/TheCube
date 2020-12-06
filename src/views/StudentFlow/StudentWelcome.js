import React, { Component, Fragment } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import "../../assets/css/StudentWelcome.css";
import PlanePic from '../../assets/css/PlanePic.png'; 
import OverviewPic from '../../assets/css/OverviewPic.png';
import User from '../../assets/css/User.png';
import { Link } from 'react-router-dom';

export class StudentWelcome extends Component {
    render() {
        return (
            <Fragment>
                <div className='DASHBOARDHEAD'>
                    <div className='DASHBOARDINFO'>
                        <h3>Hi Manvi,</h3>
                        <p>We have few things for you to look at...</p>
                    </div>

                    <img src={PlanePic}></img>
                </div>
            
                <div className='DASHBOARDCONTENT'>
                    <div className='ColumnDivs'>
                        <div className='OverviewDiv'>
                            <div className='OverviewText'>
                                <h4>Portal Overview</h4>
                                <p style={{marginTop:"10px"}}>The Cube makes the process of undertaking a project easier and less tedious.
                                    <br></br>
                                    <br></br>
                                    Students can actually make something that they are genuinely interested in and will be assisted by the right mentor for this.
                                    They will have a clear knowledge of what are the various options available to them and its requirements.
                                </p>

                                <span style={{marginTop:"30px", fontSize:"18px"}}>For hassle-free submission of your Project</span>
                            </div>
                            <img src={OverviewPic}></img>
                        </div>
                        

                        <div className='ProgressDiv'>
                            <div className='AllProjectDiv'>
                                <h4>Projects Available</h4>
                                <span>View All</span>
                            </div>
                            <table className='EachProgressBar'>
                                <tr>
                                    <th>Secure Online Auction System</th>
                                    <td className='RIGHTALIGN'>Mentor: Ms. Shikha Baliyan</td>
                                </tr>
                                <tr>
                                    <th>Android Battery Saver System</th>
                                    <td className='RIGHTALIGN'>Mentor: Ms. Shikha Baliyan</td>
                                </tr>
                                <tr>
                                    <th>Voice Tracing and Recognition</th>
                                    <td className='RIGHTALIGN'>Mentor: Ms. Shikha Baliyan</td>
                                </tr>

                                
                                <tr>
                                    <th>Voice Tracing and Recognition</th>
                                    <td className='RIGHTALIGN'>Mentor: Ms. Shikha Baliyan</td>
                                </tr>
                            </table>
                        </div>

                    </div>
                    <div className='ROWDivs'>
                            <h4>Find Team Members</h4>
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
                            <span><Link to='/cube/studentdashboard/TeamFormation'>View All <i className='fa fa-angle-right'></i></Link></span>
                            
                            <h4>Find Faculty Mentor</h4>

                            <div className='TeamMembersDiv'>
                                <img src={User}></img>
                                <div className='TeamFacultyDiv'>
                                    <span>Ms. Shikha Baliyan</span>
                                    <small>Assistant Professor, IT</small>
                                </div>
                            </div>

                            <span><Link to='/cube/studentdashboard/SelectMentor'>View All <i className='fa fa-angle-right'></i></Link></span>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default StudentWelcome
