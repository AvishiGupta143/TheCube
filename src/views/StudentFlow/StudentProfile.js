import React, { Component, Fragment } from 'react'
import "../../assets/css/StudentProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import ProfilePic from '../../assets/css/ProfilePic.png';
import ProjectFileSvg from '../../assets/css/ProjectFileSvg.svg';
import PeopleSvg from '../../assets/css/PeopleSvg.svg';
import FacultyMentorSvg from '../../assets/css/FacultyMentorSvg.svg';
import User from '../../assets/css/User.png';
import { Link } from 'react-router-dom';

export class StudentProfile extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             TeamCompleted:false,
             FacultyTaken:false,
             CompleteProject:false,
             SubmitProject:false
        }
    }
    
    render() {
        return (
            <Fragment>
                <div className='StudentProfileDiv'>
                    <div className='StudentProfileSideBar'>
                        <h3>Profile</h3>
                        <img src={ProfilePic}></img>
                        <h4>Manvi Srivastava</h4>

                        <span>Student Number</span>
                        <p>1713067</p>

                        <span>Email ID</span>
                        <p>imanvisrivastava@gmail.com</p>

                        {this.state.TeamCompleted ? <div className='TeamFormedDiv'>
                        <span>Team ID</span>
                        <p>XHGYG54SE54FH750</p>
                        </div> : null}

                        <div className='StudentProgressDiv'>
                            <div className={this.state.TeamCompleted ? 'DoneTask' : 'DoingTask'}>
                                <span>1</span>
                                <p>Form a Team</p>
                            </div>
                            
                            <div className={this.state.TeamCompleted ? 'ProgLineDone' : 'ProgLineUnDone'}></div>
                            
                            <div className={this.state.FacultyTaken ? 'DoneTask' : this.state.TeamCompleted ? 'DoingTask' : 'UnDoneTask'}>
                                <span>2</span>
                                <p>Select Mentor</p>
                            </div>
                            
                            <div className={this.state.FacultyTaken ? 'ProgLineDone' : 'ProgLineUnDone'}></div>
                            
                            <div className={this.state.CompleteProject ? 'DoneTask' : this.state.FacultyTaken ? 'DoingTask' : 'UnDoneTask'}>
                                <span>3</span>
                                <p>Complete Your Project</p>
                            </div>
                            
                            <div className={this.state.CompleteProject ? 'ProgLineDone' : 'ProgLineUnDone'}></div>
                            
                            <div className={this.state.SubmitProject ? 'DoneTask' : this.state.CompleteProject ? 'DoingTask' : 'UnDoneTask'}>
                                <span>4</span>
                                <p>Submit Your Project</p>
                            </div>
                        </div>

                    </div>
                    
                    
                    <div className='StudentProfileContent'>

                        {this.state.FacultyTaken ? 
                        <div className='ProjectUnderTakenPart'>
                            <h5>Project UnderTaken</h5>
                            <h3>Secure Online Auction System</h3>
                            <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem diam ut ac quisque mattis dignissim. Donec urna egestas nulla tortor ultricies tincidunt. A gravida pellentesque dui nunc, lectus. Nullam at commodo sed ultrices. Dolor porta integer sed et. Lorem diam ut ac quisque mattis dignissim. 
                                Nullam at commodo sed ultrices. Dolor porta integer sed et. Lorem diam ut ac quisque mattis dignissim.
                            </small>
                            <br></br>
                            <small>Technology Required</small>
                            <p>Python, Django Framework, MySQL</p>
                        </div>
                        : <div className='ProjectUnderTakenPart'>
                            <h5>Project UnderTaken</h5>
                            <img src={ProjectFileSvg}></img>
                            <span>You can choose from a list of available projects and apply for it.</span>
                            <Link to='/cube/studentdashboard/AllProjects'><p>Available Projects <i className='fa fa-angle-right'></i></p></Link>
                        </div>}

                        {this.state.TeamCompleted ? 
                        <div className='TeamMembersPart'>
                            <h5>Team Members</h5>
                            <table>
                                <tr>
                                    <th><img src={User}></img></th>
                                    <td>Aditi Saini</td>
                                    <td>aditisaini@gmail.com</td>
                                    <td><span className='LightWeight'>Student Number:</span>1713067</td>
                                </tr>
                                <tr>
                                    <th><img src={User}></img></th>
                                    <td>Aditi Saini</td>
                                    <td>aditisaini@gmail.com</td>
                                    <td><span className='LightWeight'>Student Number:</span>1713067</td>
                                </tr>
                                <tr>
                                    <th><img src={User}></img></th>
                                    <td>Aditi Saini</td>
                                    <td>aditisaini@gmail.com</td>
                                    <td><span className='LightWeight'>Student Number:</span>1713067</td>
                                </tr>
                            </table>
                        </div>
                        : 
                        <div className='TeamMembersPart'>
                            <h5>Team Members</h5>
                            <img src={PeopleSvg}></img>
                            <span>Send invites to your batchmates and make a team and proceed further.</span>
                            <Link to='/cube/studentdashboard/TeamFormation'><p>Find Team Members <i className='fa fa-angle-right'></i></p></Link>
                        </div>
                    }

                        {this.state.FacultyTaken ? 
                        <div className='FacultyMentorPart'>
                            <h5>Faculty Mentor</h5>
                            <table>
                                <tr>
                                    <th><img src={User}></img></th>
                                    <td>
                                        <p>Ms. Shikha Baliyan</p>
                                        <small className='LightWeight'>Assistant Professor, IT | shikhajain@gmail.com</small>
                                    </td>
                                </tr>
                            </table>
                        </div> : 
                        <div className='FacultyMentorPart'>
                            <h5>Faculty Mentor</h5>
                            <img src={FacultyMentorSvg}></img>
                            <span>Browse through the list of mentors and their recommended projects.</span>
                            <Link to='/cube/studentdashboard/SelectMentor'><p>Find Faculty Members<i className='fa fa-angle-right'></i></p></Link>
                        </div>}
                        
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default StudentProfile
