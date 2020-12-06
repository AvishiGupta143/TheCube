import React, { Component, Fragment } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import "../../assets/css/SubmitPage.css";
import WelPic from '../../assets/css/WelcomeScreenPic.jpg'; 

export class SubmitProject extends Component {
    render() {
        return (
            <Fragment>
                <div className='SubmitDiv'>
                    <img src={WelPic}></img>
                    <p>
                        Yay! You have submitted your project and given all the presentations!
                        <br/>
                        You’ll receive a notification once your result is calculated by the mentor.
                    </p>
                </div>
            </Fragment>
        )
    }
}

export default SubmitProject
