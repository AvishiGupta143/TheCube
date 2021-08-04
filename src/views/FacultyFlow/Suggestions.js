import React, { Component, Fragment } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import "../../assets/css/StudentStylesheets/AllProjects.css";
import { Link } from 'react-router-dom';

export class Suggestions extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            SuggestedProjects:[
                {
                    Name:"Android Task Monitoring",
                    Description:"Modern day-to-day life of people in major cities is very demanding and the schedules are equally hectic. In such times, it is practically impossible to keep a track of all the activities/ appointments. Many a times, it happens that we may miss an important task; for example: taking medicines, attending a meeting, returning library books, paying the bills etc. And this cycle can keep going on endlessly. The human mind is not designed to multitask, it needs to work things out one at a time. This requires us to maintain our focus on the task at hand, and as a result other important things take a backstage and some may even slip out of our minds. In order to address this problem, we have come up with a Weekly Task Alerting System.",
                    Tech:"Python, Django, Mysql, HTML, CSS",
                    Availibility:true,
                    Student: "Manvi Srivastava"
                },
                {
                Name:"College Enquiry Chat Bot",
                Description:"The College bot project is built using artificial algorithms that analyses user’s queries and understand user’s message. This System is a web application which provides answer to the query of the student. Students just have to query through the bot which is used for chating. Students can chat using any format there is no specific format the user has to follow. The System uses built in artificial intelligence to answer the query. The answers are appropriate what the user queries. The User can query any college related activities through the system. The user does not have to personally go to the college for enquiry. The System analyses the question and than answers to the user. The system answers to the query as if it is answered by the person. With the help of artificial intelligence, the system answers the query asked by the students. The system replies using an effective Graphical user interface which implies that as if a real person is talking to the user.",
                Tech:"Java, Mysql, HTML, CSS",
                Availibility:true,
                Student: "Rupanshu Vaish"
                },
                {
                  Name:"Matrimonial Portal Project",
                  Description:"This online matrimonial site is mainly developed to let individual find their potential matches for marriage according to their priorities set. This project allows the phrase ‘Marriages are made in heaven’ to be rephrased as ‘Marriages are now made online’. This application allows to browse profiles of those who have registered themselves on this site. This allows individual to give their information such as Name, Gender, Religion, Caste, Marital status, Current salary, Occupation etc.This application also allows to upload photo of the individual registering and also allows to upload kundali picture of the individual. The person looking for marriage can register and search for a profile that matches their requirement. This application allows individual to search by gender, age, religion, caste, marital status and also allows individual to view kundali which today is at highest priority in many caste.",
                  Tech:"Node, Mysql, HTML, CSS",
                  Availibility:true,
                  Student: "Shubhi Kapoor"
                },
                {
                  Name:"Online Fashion Stylist Website",
                  Description:"The Online fashion shopping website project proposed here will automate the process of online shopping for the users by providing a customer-friendly experience. This system will connect the users & the fashion stylists. The users can view the stylists’ profiles. The users can view the available stylists and can request for chat. Based on the inputs received from the user, the stylist will recommend products and accessories that will suit the user’s interest & personality. Both the users & stylists can access the system by registering themselves on the website.",
                  Tech:"Node, Mysql, HTML, CSS",
                  Availibility:true,
                  Student: "Rohan Mehra"
                }
            ]
        }
    }
    

    render() {
        return (
            <Fragment>
                <div className='AllProjectsDiv'>
                    <h3>Student's Suggestions</h3>
                    <table className='AllProjectsTable'>
                        <thead>
                            <th>Project Name</th>
                            <th>Student Name</th>
                            <th>Technology Required</th>
                            <th>Action</th>
                        </thead>
                        {this.state.SuggestedProjects.map((id, val) =>
                            <tr>
                                <th>{id.Name}</th>
                                <td>{id.Student}</td>
                                <td>{id.Tech}</td>
                                <td><button className='ViewProjectBtn'><Link to='/cube/facultydashboard/viewsuggestedproject'>View</Link> <i className='fa fa-angle-right'></i></button></td>
                            </tr>
                        )}
                    </table>
                </div>
            </Fragment>
        )
    }
}

export default Suggestions
