import React, { Component, Fragment } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import "../../assets/css/StudentStylesheets/StudentSideNav.css";
import { Link } from 'react-router-dom';

export class StudentSideNav extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             StudentDropdownClicked:false,
             FacultyDropdownClicked:false
        }
    }

    ShowStudents = () => {
        this.setState({
            StudentDropdownClicked:!this.state.StudentDropdownClicked
        })
    }

    ShowFaculty = () => {
        this.setState({
            FacultyDropdownClicked:!this.state.FacultyDropdownClicked
        })
    }
    
    render() {
        return (
            <Fragment>
                <div className='StudentSideNav'>
                    <h5>Steps for Implementation</h5>
                    <div className='ProgressFlow'>
                        <div className='ProgressFlowName'>
                            <span></span>
                            <p><Link to="/cube/studentdashboard/TeamFormation">Form a Team</Link></p>
                        </div>
                        <span className='ProgressLine'></span>
                        <div className='ProgressFlowName'>
                            <span></span>
                            <p><Link to='/cube/studentdashboard/SelectMentor'>Select Mentor/Project</Link></p>
                        </div>
                        <span className='ProgressLine'></span>
                        <div className='ProgressFlowName'>
                            <span></span>
                            <p><Link to='/cube/studentdashboard/CompleteProject'>Complete your Project</Link></p>
                        </div>
                        <span className='ProgressLine'></span>
                        <div className='ProgressFlowName'>
                            <span></span>
                            <p><Link to='/cube/studentdashboard/SubmitProject'>Submit your Project</Link></p>
                        </div>
                    </div>

                    <div className='UnderLine'></div>

                    <div className='ParticipantsList'>
                        <span onClick={this.ShowStudents}>Team Members<i className={this.state.StudentDropdownClicked ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i></span>
                        {this.state.StudentDropdownClicked ? <div className='DropdownList'>
                            <p>Manvi Srivastava</p>
                            <p>Avishi Gupta</p>
                            <p>Aditi Saini</p>
                        </div> : <p>Add Members</p>}

                        <span onClick={this.ShowFaculty}>Faculty Mentor<i className={this.state.FacultyDropdownClicked ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i></span>
                        {this.state.FacultyDropdownClicked ? <div className='DropdownList'>
                            <p>Shikha Baliyan</p>
                        </div> : <p>Choose Mentor</p>}
                    </div>



                    <div className='LogoutDiv'>
                        <i className='fa fa-sign-out'></i>
                        <p>Logout</p>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default StudentSideNav
