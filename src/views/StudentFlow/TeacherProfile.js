import React, { Component, Fragment } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import { Modal } from 'react-bootstrap'
import "../../assets/css/TeacherProfile.css";
import { Link } from 'react-router-dom';

export class TeacherProfile extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             AppliedClicked:false,
             ShowSuccessModal:false,
             Available:true
        }
    }

    ApplyForProject = () => {
        this.setState({
            AppliedClicked:!this.state.AppliedClicked,
            Available:!this.state.Available,
            ShowSuccessModal:true
        })
    }

    SuccessModal = () => {
        this.setState({
            ShowSuccessModal:true
        })
    }
    
    CloseSuccessModal = () => {
        this.setState({
            ShowSuccessModal:false
        })
    }

    render() {
        return (
            <Fragment>
                <div className='TeacherProfilePage'>
                    <small><Link to='/cube/studentdashboard/SelectMentor'><i className='fa fa-angle-left'></i>Back</Link></small>
                    <h4>Ms. Shikha Jain</h4>
                    <span>Assistant Professor, IT | shikhajain@gmail.com</span>

                    <div className='EachProject'>
                        <div className='ProjectHeader'>
                            <div className='ProjectNameDiv'>
                                <p>PROJECT TITLE</p>
                                <span>Secure Online Auction System</span>
                            </div>
                            {this.state.Available ? <p className='GREENCOLOR'>Available</p> : <p className='REDCOLOR'>Unavailable</p>}
                            {this.state.AppliedClicked ? <button className='AppliedBtn'>Applied</button> : <button onClick={this.ApplyForProject}>Apply</button>}
                        </div>

                        <p>TECHNOLOGY REQUIRED</p>
                        <span>Python, Django Framework, MySQL</span>
                        <p>DESCRIPTION</p>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem diam ut ac quisque mattis dignissim. 
                            Donec urna egestas nulla tortor ultricies tincidunt. A gravida pellentesque dui nunc, lectus. 
                            Nullam at commodo sed ultrices. Dolor porta integer sed et. Lorem diam ut ac quisque mattis dignissim. 
                            Donec urna egestas nulla tortor ultricies tincidunt. 
                            A gravida pellentesque dui nunc, lectus. Donec urna egestas nulla tortor ultricies tincidunt.
                        </span>
                    </div>
                </div>
               
                <Modal  
                    backdrop="static"
                    keyboard={false}
                    className='SuccessModal' show={this.state.ShowSuccessModal} onHide={this.CloseSuccessModal}>
                    <button className='CLOSESUCCESSMODAL' onClick={this.CloseSuccessModal}>
                    <i className="fa fa-close"></i>
                    </button>
                    <Modal.Body className='SuccessModalBody'>
                        <h3>Successfully Applied for Project</h3>
                        <p>You have Successfully applied for this Project. Please wait for the Faculty to acknowlegde your request.</p>

                        <button onClick={this.CloseSuccessModal}>Okay</button>
                    </Modal.Body>
                </Modal>

            </Fragment>
        )
    }
}

export default TeacherProfile
