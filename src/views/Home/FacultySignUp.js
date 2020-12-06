import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import "../../assets/css/Faculty.css";
import { Link } from 'react-router-dom';

export class FacultySignUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             FacultySignUp:this.props.FacultySignUp,
             FacultyLogin:this.props.FacultyLogin
        }
    }
    componentWillReceiveProps(){
        this.props.UpdateFaculty(this.state.FacultySignUp, this.state.FacultyLogin)
    }
    
    LoginUpdate = () =>{
        this.setState({
            FacultyLogin:true,
            FacultySignUp:false
        })
        this.props.UpdateFaculty(this.state.FacultySignUp, this.state.FacultyLogin)
    }



    render() {
        return (
            <div className='FacultySignUpDiv'>
                <h3>Faculty Account</h3>
                <h5>Sign Up</h5>
                <input type='text' placeholder='Name'></input>
                <input type='text' placeholder='Email'></input>
                <input type='text' placeholder='Password'></input>
                <input type='text' placeholder='Confirm Password'></input>
                <Link><button className='SIGNBTN'>Sign Up</button></Link>
                <span>Already have an account? <p onClick={this.LoginUpdate} className='LoginOpt'>Login</p> </span>
            </div>
        )
    }
}

export default FacultySignUp
