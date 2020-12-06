import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

export class StudentLogin extends Component {
    
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
            StudentLogin:false,
            StudentSignUp:true
        })
        this.props.UpdateStudent(this.state.StudentSignUp, this.state.StudentLogin)
        
    }


    render() {
        return (
            <Fragment>
                <div className='FacultyLoginDiv'>
                <h3>Student Account</h3>
                <h5>Login</h5>
                <input type='text' placeholder='Email'></input>
                <input type='text' placeholder='Password'></input>
                <Link to="/cube/welcomestudent"><button className='LOGINBTN'>Login</button></Link>
                <span>Don't have an account? <p onClick={this.LoginUpdate} className='LoginOpt'>Sign Up</p> </span>
                </div>
            </Fragment>
        )
    }
}

export default StudentLogin
