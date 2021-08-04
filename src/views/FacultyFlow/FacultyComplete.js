import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import "../../assets/css/StudentStylesheets/CompleteProject.css";
import "../../assets/css/FacultyStylesheets/FacultyComplete.css";
import PlanePic from "../../assets/css/StudentStylesheets/PlanePic.png";
import User from "../../assets/css/StudentStylesheets/User.png";
import MeetingSvg from "../../assets/css/StudentStylesheets/MeetingSvg.svg";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import API from "../../API/API";

export class FacultyComplete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      MeetingModal: false,
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
    };
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
  CloseMeetingModal = () => {
    this.setState({
      MeetingModal: false,
    });
  };

  OpenMeetingModal = () => {
    this.setState({
      MeetingModal: true,
    });
  };

  render() {
    return (
      <Fragment>
        <div className="COMPLETEPROJECTHEAD">
          <div className="COMPLETEPROJECTINFO">
            <h3>Hi Shikha Baliyan,</h3>
            <p>We have few things for you to look at...</p>
          </div>
          <img alt="" src={PlanePic}></img>
        </div>

        <div className="COMPLETEPROJECTCONTENT">
          <div className="ColumnDivsFaculty">
            <div className="SelectedProjectDiv">
              <div className="SelectedProjectText">
                <h4>Project Overview</h4>
                <h5>Secure Online Auction System</h5>
                <p>
                  Online auction however is a different business model where the items are sold through price bidding. 
                  Usually bidding have start price and ending time. Potential buyers in auction and the winner is the one 
                  who bids the item for highest price. We treat the fraud detection with a binary classification. 
                  For buying product online user have to provide his personal details like email address, license number, 
                  PAN number etc. Only the valid user will have authority to bid. This prevents various frauds according in 
                  online shopping.
                </p>

                <h6>Technology Required</h6>
                <span>Python, Django Framework, MySQL</span>
                <Link to="/cube/facultydashboard/projectstatus">
                  See Project Status
                </Link>
              </div>

              <div className="SelectedProjectText">
                <h4>Team Members</h4>
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
                        <td>
                          <span className="LightWeight">Student Number:</span>
                          1713112
                        </td>
                      </tr>
                    </table>
                  </div>
            </div>

            <div className="SelectedProjectDiv">
              <div className="SelectedProjectText">
                <h4>Project Overview</h4>
                <h5>Android Battery Saver System</h5>
                <p>
                  This System is an innovative Application allowing the System to take the usage from Build-in classes and 
                  put a list in front of the user for him to review. The List also consists of the applications taking the 
                  battery usage and also determines the battery level. If the Battery level is low and the consumption of apps 
                  is more the system will trigger an alarm telling the user to force stop or close the apps. This System uses Android Studio 
                  as its front end and doesn’t use any backend as this type of application doesn’t need one since it uses the data from the 
                  phone itself and projects to the user. So basically the system helps the user to refrain certain apps to consume more 
                  battery power and drain it quickly and user can take some actions on it.
                </p>

                <h6>Technology Required</h6>
                <span>Java, Mysql, HTML, CSS</span>
                <Link to="/cube/facultydashboard/projectstatus">
                  See Project Status
                </Link>
              </div>

              <div className="SelectedProjectText">
                <h4>Team Members</h4>
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
                          Harsh Yadav
                        </th>
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
                          Aditya Rathi
                        </th>
                        <td>
                          <span className="LightWeight">Student Number:</span>
                          1713112
                        </td>
                      </tr>
                    </table></div>
            </div>
          </div>
          <div className="ROWDivsFaculty">
            <h4>Schedule a Meeting</h4>
            <span>
              Interact with your student teams to know their Progress in their
              projects. Solve their queries by a simple click.
            </span>
            <div className="MeetingDiv">
              <img alt="" src={MeetingSvg}></img>
              <p>
                You can schedule a meeting with your mentor and team members to
                have discussions about your project!
              </p>
              <button onClick={this.OpenMeetingModal}>
                Schedule a Meeting
              </button>
            </div>
          </div>
        </div>

        <Modal
          backdrop="static"
          size="md"
          keyboard={false}
          className="MeetingModal"
          show={this.state.MeetingModal}
          onHide={this.CloseMeetingModal}
        >
          <Modal.Header className="MeetingModalHead">
            <h3>Schedule a Meeting</h3>
            <button
              className="SuggestModalClose"
              onClick={this.CloseMeetingModal}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.6699 6.05078L6.66992 18.0508"
                  stroke="#ED383F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.66992 6.05078L18.6699 18.0508"
                  stroke="#ED383F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </Modal.Header>
          <Modal.Body className="FacultyMeetingModalBody">
            <p>Name</p>
            <span>Ms Shikha Baliyan</span>
            <div className="ChooseTeam">
              <p>Choose your Team</p>
              <div className="EachTeamChoice">
                <input type="radio"></input>
                <span>Team 1</span>
                <p>Kartikey Vaish</p>
                <p>Manvi Srivastava</p>
                <p>Avishi Gupta</p>
              </div>
              <div className="EachTeamChoice">
                <input type="radio"></input>
                <span>Team 2</span>
                <p>Ankur Tiwari</p>
                <p>Harsh Yadav</p>
                <p>Aditya Rathi</p>
              </div>
            </div>
            <input type="date" placeholder="MEETING DATE(dd/mm/yyyy)"></input>
            <input
              type="time"
              placeholder="MEETING TIME(24 hours format)"
            ></input>

            <textarea placeholder="PURPOSE OF MEETING"></textarea>

            <button onClick={this.CloseMeetingModal}>Send Meeting Request</button>
          </Modal.Body>
        </Modal>
      </Fragment>
    );
  }
}

export default FacultyComplete;
