import React, { Component, Fragment } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import "../../assets/css/StudentStylesheets/SelectMentor.css";
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import API from "../../API/API";

export class SelectMentor extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             ShowSuggestModal:false,
             FacultyList:[],
            //  Projects:{
            //      1:"Secure Online Auction System",
            //      2:"Android Battery Saver System",
            //      3:"Voice Tracing and Recognition",
            //      4:"E-Commerce Website"
            //  }
        }
    }

    componentDidMount(){
        this.GetAllFaculties()
    }

    GetAllFaculties = async () => {
        // API CALL
        const response = await API.GetAvailableFaculty();
        if (response.ok) {
          console.log(response.data);
          this.setState({
            FacultyList:response.data.FacultyList
          })
        } else {
          console.log("Error");
        }
      };
    SuggestProjectModal = () => {
        this.setState({
            ShowSuggestModal:true
        })
    }
    
    CloseSuggestModal = () => {
        this.setState({
            ShowSuggestModal:false
        })
    }


    render() {
        return (
            <Fragment>
                <div className='SelectMentorPage'>
                    <div className='SelectMentorProcessFlow'>
                        <h4>Select a Mentor</h4>

                        {/* <div className='SearchBar'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.22226 13.4445C10.6587 13.4445 13.4445 
                            10.6587 13.4445 7.22226C13.4445 3.7858 10.6587 1 7.22226 1C3.7858 
                            1 1 3.7858 1 7.22226C1 10.6587 3.7858 13.4445 7.22226 13.4445Z" 
                            stroke="black" stroke-opacity="0.32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.0001 15.0001L11.6167 11.6167" 
                            stroke="black" stroke-opacity="0.32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            <input type='text' placeholder='Search'></input>

                        </div> */}

                    </div>
                    <p>
                        You can either select a mentor and undertake a project under the mentor or 
                        you can even suggest your own project and apply for the same to a mentor of your choice.
                    </p>
                    <table className='SelectMentorTable'>
                        <thead>
                            <th>MENTOR NAME</th>
                            <th>DEPARTMENT</th>
                            <th>PROJECT SUGGESTED</th>
                            <th>AVAILIBILITY</th>
                            <th></th>
                        </thead>
                        
                        {this.state.FacultyList.map((id, val) =>
                        <tr>
                        <td className='FACULTYNAME'>{id.Name}</td>
                        <td>{id.Position}, {id.Department}</td>
                        <td>Voice Recognition</td>
                        <td className={id.Availibility ? "GREENCOLOR" : "REDCOLOR"}>{id.Availibility ? "Available" : "Unavailable"}</td>
                        <td><Link to='/cube/studentdashboard/MentorProfile'><button className='VIEW'>View</button></Link></td>
                        </tr>
                        )}
                    </table>
                
                    <button onClick={this.SuggestProjectModal}>Suggest a Project</button>
                </div>

                
                <Modal  
                    backdrop="static"
                    size='lg'
                    keyboard={false}
                    className='SuggestModal' show={this.state.ShowSuggestModal} onHide={this.CloseSuggestModal}>
                    <Modal.Header className='SuggestModalHead'>
                        <h3>Suggest a Project</h3>
                        <button className='SuggestModalClose' onClick={this.CloseSuggestModal}>
                        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.6699 6.05078L6.66992 18.0508" stroke="#ED383F" 
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6.66992 6.05078L18.6699 18.0508" stroke="#ED383F" 
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        </button>
                    </Modal.Header>
                    <Modal.Body className='SuggestModalBody'>
                        <input type='text' className='INPUT1' placeholder='PROJECT TITLE'></input>
                        <select type='select' className='INPUT1' placeholder='CHOOSE A FACULTY' readOnly>
                            <option>Shikha</option>
                        </select>
                        <input type='text' placeholder='TECHNOLOGY REQUIRED'></input>
                        <textarea placeholder='DESCRIPTION'></textarea>

                        <button>SUBMIT</button>
                    </Modal.Body>
                </Modal>

            </Fragment>
        )
    }
}

export default SelectMentor
