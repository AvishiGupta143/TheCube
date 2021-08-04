import React, { Component } from "react";
import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import "../../assets/css/FacultyStylesheets/FacultyWelcome.css";
import PlanePic from "../../assets/css/StudentStylesheets/PlanePic.png";
import OverviewPic from "../../assets/css/FacultyStylesheets/OverviewFaculty.png";
import User from "../../assets/css/StudentStylesheets/User.png";
import { Link } from "react-router-dom";
import API from "../../API/API";

export class FacultyWelcome extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
      ShowUploadModal:false,
      StudentsList:[],
      FacultyList:[],
      Name:"",
      CurrentUserId:null,
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
  

  

  componentDidMount(){
    this.GetAllStudents()
    this.GetAllFaculties()
    this.GetCurrentUser()
  }
  GetCurrentUser = async () => {
    var id = localStorage.getItem("CurrentUserId");
    const response = await API.GetEachUser(id);
    if (response.ok) {
      this.setState({
        Name:response.data.User.Name.split(" ")[0],
        CurrentUserId:localStorage.getItem("CurrentUserId")
      })
    }
    else{
      console.log(response.data)
    }
  }
  GetAllStudents = async () => {
    // API CALL
    const response = await API.GetAvailableStudents();
    if (response.ok) {
      console.log(response.data);
      this.setState({
        StudentsList:response.data.StudentsList
      })
      
    } else {
      console.log("Error");
    }
  };
  GetAllFaculties = async () => {
    // API CALL
    const response = await API.GetAvailableFaculty();
    if (response.ok) {
      console.log(response.data);
      this.setState({
        FacultyList:response.data.FacultyList
      })
    } else {
      console.log("Error");
    }
  };


  OpenUploadProject = () => {
    this.setState({
      ShowUploadModal: true,
    });
  };
  CloseUploadProject = () => {
    this.setState({
      ShowUploadModal: false,
    });
  };

  render() {
    return (
      <Fragment>
        <div className="DASHBOARDHEAD">
          <div className="DASHBOARDINFO">
            <h3>Hi {this.state.Name},</h3>
            <p>We have few things for you to look at...</p>
          </div>

          <img alt="" src={PlanePic}></img>
        </div>

        <div className="DASHBOARDCONTENT">
          <div className="ColumnDivs">
            <div className="OverviewDiv">
              <div className="OverviewText">
                <h4>Portal Overview</h4>
                <p style={{ marginTop: "10px" }}>
                  The Cube makes the process of undertaking a project easier and
                  less tedious.
                  <br></br>
                  <br></br>
                  Students can actually make something that they are genuinely
                  interested in and will be assisted by the right mentor for
                  this. They will have a clear knowledge of what are the various
                  options available to them and its requirements.
                </p>
                <button>
                  <Link to="/cube/facultydashboard/uploadprojects">
                    Upload a Project
                  </Link>
                </button>
              </div>
              <img alt="" src={OverviewPic}></img>
            </div>

            <div className="ProgressDiv">
              <div className="AllProjectDiv">
                <h4>Suggested Projects</h4>
                <span>
                  <Link to="/cube/facultydashboard/suggestions">View All</Link>
                </span>
              </div>
              <table className="EachProgressBar">
              {this.state.SuggestedProjects.map((id, val) =>
                <tr>
                  <th>{id.Name}</th>
                  <td className="RIGHTALIGN">Suggested By: {id.Student}</td>
                </tr>
              )}
              </table>
            </div>
          </div>

          <div className="ROWDivs">
            <h4>Students Available</h4>
            
            {this.state.StudentsList.map((id, val) =>
              <div className="TeamMembersDiv">
              <img alt="" src={"http://127.0.0.1:3001/"+id.ProfilePicture}></img>
              <span>{id.Name}</span>
            </div>
            )}
            <span>
              <Link to="/cube/facultydashboard/allstudents">
                View All <i className="fa fa-angle-right"></i>
              </Link>
            </span>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default FacultyWelcome;
