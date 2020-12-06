import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class StudentSignUp extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            StudentSignUp:this.props.StudentSignUp,
            StudentLogin:this.props.StudentLogin
        }
    }

    componentWillReceiveProps(){
        this.props.UpdateStudent(this.state.StudentSignUp, this.state.StudentLogin)
    }
    
    LoginUpdate = () =>{
        this.setState({
            StudentLogin:true,
            StudentSignUp:false
        })
        this.props.UpdateStudent(this.state.StudentSignUp, this.state.StudentLogin)
    }



    render() {
        return (
            <div className='FacultySignUpDiv'>
                <h3>Student Account</h3>
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

export default StudentSignUp
