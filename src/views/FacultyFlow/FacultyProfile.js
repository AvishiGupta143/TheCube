import React, { Component, Fragment } from "react";
import "../../assets/css/StudentStylesheets/StudentProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import ProfilePic from "../../assets/css/StudentStylesheets/ProfilePic.png";
import ProjectFileSvg from "../../assets/css/StudentStylesheets/ProjectFileSvg.svg";
import User from "../../assets/css/StudentStylesheets/User.png";
import { Link } from "react-router-dom";
import API from "../../API/API";

export class FacultyProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ProjectUploaded: true,
      TeamCompleted: true,
      CheckStatus: false,
      ReviewProject: false,
      Name:"",
      Position:"",
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
        Position:response.data.User.Position,
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

            <span>Position & Department</span>
            <p>{this.state.Position} {this.state.Department}</p>

            <span>Email ID</span>
            <p>{this.state.Email}</p>

            <div className="StudentProgressDiv">
              <div
                className={
                  this.state.ProjectUploaded ? "DoneTask" : "DoingTask"
                }
              >
                <span>1</span>
                <p>Upload your Projects</p>
              </div>

              <div
                className={
                  this.state.ProjectUploaded ? "ProgLineDone" : "ProgLineUnDone"
                }
              ></div>

              <div
                className={
                  this.state.TeamCompleted
                    ? "DoneTask"
                    : this.state.ProjectUploaded
                    ? "DoingTask"
                    : "UnDoneTask"
                }
              >
                <span>2</span>
                <p>Select Team</p>
              </div>

              <div
                className={
                  this.state.TeamCompleted ? "ProgLineDone" : "ProgLineUnDone"
                }
              ></div>

              <div
                className={
                  this.state.CheckStatus
                    ? "DoneTask"
                    : this.state.TeamCompleted
                    ? "DoingTask"
                    : "UnDoneTask"
                }
              >
                <span>3</span>
                <p>Check Project Status</p>
              </div>

              <div
                className={
                  this.state.CheckStatus ? "ProgLineDone" : "ProgLineUnDone"
                }
              ></div>

              <div
                className={
                  this.state.ReviewProject
                    ? "DoneTask"
                    : this.state.CheckStatus
                    ? "DoingTask"
                    : "UnDoneTask"
                }
              >
                <span>4</span>
                <p>Review Project</p>
              </div>
            </div>
          </div>

          <div className="StudentProfileContent">
            {this.state.ProjectUploaded ? (
              <div className="ProjectUnderTakenPart">
                <h5>Project 1</h5>
                <div className="ProjectStatusLink">
                  <h3>Secure Online Auction System</h3>
                  {this.state.TeamCompleted ? (
                    <Link to="/cube/facultydashboard/projectstatus">
                      See Project Status
                    </Link>
                  ) : null}
                </div>
                <p>
                  Online auction however is a different business model where the items are sold through price bidding. 
                  Usually bidding have start price and ending time. Potential buyers in auction and the winner is the one 
                  who bids the item for highest price. We treat the fraud detection with a binary classification. 
                  For buying product online user have to provide his personal details like email address, license number, 
                  PAN number etc. Only the valid user will have authority to bid. This prevents various frauds according in 
                  online shopping.
                </p>
                <small>Technology Required</small>
                <p>Python, Django Framework, MySQL</p>
                {this.state.TeamCompleted ? (
                  <>
                    <small>Team Members</small>

                    <table className="TeamTable">
                      <tr>
                        <th>
                          <img
                            alt=""
                            src={User}
                            style={{ marginRight: "20px" }}
                          ></img>
                          Kartikey Vaish
                        </th>
                        <td>kartikey@gmail.com</td>
                        <td>
                          <span className="LightWeight">Student Number:</span>
                          1713036
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <img
                            alt=""
                            src={User}
                            style={{ marginRight: "20px" }}
                          ></img>
                          Manvi Srivastava
                        </th>
                        <td>manvi@gmail.com</td>
                        <td>
                          <span className="LightWeight">Student Number:</span>
                          1713067
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <img
                            alt=""
                            src={User}
                            style={{ marginRight: "20px" }}
                          ></img>
                          Avishi Gupta
                        </th>
                        <td>avi@gmail.com</td>
                        <td>
                          <span className="LightWeight">Student Number:</span>
                          1713112
                        </td>
                      </tr>
                    </table>
                  </>
                ) : null}
              </div>
            ) : (
              <div className="ProjectUnderTakenPart">
                <h5>Project 1</h5>
                <img alt="" src={ProjectFileSvg}></img>
                <span>
                  You can choose from a list of available projects and apply for
                  it.
                </span>
                <Link to="/cube/facultydashboard/uploadprojects">
                  <p>
                    Upload Project <i className="fa fa-angle-right"></i>
                  </p>
                </Link>
              </div>
            )}

            {this.state.ProjectUploaded ? (
              <div className="ProjectUnderTakenPart">
                <h5>Project 2</h5>
                <div className="ProjectStatusLink">
                  <h3>Android Battery Saver System</h3>
                  {this.state.TeamCompleted ? (
                    <Link to="/cube/facultydashboard/projectstatus">
                      See Project Status
                    </Link>
                  ) : null}
                </div>
                <p>
                  This System is an innovative Application allowing the System to take the usage from Build-in classes and 
                  put a list in front of the user for him to review. The List also consists of the applications taking the 
                  battery usage and also determines the battery level. If the Battery level is low and the consumption of apps 
                  is more the system will trigger an alarm telling the user to force stop or close the apps. This System uses Android Studio 
                  as its front end and doesn’t use any backend as this type of application doesn’t need one since it uses the data from the 
                  phone itself and projects to the user. So basically the system helps the user to refrain certain apps to consume more 
                  battery power and drain it quickly and user can take some actions on it.
                </p>
                <small>Technology Required</small>
                <p>Java, Mysql, HTML, CSS</p>
                {this.state.TeamCompleted ? (
                  <>
                    <small>Team Members</small>

                    <table className="TeamTable">
                      <tr>
                        <th>
                          <img
                            alt=""
                            src={User}
                            style={{ marginRight: "20px" }}
                          ></img>
                          Ankur Tiwari
                        </th>
                        <td>ankur@gmail.com</td>
                        <td>
                          <span className="LightWeight">Student Number:</span>
                          1713986
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <img
                            alt=""
                            src={User}
                            style={{ marginRight: "20px" }}
                          ></img>
                          Harsh Yadav
                        </th>
                        <td>harsh@gmail.com</td>
                        <td>
                          <span className="LightWeight">Student Number:</span>
                          1713369
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <img
                            alt=""
                            src={User}
                            style={{ marginRight: "20px" }}
                          ></img>
                          Aditya Rathi
                        </th>
                        <td>aditya@gmail.com</td>
                        <td>
                          <span className="LightWeight">Student Number:</span>
                          1713005
                        </td>
                      </tr>
                    </table>
                  </>
                ) : null}
              </div>
            ) : (
              <div className="ProjectUnderTakenPart">
                <h5>Project 2</h5>
                <img alt="" src={ProjectFileSvg}></img>
                <span>
                  You can choose from a list of available projects and apply for
                  it.
                </span>
                <Link to="/cube/facultydashboard/myprojects">
                  <p>
                    Upload Project<i className="fa fa-angle-right"></i>
                  </p>
                </Link>
              </div>
            )}

            {this.state.ReviewProject ? (
              <div className="CompleteProjectPart">
                <h5>Review Project & Issue Certificate</h5>
                <h3>
                  Congratulations! You have successfully completed your Project
                  with your Teams
                </h3>
              </div>
            ) : (
              <div className="CompleteProjectPart">
                <h5>Review Project & Issue Certificate</h5>
                <img alt="" src={ProjectFileSvg}></img>
                <span>
                  Please check if you're teams have uploaded all the required
                  documents. Go to Status Page
                </span>
                <Link to="/cube/facultydashboard/workreview">
                  <p>
                    Project Status<i className="fa fa-angle-right"></i>
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

export default FacultyProfile;
