import React, { Component, Fragment } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import { Modal } from 'react-bootstrap'
import "../../assets/css/StudentStylesheets/TeacherProfile.css";
import { Link, withRouter } from 'react-router-dom';

export class TeacherProfile extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             AppliedClicked:false,
             ShowSuccessModal:false,
             Available:true,
             GoBackAllProjects:false
        }
    }


    // componentDidMount(){
    //     let loc = this.props.history.location.pathname
    //     if (loc.includes("AllProjects") ) {
    //         this.setState({
    //             GoBackAllProjects:true
    //         })
    //     } else {
    //         this.setState({
    //             GoBackAllProjects:false
    //         })
    //     }
    // }


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
                            {this.state.AppliedClicked ? 
                            <button className='AppliedBtn'>
                                <svg className='CheckSvg'
                                width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 10.0857V11.0057C20.9988 13.1621 20.3005 15.2604 19.0093 16.9875C17.7182 18.7147 
                                15.9033 19.9782 13.8354 20.5896C11.7674 21.201 9.55726 21.1276 7.53447 20.3803C5.51168 19.633 
                                3.78465 18.2518 2.61096 16.4428C1.43727 14.6338 0.879791 12.4938 1.02168 10.342C1.16356 8.19029 
                                1.99721 6.14205 3.39828 4.5028C4.79935 2.86354 6.69279 1.72111 8.79619 1.24587C10.8996 0.770634 
                                13.1003 0.988061 15.07 1.86572" stroke="#209616" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M21 3.00586L11 13.0159L8 10.0159" stroke="#209616" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                Applied
                            </button> : 
                            <button onClick={this.ApplyForProject}>Apply</button>}
                        </div>

                        <p>TECHNOLOGY REQUIRED</p>
                        <span>Python, Django Framework, MySQL</span>
                        <p>DESCRIPTION</p>
                        <span>
                            Online auction however is a different business model where the items are sold through price bidding. 
                            Usually bidding have start price and ending time. Potential buyers in auction and the winner is the one 
                            who bids the item for highest price. We treat the fraud detection with a binary classification. 
                            For buying product online user have to provide his personal details like email address, license number, 
                            PAN number etc. Only the valid user will have authority to bid. This prevents various frauds according in 
                            online shopping.
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

export default withRouter(TeacherProfile)
