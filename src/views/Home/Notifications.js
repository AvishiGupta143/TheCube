import React, { Component } from 'react'
import { Fragment } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import "../../assets/css/Notifications.css";
import FemaleStudent from '../../assets/css/FemaleStudent.svg';

export class Notifications extends Component {
    render() {
        return (
            <Fragment>
                <div className='NotificationDiv'>
                    <h4>Notifications</h4>
                    <span className='LightWeight'>Recent</span>
                    <table className='EachNotificationDiv'>
                        <tr>
                            <td className='SmallWidth'><img src={FemaleStudent}></img></td>
                            <th>Aditi Saini has invited you to form a team.
                                <br></br>
                                <span className='LightWeight'>5 min ago</span>
                            </th>
                            <td>
                                <button className='AcceptBtn'> 
                                <svg className='CheckSvg'
                                width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 10.0857V11.0057C20.9988 13.1621 20.3005 15.2604 19.0093 16.9875C17.7182 18.7147 
                                15.9033 19.9782 13.8354 20.5896C11.7674 21.201 9.55726 21.1276 7.53447 20.3803C5.51168 19.633 
                                3.78465 18.2518 2.61096 16.4428C1.43727 14.6338 0.879791 12.4938 1.02168 10.342C1.16356 8.19029 
                                1.99721 6.14205 3.39828 4.5028C4.79935 2.86354 6.69279 1.72111 8.79619 1.24587C10.8996 0.770634 
                                13.1003 0.988061 15.07 1.86572" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M21 3.00586L11 13.0159L8 10.0159" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                Accept
                                </button>
                            </td>
                            <td>
                                <button className='DeclineBtn'>
                                <svg className='CrossSvg'
                                width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.6699 6.05078L6.66992 18.0508" stroke="#ED383F" 
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M6.66992 6.05078L18.6699 18.0508" stroke="#ED383F" 
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Decline
                                </button>
                            </td>
                        </tr>

                        <tr>
                            <td className='SmallWidth'><img src={FemaleStudent}></img></td>
                            <th>Congratulations! Your project request for Voice Tracing and Recognition to 
                                Ms. Shikha Baliyan has been accepted.
                                <br></br>
                                <span className='LightWeight'>1 hour ago</span>
                            </th>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className='SmallWidth'><img src={FemaleStudent}></img></td>
                            <th>Congratulations! Avishi Gupta has accepted your invite to form a team. You are now the leader of your team.
                                <br></br>
                                <span className='LightWeight'>5 hour ago</span>
                            </th>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                    <span className='LightWeight'>Earlier</span>
                    <table className='EachNotificationDiv'>
                        <tr>
                            <td className='SmallWidth'><img src={FemaleStudent}></img></td>
                            <th>Aditi Saini has invited you to form a team.
                                <br></br>
                                <span className='LightWeight'>1 week ago</span>
                            </th>
                            <td>
                                <button className='AcceptBtn'> 
                                <svg className='CheckSvg'
                                width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 10.0857V11.0057C20.9988 13.1621 20.3005 15.2604 19.0093 16.9875C17.7182 18.7147 
                                15.9033 19.9782 13.8354 20.5896C11.7674 21.201 9.55726 21.1276 7.53447 20.3803C5.51168 19.633 
                                3.78465 18.2518 2.61096 16.4428C1.43727 14.6338 0.879791 12.4938 1.02168 10.342C1.16356 8.19029 
                                1.99721 6.14205 3.39828 4.5028C4.79935 2.86354 6.69279 1.72111 8.79619 1.24587C10.8996 0.770634 
                                13.1003 0.988061 15.07 1.86572" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M21 3.00586L11 13.0159L8 10.0159" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                Accept
                                </button>
                            </td>
                            <td>
                                <button className='DeclineBtn'>
                                <svg className='CrossSvg'
                                width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.6699 6.05078L6.66992 18.0508" stroke="#ED383F" 
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M6.66992 6.05078L18.6699 18.0508" stroke="#ED383F" 
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Decline
                                </button>
                            </td>
                        </tr>

                        <tr>
                            <td className='SmallWidth'><img src={FemaleStudent}></img></td>
                            <th>Congratulations! Your project request for Voice Tracing and Recognition to 
                                Ms. Shikha Baliyan has been accepted.
                                <br></br>
                                <span className='LightWeight'>5 week ago</span>
                            </th>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className='SmallWidth'><img src={FemaleStudent}></img></td>
                            <th>Congratulations! Avishi Gupta has accepted your invite to form a team. You are now the leader of your team.
                                <br></br>
                                <span className='LightWeight'>1 month ago</span>
                            </th>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                </div>
            </Fragment>
        )
    }
}

export default Notifications
