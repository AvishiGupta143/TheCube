import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import "../../assets/css/StudentStylesheets/CompleteProject.css";
import PlanePic from "../../assets/css/StudentStylesheets/PlanePic.png";
import OverviewPic from "../../assets/css/StudentStylesheets/OverviewPic.png";
import User from "../../assets/css/StudentStylesheets/User.png";
import MeetingSvg from "../../assets/css/StudentStylesheets/MeetingSvg.svg";
import { Modal } from "react-bootstrap";
import { OverlayTrigger } from "react-bootstrap";
import { Tooltip } from "react-bootstrap";
import API from "../../API/API";

export class CompleteProject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      MeetingModal: false,
      EachProjectclicked: false,
      Uploaded: false,
      Completed: true,
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
        Name:response.data.User.Name.split(" ")[0],
        CurrentUserId:localStorage.getItem("CurrentUserId")
      })
    }
    else{
      console.log(response.data)
    }
  }
  
  UploadDoc = () => {
    document.getElementById("UPLOAD").click();
    this.setState({
      Uploaded: true,
      Completed: true,
    });
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

  DisplayEachProject = () => {
    this.setState({
      EachProjectclicked: true,
    });
  };
  render() {
    return (
      <Fragment>
        <div className="COMPLETEPROJECTHEAD">
          <div className="COMPLETEPROJECTINFO">
            <h3>Hi {this.state.Name},</h3>
            <p>We have few things for you to look at...</p>
          </div>

          <img alt="" src={PlanePic}></img>
        </div>

        <div className="COMPLETEPROJECTCONTENT">
          <div className="ColumnDivs">
            <div className="OverviewDiv">
              <div className="OverviewText">
                <h4>Project Overview</h4>
                <h5>Secure Online Auction System</h5>
                <p>
                  Online auction however is a different business model where the items are sold through price bidding. 
                  Usually bidding have start price and ending time. Potential buyers in auction and the winner is the one who bids the item for highest price. 
                  We treat the fraud detection with a binary classification. For buying product online user have to provide his personal details like email address, 
                  license number, PAN number etc. Only the valid user will have authority to bid. This prevents various frauds according in online shopping.
                </p>

                <h6>Technology Required</h6>
                <span>Python, Django Framework, MySQL</span>
              </div>
              <img alt="" src={OverviewPic}></img>
            </div>

            <div className="ProgressDiv">
              <h4>Track your Progress</h4>

              <table className="EachProgressBar ProjectProgressBar">
                <tr onClick={this.DisplayEachProject}>
                  <th>
                    Submit SRS and SDD
                    <br></br>
                    {this.state.EachProjectclicked ? (
                      <p className="ProjectDescriptionDetails">
                        Carefully analyze, research, ideate the chosen topic and
                        complete the Software Requirements Specifications and
                        Software Diagrams for your project. Validate the
                        documents with your faculty mentor before uploading
                        them.
                      </p>
                    ) : null}
                  </th>
                  <td>Due Date: 21 Oct, 2020</td>
                  {this.state.Completed ? (
                    <td className="GREENCOLOR">Complete</td>
                  ) : (
                    <td className="REDCOLOR">Pending </td>
                  )}
                  <td>
                    {this.state.Completed ? (
                      <i className="fa fa-check CompletedDocUpload"></i>
                    ) : (
                      <OverlayTrigger
                        key="right"
                        placement="right"
                        overlay={
                          <Tooltip id="tooltip-right">
                            Click to Upload Document
                          </Tooltip>
                        }
                      >
                        <button
                          onClick={this.UploadDoc}
                          className="MoreOptionsBtn"
                        >
                          <input
                            type="file"
                            id="UPLOAD"
                            style={{ display: "none" }}
                          ></input>
                          <i className="fa fa-ellipsis-h"></i>
                        </button>
                      </OverlayTrigger>
                    )}
                  </td>
                </tr>

                <tr>
                  <th>
                    Submit SRS and SDD Presentation
                    <br></br>
                    {this.state.EachProjectclicked ? (
                      <p className="ProjectDescriptionDetails">
                        Carefully analyze, research, ideate the chosen topic and
                        complete the Software Requirements Specifications and
                        Software Diagrams for your project. Validate the
                        documents with your faculty mentor before uploading
                        them.
                      </p>
                    ) : null}
                  </th>
                  <td>Due Date: 29 Oct, 2020</td>
                  <td className="REDCOLOR">Pending </td>
                  <td>
                    <OverlayTrigger
                      key="right"
                      placement="right"
                      overlay={
                        <Tooltip id="tooltip-right">
                          Click to Upload Document
                        </Tooltip>
                      }
                    >
                      <button
                        onClick={this.UploadDoc}
                        className="MoreOptionsBtn"
                      >
                        <input
                          type="file"
                          id="UPLOAD"
                          style={{ display: "none" }}
                        ></input>
                        <i className="fa fa-ellipsis-h"></i>
                      </button>
                    </OverlayTrigger>
                  </td>
                </tr>

                <tr>
                  <th>
                    Submit Final Synopsis
                    <br></br>
                    {this.state.EachProjectclicked ? (
                      <p className="ProjectDescriptionDetails">
                        Carefully analyze, research, ideate the chosen topic and
                        complete the Software Requirements Specifications and
                        Software Diagrams for your project. Validate the
                        documents with your faculty mentor before uploading
                        them.
                      </p>
                    ) : null}
                  </th>
                  <td>Due Date: 12 Nov, 2020</td>
                  <td className="REDCOLOR">Pending</td>
                  <td>
                    <OverlayTrigger
                      key="right"
                      placement="right"
                      overlay={
                        <Tooltip id="tooltip-right">
                          Click to Upload Document
                        </Tooltip>
                      }
                    >
                      <button
                        onClick={this.UploadDoc}
                        className="MoreOptionsBtn"
                      >
                        <input
                          type="file"
                          id="UPLOAD"
                          style={{ display: "none" }}
                        ></input>
                        <i className="fa fa-ellipsis-h"></i>
                      </button>
                    </OverlayTrigger>
                  </td>
                </tr>

                <tr>
                  <th>
                    Submit Requirement Analysis Documentation
                    <br></br>
                    {this.state.EachProjectclicked ? (
                      <p className="ProjectDescriptionDetails">
                        Carefully analyze, research, ideate the chosen topic and
                        complete the Software Requirements Specifications and
                        Software Diagrams for your project. Validate the
                        documents with your faculty mentor before uploading
                        them.
                      </p>
                    ) : null}
                  </th>
                  <td>Due Date: 29 Nov, 2020</td>
                  <td className="REDCOLOR">Pending</td>
                  <td>
                    <OverlayTrigger
                      key="right"
                      placement="right"
                      overlay={
                        <Tooltip id="tooltip-right">
                          Click to Upload Document
                        </Tooltip>
                      }
                    >
                      <button
                        onClick={this.UploadDoc}
                        className="MoreOptionsBtn"
                      >
                        <input
                          type="file"
                          id="UPLOAD"
                          style={{ display: "none" }}
                        ></input>
                        <i className="fa fa-ellipsis-h"></i>
                      </button>
                    </OverlayTrigger>
                  </td>
                </tr>

                <tr>
                  <th>
                    Submit Requirement Analysis Presentation
                    <br></br>
                    {this.state.EachProjectclicked ? (
                      <p className="ProjectDescriptionDetails">
                        Carefully analyze, research, ideate the chosen topic and
                        complete the Software Requirements Specifications and
                        Software Diagrams for your project. Validate the
                        documents with your faculty mentor before uploading
                        them.
                      </p>
                    ) : null}
                  </th>
                  <td>Due Date: 29 Dec, 2020</td>
                  <td className="REDCOLOR">Pending</td>
                  <td>
                    <OverlayTrigger
                      key="right"
                      placement="right"
                      overlay={
                        <Tooltip id="tooltip-right">
                          Click to Upload Document
                        </Tooltip>
                      }
                    >
                      <button
                        onClick={this.UploadDoc}
                        className="MoreOptionsBtn"
                      >
                        <input
                          type="file"
                          id="UPLOAD"
                          style={{ display: "none" }}
                        ></input>
                        <i className="fa fa-ellipsis-h"></i>
                      </button>
                    </OverlayTrigger>
                  </td>
                </tr>

                <tr>
                  <th>
                    Submit Presentation
                    <br></br>
                    {this.state.EachProjectclicked ? (
                      <p className="ProjectDescriptionDetails">
                        Carefully analyze, research, ideate the chosen topic and
                        complete the Software Requirements Specifications and
                        Software Diagrams for your project. Validate the
                        documents with your faculty mentor before uploading
                        them.
                      </p>
                    ) : null}
                  </th>
                  <td>Due Date: 12 Jan, 2021</td>
                  <td className="REDCOLOR">Pending</td>
                  <td>
                    <OverlayTrigger
                      key="right"
                      placement="right"
                      overlay={
                        <Tooltip id="tooltip-right">
                          Click to Upload Document
                        </Tooltip>
                      }
                    >
                      <button
                        onClick={this.UploadDoc}
                        className="MoreOptionsBtn"
                      >
                        <input
                          type="file"
                          id="UPLOAD"
                          style={{ display: "none" }}
                        ></input>
                        <i className="fa fa-ellipsis-h"></i>
                      </button>
                    </OverlayTrigger>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className="ROWDivs">
            <h4>Team Members</h4>
            <div className="TeamMembersDiv">
              <img alt="" src={User}></img>
              <span>Kartikey Vaish</span>
            </div>
            <div className="TeamMembersDiv">
              <img alt="" src={User}></img>
              <span>Manvi Srivastava</span>
            </div>
            <div className="TeamMembersDiv">
              <img alt="" src={User}></img>
              <span>Avishi Gupta</span>
            </div>

            <h4>Faculty Mentor</h4>

            <div className="TeamMembersDiv">
              <img alt="" src={User}></img>
              <div className="TeamFacultyDiv">
                <span>Ms. Shikha Baliyan</span>
                <small>Assistant Professor, IT</small>
              </div>
            </div>

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
          <Modal.Body className="MeetingModalBody">
            <p>Your Faculty</p>
            <span>Ms Shikha Baliyan</span>
            <p>Your Team Members</p>
            <span>Avishi Gupta</span>
            <span>Kartikey Vaish</span>

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

export default CompleteProject;
