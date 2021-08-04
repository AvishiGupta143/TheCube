import React, { Component, Fragment } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import '../../assets/css/StudentStylesheets/Home.css';
import { Link, withRouter } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

export class TopBarFaculty extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             DashBoardClicked:true,
             TeamClicked:false,
             ProjectClicked:false,
             SuggestionsClicked:false,
             ProfileClicked:false,
             LogoutClicked:false
        }
    }
    
        // componentDidMount() {
        //     let loc = this.props.history.location.pathname
            
        //     console.log(loc)
        //     if(loc.includes("welcomestudent"))
        //     {
        //         this.setState({
        //             DashBoardClicked:true,
        //             FacultiesClicked:false,
        //             StudentClicked:false,
        //             ProfileClicked:false,
        //             ProjectClicked:false
        //         })
        //     }
        //     if(loc.includes("SelectMentor") || loc.includes("MentorProfile"))
        //     {
        //         this.setState({
        //             DashBoardClicked:false,
        //             FacultiesClicked:true,
        //             StudentClicked:false,
        //             ProfileClicked:false,
        //             ProjectClicked:false
        //         })
        //     }
        //     if(loc.includes("studentlist") || loc.includes("TeamFormation") )
        //     {
        //         this.setState({
        //             DashBoardClicked:false,
        //             FacultiesClicked:false,
        //             StudentClicked:true,
        //             ProfileClicked:false,
        //             ProjectClicked:false
        //         })
        //     }
        //     if(loc.includes("AllProjects"))
        //     {
        //         this.setState({
        //             DashBoardClicked:false,
        //             FacultiesClicked:false,
        //             StudentClicked:false,
        //             ProfileClicked:false,
        //             ProjectClicked:true
        //         })
        //     }
        //     if(loc.includes("StudentProfile"))
        //     {
        //         this.setState({
        //             DashBoardClicked:false,
        //             FacultiesClicked:false,
        //             StudentClicked:false,
        //             ProfileClicked:true,
        //             ProjectClicked:false
        //         })
        //     }
        // }



    ToggleNavbar = (str) =>{
        if (str === 'Dashboard'){
            this.setState({
                DashBoardClicked:true,
                TeamClicked:false,
                ProjectClicked:false,
                SuggestionsClicked:false,
                ProfileClicked:false
            })

        }else if (str === 'Team'){
            this.setState({
                DashBoardClicked:false,
                TeamClicked:true,
                ProjectClicked:false,
                SuggestionsClicked:false,
                ProfileClicked:false
            })

        }else if (str === 'Projects'){
            this.setState({
                DashBoardClicked:false,
                TeamClicked:false,
                ProjectClicked:true,
                SuggestionsClicked:false,
                ProfileClicked:false
            })

        }else if (str === 'Suggestions'){
            this.setState({
                DashBoardClicked:false,
                TeamClicked:false,
                ProjectClicked:false,
                SuggestionsClicked:true,
                ProfileClicked:false
            })

        }else{
            this.setState({
                DashBoardClicked:false,
                TeamClicked:false,
                ProjectClicked:false,
                SuggestionsClicked:false,
                ProfileClicked:true
            })
        }

    }

    CloseLogoutModal = () =>{
        this.setState({
            LogoutClicked:false
        })
    }
    OpenLogoutModal = () =>{
        this.setState({
            LogoutClicked:true
        })
    }
    

    render() {
        return (
            <Fragment>
                <div className='TopNavBar'>
                    <h4><Link to='/cube/facultydashboard/welcomefaculty'>The Cube</Link></h4>
                    <div className='Navitems'>
                    <span onClick={ () => {this.ToggleNavbar('Dashboard')}}><Link to='/cube/facultydashboard/welcomefaculty'>Dashboard</Link>{this.state.DashBoardClicked ? <div className='UNDERLINE'></div> : null}</span>

                    <span onClick={ () => {this.ToggleNavbar('Team')}}><Link to='/cube/facultydashboard/myteam'>Team</Link>{this.state.TeamClicked ? <div className='UNDERLINE'></div> : null}</span>

                    <span onClick={ () => {this.ToggleNavbar('Projects')}}><Link to='/cube/facultydashboard/myprojects'>Projects</Link>{this.state.ProjectClicked ? <div className='UNDERLINE'></div> : null}</span>

                    <span onClick={ () => {this.ToggleNavbar('Suggestions')}}><Link to='/cube/facultydashboard/suggestions'>Suggestions</Link>{this.state.SuggestionsClicked ? <div className='UNDERLINE'></div> : null}</span>

                    <span onClick={ () => {this.ToggleNavbar('Profile')}}><Link to='/cube/facultydashboard/profile'>Profile</Link>{this.state.ProfileClicked ? <div className='UNDERLINE'></div> : null}</span>
                    </div>
                    <span className='DIVIDER'></span>

                    <Link to='/cube/facultydashboard/notifications'>
                    <svg className='NOTIFICATION'
                    width="20" height="20" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 7C16 5.4087 15.3679 3.88258 14.2426 2.75736C13.1174 1.63214 11.5913 1 
                    10 1C8.4087 1 6.88258 1.63214 5.75736 2.75736C4.63214 3.88258 4 5.4087 4 7C4 14 1 16 1 
                    16H19C19 16 16 14 16 7Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.73 20C11.5542 20.3031 11.3019 20.5547 10.9982 20.7295C10.6946 20.9044 10.3504 
                    20.9965 10 20.9965C9.64964 20.9965 9.30541 20.9044 9.00179 20.7295C8.69818 20.5547 8.44583 
                    20.3031 8.27002 20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </Link>

                    <button 
                    onClick={this.OpenLogoutModal}
                    className='LOGOUTBUTTONCLASS'>
                    <svg className='LOGOUTICON'
                    width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.66667 21H3.22222C2.63285 21 2.06762 20.7659 1.65087 20.3491C1.23413 19.9324 1 19.3671 1 
                    18.7778V3.22222C1 2.63285 1.23413 2.06762 1.65087 1.65087C2.06762 1.23413 2.63285 1 3.22222 1H7.66667" 
                    stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.4445 16.5554L21 10.9999L15.4445 5.44434" 
                    stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21 11H7.66663" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </button>

                </div>

                <Modal  
                    size='sm'
                    backdrop="static"
                    keyboard={false}
                    className='SuccessModal' show={this.state.LogoutClicked} onHide={this.CloseLogoutModal}>
                    <button className='CLOSESUCCESSMODAL' onClick={this.CloseLogoutModal}>
                    <i className="fa fa-close"></i>
                    </button>
                    <Modal.Body className='LogoutModalBody'>
                        <h3>Logout</h3>
                        <p>Are you sure you want to Logout?</p>
                        <button className='LogoutDone'><Link to="/">Logout</Link></button>
                        <button className='LogoutNotDone' onClick={this.CloseLogoutModal}>Cancel</button>
                    </Modal.Body>
                </Modal>
            </Fragment>
        )
    }
}

export default withRouter(TopBarFaculty)
