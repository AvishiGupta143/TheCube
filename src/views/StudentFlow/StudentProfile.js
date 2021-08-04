import React, { Component, Fragment } from "react";
import "../../assets/css/StudentStylesheets/StudentProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import ProfilePic from "../../assets/css/StudentStylesheets/ProfilePic.png";
import ProjectFileSvg from "../../assets/css/StudentStylesheets/ProjectFileSvg.svg";
import PeopleSvg from "../../assets/css/StudentStylesheets/PeopleSvg.svg";
import FacultyMentorSvg from "../../assets/css/StudentStylesheets/FacultyMentorSvg.svg";
import User from "../../assets/css/StudentStylesheets/User.png";
import { Link } from "react-router-dom";
import API from "../../API/API";

export class StudentProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      TeamCompleted: true,
      FacultyTaken: true,
      CompleteProject: false,
      SubmitProject: false,
      Name:"",
      StudentNumber:"",
      Department:"",
      Email:"",
      CurrentUserId:null,
    };
  }


  componentDidMount(){
    this.GetCurrentUser()
  }
  GetCurrentUser = async () => {
    var id = localStorage.getItem("CurrentUserId");
    const response = await API.GetEachUser(id);
    if (response.ok) {
      this.setState({
        Name:response.data.User.Name,
        StudentNumber:response.data.User.StudentNumber,
        Department:response.data.User.Department,
        Email:response.data.User.Email,
        CurrentUserId:localStorage.getItem("CurrentUserId")
      })
    }
    else{
      console.log(response.data)
    }
  }

  render() {
    return (
      <Fragment>
        <div className="StudentProfileDiv">
          <div className="StudentProfileSideBar">
            <h3>Profile</h3>
            <img alt="" src={ProfilePic}></img>
            <h4>{this.state.Name}</h4>

            <span>Student Number</span>
            <p>{this.state.StudentNumber}</p>

            <span>Email ID</span>
            <p>{this.state.Email}</p>

            {this.state.TeamCompleted ? (
              <div className="TeamFormedDiv">
                <span>Team ID</span>
                <p>XHGYG54SE54FH750</p>
              </div>
            ) : null}

            <div className="StudentProgressDiv">
              <div
                className={this.state.TeamCompleted ? "DoneTask" : "DoingTask"}
              >
                <span>1</span>
                <p>Form a Team</p>
              </div>

              <div
                className={
                  this.state.TeamCompleted ? "ProgLineDone" : "ProgLineUnDone"
                }
              ></div>

              <div
                className={
                  this.state.FacultyTaken
                    ? "DoneTask"
                    : this.state.TeamCompleted
                    ? "DoingTask"
                    : "UnDoneTask"
                }
              >
                <span>2</span>
                <p>Select Mentor</p>
              </div>

              <div
                className={
                  this.state.FacultyTaken ? "ProgLineDone" : "ProgLineUnDone"
                }
              ></div>

              <div
                className={
                  this.state.CompleteProject
                    ? "DoneTask"
                    : this.state.FacultyTaken
                    ? "DoingTask"
                    : "UnDoneTask"
                }
              >
                <span>3</span>
                <p>Complete Your Project</p>
              </div>

              <div
                className={
                  this.state.CompleteProject ? "ProgLineDone" : "ProgLineUnDone"
                }
              ></div>

              <div
                className={
                  this.state.SubmitProject
                    ? "DoneTask"
                    : this.state.CompleteProject
                    ? "DoingTask"
                    : "UnDoneTask"
                }
              >
                <span>4</span>
                <p>Submit Your Project</p>
              </div>
            </div>
          </div>

          <div className="StudentProfileContent">
            {this.state.FacultyTaken ? (
              <div className="ProjectUnderTakenPart">
                <h5>Project UnderTaken</h5>
                <h3>Secure Online Auction System</h3>
                <small>Online auction however is a different business model where the items are sold through price bidding. 
                  Usually bidding have start price and ending time. Potential buyers in auction and the winner is the one who bids the item for highest price. 
                  We treat the fraud detection with a binary classification. For buying product online user have to provide his personal details like email address, 
                  license number, PAN number etc. Only the valid user will have authority to bid. This prevents various frauds according in online shopping.
                </small>
                <br></br>
                <small>Technology Required</small>
                <p>Python, Django Framework, MySQL</p>
              </div>
            ) : (
              <div className="ProjectUnderTakenPart">
                <h5>Project UnderTaken</h5>
                <img alt="" src={ProjectFileSvg}></img>
                <span>
                  You can choose from a list of available projects and apply for
                  it.
                </span>
                <Link to="/cube/studentdashboard/AllProjects">
                  <p>
                    Available Projects <i className="fa fa-angle-right"></i>
                  </p>
                </Link>
              </div>
            )}

            {this.state.TeamCompleted ? (
              <div className="TeamMembersPart">
                <h5>Team Members</h5>
                <table>
                  <tr>
                    <th>
                      <img alt="" src={User}></img>
                    </th>
                    <td>Kartikey Vaish</td>
                    <td>kartikey@gmail.com</td>
                    <td>
                      <span className="LightWeight">Student Number:</span>
                      1713565
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <img alt="" src={User}></img>
                    </th>
                    <td>Manvi Srivastava</td>
                    <td>manvi@gmail.com</td>
                    <td>
                      <span className="LightWeight">Student Number:</span>
                      1713067
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <img alt="" src={User}></img>
                    </th>
                    <td>Avishi Gupta</td>
                    <td>avi@gmail.com</td>
                    <td>
                      <span className="LightWeight">Student Number:</span>
                      1713112
                    </td>
                  </tr>
                </table>
              </div>
            ) : (
              <div className="TeamMembersPart">
                <h5>Team Members</h5>
                <img alt="" src={PeopleSvg}></img>
                <span>
                  Send invites to your batchmates and make a team and proceed
                  further.
                </span>
                <Link to="/cube/studentdashboard/TeamFormation">
                  <p>
                    Find Team Members <i className="fa fa-angle-right"></i>
                  </p>
                </Link>
              </div>
            )}

            {this.state.FacultyTaken ? (
              <div className="FacultyMentorPart">
                <h5>Faculty Mentor</h5>
                <table>
                  <tr>
                    <th>
                      <img alt="" src={User}></img>
                    </th>
                    <td>
                      <p>Ms. Shikha Baliyan</p>
                      <small className="LightWeight">
                        Assistant Professor, IT | shikhajain@gmail.com
                      </small>
                    </td>
                  </tr>
                </table>
              </div>
            ) : (
              <div className="FacultyMentorPart">
                <h5>Faculty Mentor</h5>
                <img alt="" src={FacultyMentorSvg}></img>
                <span>
                  Browse through the list of mentors and their recommended
                  projects.
                </span>
                <Link to="/cube/studentdashboard/SelectMentor">
                  <p>
                    Find Faculty Members<i className="fa fa-angle-right"></i>
                  </p>
                </Link>
              </div>
            )}

            {this.state.CompleteProject ? (
              <div className="CompleteProjectPart">
                <h5>Project Completion</h5>
                <h3>
                  You have completed your Project Successfully. Please collect
                  your Certificate from Submit Section.
                </h3>
              </div>
            ) : (
              <div className="CompleteProjectPart">
                <h5>Project Completion</h5>
                <img alt="" src={ProjectFileSvg}></img>
                <span>
                  You can start submitting your documents now. Head to
                  completion page.
                </span>
                <Link to="/cube/studentdashboard/CompleteProject">
                  <p>
                    Complete Project<i className="fa fa-angle-right"></i>
                  </p>
                </Link>
              </div>
            )}

            {this.state.CompleteProject ? (
              <div className="CompleteProjectPart">
                <h5>Project Submission & Certificate Collection</h5>
                <h3>
                  Congratulations! You have successfully submitted your Project.
                  Please download your Certificate for further reference.
                </h3>
                <button>
                  <i className="fa fa-download CheckSvg"></i>Download
                  Certificate
                </button>
              </div>
            ) : (
              <div className="CompleteProjectPart">
                <h5>Project Submission & Certificate Collection</h5>
                <img alt="" src={ProjectFileSvg}></img>
                <span>
                  You have to first complete your project to achieve your
                  certificate.Head to completion page.
                </span>
                <Link to="/cube/studentdashboard/CompleteProject">
                  <p>
                    Complete Project<i className="fa fa-angle-right"></i>
                  </p>
                </Link>
              </div>
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default StudentProfile;
