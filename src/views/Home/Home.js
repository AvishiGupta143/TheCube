import React, { Component } from 'react'
import { Fragment } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import "../../assets/css/Home.css";
import { Link, withRouter } from 'react-router-dom';
import Illustration from '../../assets/css/Illustration.svg';
import "../../assets/css/SignUpLogin.css";
import NameSvg from '../../assets/css/NameSvg.svg';
import EmailSvg from '../../assets/css/EmailSvg.svg';
import StudentNoSvg from '../../assets/css/StudentNoSvg.svg';
import DeptSvg from '../../assets/css/DeptSvg.svg';
import PasswordSvg from '../../assets/css/PasswordSvg.svg';
import GenderSvg from '../../assets/css/GenderSvg.svg';
import PositionSvg from '../../assets/css/PositionSvg.svg';
import ShowPassSvg from '../../assets/css/ShowPassSvg.svg';

export class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             SignUpClicked:true,
             LoginClicked:false
        }
    }
    UpdateLoginView = (SignUpClicked,LoginClicked) =>{
        this.setState({
            SignUpClicked:SignUpClicked,
            LoginClicked:LoginClicked
        })
    }
    render() {
        return (
            <Fragment>
                <div className='HomePage'>
                    <div className='IllustrationDiv'>
                        <h3>The Cube</h3>
                        <h2>Get all of your project updates, when you need them!</h2>
                        <img src={Illustration}></img>
                    </div>
                    <div className='WorkingDiv'>
                        {this.state.SignUpClicked ? <SignUp UpdateLoginView={this.UpdateLoginView} LoginClicked={this.state.LoginClicked} SignUpClicked={this.state.SignUpClicked}/> : null}
                        {this.state.LoginClicked ? <Login UpdateLoginView={this.UpdateLoginView} LoginClicked={this.state.LoginClicked} SignUpClicked={this.state.SignUpClicked}/> : null}
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Home





class SignUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            SignUpClicked:this.props.SignUpClicked,
            LoginClicked:this.props.LoginClicked,
            FacultyClicked:false,
            StudentClicked:true,
            MaleClicked:true,
            FemaleClicked:false,
            ErrorOccured:false
        }
    }
    
    
    LoginView = () =>{
        this.setState({
            SignUpClicked:false,
            LoginClicked:true
        })
        this.props.UpdateLoginView(this.state.LoginClicked, this.state.SignUpClicked)
    }

    ToggleIdentity = (str) =>{
        if (str === 'Student'){
            this.setState({
                FacultyClicked:false,
                StudentClicked:true
            })

        }else if (str === 'Faculty'){
            this.setState({
                FacultyClicked:true,
                StudentClicked:false
            })

        }
    }

    ToggleGender = (str) =>{
        if (str === 'Male'){
            this.setState({
                MaleClicked:true,
                FemaleClicked:false
            })

        }else if (str === 'Female'){
            this.setState({
                MaleClicked:false,
                FemaleClicked:true
            })

        }
    }

    SignUp = () => {
        this.setState({
            LoginClicked:true,
            SignUpClicked:false
        })
        this.props.UpdateLoginView(this.state.LoginClicked, this.state.SignUpClicked)
    }



    render() {
        return (
            <Fragment>
                <div className='SignUpDiv'>
                    <h3>Register to The Cube</h3>
                    <div className='EachInputDiv'>
                        <img src={NameSvg}></img>
                        <input type='text' placeholder='First Name'></input>
                    </div>
                    
                    <div className='EachInputDiv'>
                        <img src={NameSvg}></img>
                        <input type='text' placeholder='Last Name'></input>
                    </div>

                    <div className='EachInputDiv'>
                        <img src={EmailSvg}></img>
                        <input type='text' placeholder='Email Address'></input>
                    </div>
                    

                    <div className='WhoAreYouDiv'>
                        <p>You are a: </p>
                        <input 
                        checked={this.state.StudentClicked}
                        type='radio' 
                        onClick={ () => {this.ToggleIdentity('Student')}}></input>
                        <span>Student</span>

                        <input 
                        checked={this.state.FacultyClicked}
                        type='radio' 
                        onClick={ () => {this.ToggleIdentity('Faculty')}}></input>
                        <span>Faculty</span>
                    </div>

                    {this.state.StudentClicked ? <div className='EachInputDiv SMALLINPUT'>
                        <img src={StudentNoSvg}></img>
                        <input type='text' placeholder='Student Number'></input>
                    </div> : null}

                    {this.state.FacultyClicked ? <div className='EachInputDiv SMALLINPUT'>
                        <img src={PositionSvg}></img>
                        <select type='text'  placeholder='Position'>
                            <option>Position</option>
                            <option>Professor</option>
                            <option>HOD</option>
                            <option>Dean</option>
                        </select>
                    </div> : null}

                    <div className='EachInputDiv SMALLINPUT'>
                        <img src={DeptSvg}></img>
                        <select type='text' placeholder='Department'>
                            <option>Department</option>
                            <option>IT</option>
                            <option>CSE</option>
                            <option>ECE</option>
                        </select>
                    </div>

                    <div className='WhoAreYouDiv'>
                        <p>Gender: </p>
                        <input 
                        checked={this.state.MaleClicked}
                        onClick={ () => {this.ToggleGender('Male')}}
                        type='radio'></input>
                        <span>Male</span>


                        <input 
                        checked={this.state.FemaleClicked}
                        onClick={ () => {this.ToggleGender('Female')}}
                        type='radio'></input>
                        <span>Female</span>
                    </div>


                    <div className='EachInputDiv morewidth'>
                        <img src={PasswordSvg}></img>
                        <input type='text' placeholder='Password'></input>
                        <img className='ShowSvg' src={ShowPassSvg}></img>
                    </div>
                    <div className='EachInputDiv morewidth'>
                        <img src={PasswordSvg}></img>
                        <input type='text' placeholder='Confirm Password'></input>
                        <img className='ShowSvg' src={ShowPassSvg}></img>
                    </div>

                    {this.state.ErrorOccured ? <p className='ERRORTEXT'>Something Went Wrong</p> : null}
                    <div className='SignUpLoginOpts'>
                    <button onClick={this.SignUp}>Sign Up</button>
                    <span className='LightWeight'>Already a Member?<span className='DarkWeight' onClick={this.LoginView}>Login</span></span>
                    </div>

                </div>
            </Fragment>
        )
    }
}


class Login extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            SignUpClicked:this.props.SignUpClicked,
            LoginClicked:this.props.LoginClicked
        }
    }
    
    
    SignUpView = () =>{
        this.setState({
            SignUpClicked:true,
            LoginClicked:false
        })
        this.props.UpdateLoginView(this.state.LoginClicked, this.state.SignUpClicked)
    }

    render() {
        return (
            <div className='LoginDiv'>
                <h3>Log In to The Cube</h3>

                <div className='EachInputDiv lesswidth'>
                    <img src={EmailSvg}></img>
                    <input type='text' placeholder='Email Address'></input>
                </div> 

                <div className='EachInputDiv'>
                    <img src={PasswordSvg}></img>
                    <input type='text' placeholder='Confirm Password'></input>
                    <img className='ShowSvg' src={ShowPassSvg}></img>
                </div>

                <div className='SignUpLoginOpts'>
                    <Link to='/cube/studentdashboard/welcomestudent'>Login</Link>
                    <span className='LightWeight'>Not a Member?<span className='DarkWeight' onClick={this.SignUpView}>Register</span></span>
                </div>

            </div>
        )
    }
}

