import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import "../../assets/css/Home.css";
import FacultySignUp from './FacultySignUp';
import StudentSignUp from './StudentSignUp';
import FacultyLogin from './FacultyLogin';
import StudentLogin from './StudentLogin';
import { Link } from 'react-router-dom';

export class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             FacultyClicked:false,
             StudentClicked:true,
             FacultySignUp:false,
             StudentSignUp:true,
             FacultyLogin:false,
             StudentLogin:false
        }
    }

    StudentOption = () => {
        this.setState({
            StudentClicked:true,
            FacultyClicked:false,
            StudentSignUp:true,
            FacultySignUp:false,
            StudentLogin:false,
            FacultyLogin:false
        })
    }

    FacultyOption = () => {
        this.setState({
            StudentClicked:false,
            FacultyClicked:true,
            StudentSignUp:false,
            FacultySignUp:true,
            StudentLogin:false,
            FacultyLogin:false
        })
    }

    UpdateFaculty = (FacultySignUp,FacultyLogin) => {
        this.setState({
            FacultySignUp:FacultySignUp,
            FacultyLogin:FacultyLogin
        })
    }


    UpdateStudent = (StudentSignUp, StudentLogin) => {
        this.setState({
            StudentSignUp:StudentSignUp,
            StudentLogin:StudentLogin
        })
    }

    render() {
        return (
            <div className='HomePageBase'>

                <div className='WhatAreYouDiv'>
                    {this.state.FacultyClicked ? <button onClick={this.StudentOption} className='WhoBtn'>I am Student</button> : null}
                    {this.state.StudentClicked ? <button onClick={this.FacultyOption} className='WhoBtn'>I am Faculty</button> : null}
                </div>
                
                {this.state.FacultySignUp ? 
                <FacultySignUp 
                FacultySignUp ={this.state.FacultySignUp}
                FacultyLogin = {this.state.FacultyLogin}
                UpdateFaculty = {this.UpdateFaculty}
                /> 
                :null}

                {this.state.StudentSignUp ? <StudentSignUp
                StudentSignUp ={this.state.StudentSignUp}
                StudentLogin = {this.state.StudentLogin}
                UpdateStudent = {this.UpdateStudent}
                /> : null}


                
                {this.state.FacultyLogin ? <FacultyLogin
                FacultySignUp ={this.state.FacultySignUp}
                FacultyLogin = {this.state.FacultyLogin}
                UpdateFaculty = {this.UpdateFaculty}
                /> : null}

                {this.state.StudentLogin ? <StudentLogin
                StudentSignUp ={this.state.StudentSignUp}
                StudentLogin = {this.state.StudentLogin}
                UpdateStudent = {this.UpdateStudent} 
                /> : null}


                
            </div>
        )
    }
}

export default Home
