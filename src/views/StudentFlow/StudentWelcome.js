import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import "../../assets/css/StudentStylesheets/StudentWelcome.css";
import PlanePic from "../../assets/css/StudentStylesheets/PlanePic.png";
import OverviewPic from "../../assets/css/StudentStylesheets/OverviewPic.png";
import User from "../../assets/css/StudentStylesheets/User.png";
import { Link } from "react-router-dom";
import API from "../../API/API";

export class StudentWelcome extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       StudentsList:[],
       FacultyList:[],
       Name:"",
       CurrentUserId:null,
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
    const response = await API.GetAllStudents();
    if (response.ok) {
      var StudentsList = response.data.StudentsList
      for (var i = 0; i < StudentsList.length; i++) {
        if (StudentsList[i]._id === localStorage.getItem("CurrentUserId")) {
            console.log("Matched "+localStorage.getItem("CurrentUserId"))
            StudentsList.splice(i,1)
            console.log(StudentsList)
            this.setState({
              StudentsList:StudentsList
            })
        }
      }
      console.log(this.state.StudentsList)
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

                <span style={{ marginTop: "30px", fontSize: "18px" }}>
                  For hassle-free submission of your Project
                </span>
              </div>
              <img alt="" src={OverviewPic}></img>
            </div>

            <div className="ProgressDiv">
              <div className="AllProjectDiv">
                <h4>Projects Available</h4>
                <span>
                  <Link to="/cube/studentdashboard/AllProjects">View All</Link>
                </span>
              </div>
              <table className="EachProgressBar">
              {this.state.Projects.map((id, val) =>
                <tr>
                  <th>{id.Name}</th>
                  <td className="RIGHTALIGN">Mentor: {id.Mentor}</td>
                </tr>
              )}
              </table>
            </div>
          </div>
          
          <div className="ROWDivs">

            <h4>Find Team Members</h4>
            {this.state.StudentsList.map((id, val) =>
              <div className="TeamMembersDiv">
              <img alt="" src={"http://127.0.0.1:3001/"+id.ProfilePicture}></img>
              <span>{id.Name}</span>
            </div>
            )}
            <span>
              <Link to="/cube/studentdashboard/TeamFormation">
                View All <i className="fa fa-angle-right"></i>
              </Link>
            </span>

            <h4>Find Faculty Mentor</h4>

            {this.state.FacultyList.map((id, val) =>
            <div className="TeamMembersDiv">
            <img alt="" src={"http://127.0.0.1:3001/"+id.ProfilePicture}></img>
              <div className="TeamFacultyDiv">
                <span>{id.Name}</span>
                <small>{id.Position}, {id.Department}</small>
              </div>
            </div>
            )}
            <span>
              <Link to="/cube/studentdashboard/SelectMentor">
                View All <i className="fa fa-angle-right"></i>
              </Link>
            </span>
          
          </div>
        </div>
      </Fragment>
    );
  }
}

export default StudentWelcome;
