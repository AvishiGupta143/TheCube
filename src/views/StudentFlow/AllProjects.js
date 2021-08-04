import React, { Component, Fragment } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import "../../assets/css/StudentStylesheets/AllProjects.css";
import { Link } from 'react-router-dom';

export class AllProjects extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            Projects:[
                {
                    Name:"Secure Online Auction System",
                    Description:"Online auction however is a different business model where the items are sold through price bidding. Usually bidding have start price and ending time. Potential buyers in auction and the winner is the one who bids the item for highest price. We treat the fraud detection with a binary classification. For buying product online user have to provide his personal details like email address, license number, PAN number etc. Only the valid user will have authority to bid. This prevents various frauds according in online shopping.",
                    Tech:"Python, Django, Mysql, HTML, CSS",
                    Availibility:true,
                    Mentor: "Ms. Shikha Baliyan"
                },
                {
                Name:"Android Battery Saver System",
                Description:"This System is an innovative Application allowing the System to take the usage from Build-in classes and put a list in front of the user for him to review. The List also consists of the applications taking the battery usage and also determines the battery level. If the Battery level is low and the consumption of apps is more the system will trigger an alarm telling the user to force stop or close the apps. This System uses Android Studio as its front end and doesn’t use any backend as this type of application doesn’t need one since it uses the data from the phone itself and projects to the user. So basically the system helps the user to refrain certain apps to consume more battery power and drain it quickly and user can take some actions on it.",
                Tech:"Java, Mysql, HTML, CSS",
                Availibility:true,
                Mentor: "Mr. Rudra Kapoor"
                },
                {
                Name:"Voice Tracing and Recognition",
                Description:"Voice identification, police technique for identifying individuals by the time, frequency, and intensity of their speech-sound waves. A sound spectrograph is employed to record these waves in the form of a graph that may be compared to graphs of other individuals and differentiated. Though voice graphs (or voiceprints) have been used in courtroom proceedings, the accuracy of this technique in identifying individuals is a subject of controversy among speech scientists.",
                Tech:"Node, Mysql, HTML, CSS",
                Availibility:true,
                Mentor: "Mrs. Parneet Kaur"
                },
                {
                Name:"E-Commerce Website",
                Description:"An e-commerce website, by definition, is a website that allows you to buy and sell tangible goods, digital products or services online. Trade, be it barter exchange or buying and selling of goods and services has been prevalent for centuries. No one can be self-sufficient. And this brings out the need for demand and supply of goods and services. Transactions have been going on all over the world for centuries, locally, and across locations. Keeping the same concept in mind, now think electronic. However, also bear in mind that with the whole world going online, data privacy laws have become increasingly stringent.",
                Tech:"Node, Mysql, HTML, CSS",
                Availibility:true,
                Mentor: "Mrs. Neeti Singh"
                }
            ]
        }
    }
    
    render() {
        return (
            <Fragment>
                <div className='AllProjectsDiv'>
                    <h3>Available Projects</h3>
                    <table className='AllProjectsTable'>
                        <thead>
                            <th>Project Name</th>
                            <th>Faculty Mentor</th>
                            <th>Technology Required</th>
                            <th>Action</th>
                        </thead>
                        
                        {this.state.Projects.map((id, val) =>
                        <tr>
                            <th>{id.Name}</th>
                            <td>{id.Mentor}</td>
                            <td>{id.Tech}</td>
                            <td><button className='ViewProjectBtn'><Link to='/cube/studentdashboard/MentorProfile'>View</Link> <i className='fa fa-angle-right'></i></button></td>
                        </tr>
                        )}
                    </table>
                </div>
            </Fragment>
        )
    }
}

export default AllProjects
