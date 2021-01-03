import React, { Component, Fragment } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import "../../assets/css/CompleteProject.css";
import PlanePic from '../../assets/css/PlanePic.png'; 
import OverviewPic from '../../assets/css/OverviewPic.png';
import User from '../../assets/css/User.png';
import MeetingSvg from '../../assets/css/MeetingSvg.svg';
import { Modal } from 'react-bootstrap';

export class CompleteProject extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             MeetingModal:false
        }
    }
    
    

    UploadDoc = () =>{
        document.getElementById("UPLOAD").click()
        this.setState({
            Uploaded:true
        })

    }
    
    CloseMeetingModal = () => {
        this.setState({
            MeetingModal:false
        })
    }

    OpenMeetingModal = () => {
        this.setState({
            MeetingModal:true
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


                            <div className='MeetingDiv'>
                                <img src={MeetingSvg}></img>
                                <p>You can schedule a meeting with your mentor and team members to have discussions about your project!</p>
                                <button onClick={this.OpenMeetingModal}>Schedule a Meeting</button>
                            </div>
                    </div>
                </div>


                <Modal  
                    backdrop="static"
                    size='md'
                    keyboard={false}
                    className='MeetingModal' show={this.state.MeetingModal} onHide={this.CloseMeetingModal}>
                    <Modal.Header className='MeetingModalHead'>
                        <h3>Schedule a Meeting</h3>
                        <button className='SuggestModalClose' onClick={this.CloseMeetingModal}>
                        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.6699 6.05078L6.66992 18.0508" stroke="#ED383F" 
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6.66992 6.05078L18.6699 18.0508" stroke="#ED383F" 
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        </button>
                    </Modal.Header>
                    <Modal.Body className='MeetingModalBody'>
                        <p>Your Faculty</p>
                        <span>Ms Shikha Baliyan</span>
                        <p>Your Team Members</p>
                        <span>Avishi Gupta</span>
                        <span>Aditi Saini</span>
                        
                        <input type='date' placeholder='MEETING DATE(dd/mm/yyyy)'></input>
                        <input type='time' placeholder='MEETING TIME(24 hours format)'></input>

                        <textarea placeholder='PURPOSE OF MEETING'></textarea>

                        <button>Send Meeting Request</button>
                    </Modal.Body>
                </Modal>
            </Fragment>
        )
    }
}

export default CompleteProject
