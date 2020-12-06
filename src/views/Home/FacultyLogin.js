import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

export class FacultyLogin extends Component {
    
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
            FacultyLogin:false,
            FacultySignUp:true
        })
        this.props.UpdateFaculty(this.state.FacultySignUp, this.state.FacultyLogin)
    }

    render() {
        return (
            <Fragment>
                <div className='FacultyLoginDiv'>
                <h3>Faculty Account</h3>
                <h5>Login</h5>
                <input type='text' placeholder='Email'></input>
                <input type='text' placeholder='Password'></input>
                <Link><button className='LOGINBTN'>Login</button></Link>
                <span>Don't have an account? <p onClick={this.LoginUpdate} className='LoginOpt'>Sign Up</p> </span>
                </div>
            </Fragment>
        )
    }
}

export default FacultyLogin
