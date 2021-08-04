import React, { Component } from "react";
import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import "../../assets/css/FacultyStylesheets/ProjectStatus.css";
import User from "../../assets/css/StudentStylesheets/User.png";
import PDFVector from "../../assets/css/FacultyStylesheets/PDFVector.svg";
import { Link } from "react-router-dom";

export class ProjectStatusPage extends Component {
  render() {
    return (
      <Fragment>
        <div className="ProjectStatusPage">
          <div className="ProjectStatusDiv">
            <h3>Project 1 Status</h3>
            <h5>About Project</h5>
            <div className="EachTeamBlock">
              <h5>Secure Online Auction System</h5>
              <p>
                Online auction however is a different business model where the items are sold through price bidding. 
                Usually bidding have start price and ending time. Potential buyers in auction and the winner is the one 
                who bids the item for highest price. We treat the fraud detection with a binary classification. 
                For buying product online user have to provide his personal details like email address, license number, 
                PAN number etc. Only the valid user will have authority to bid. This prevents various frauds according in 
                online shopping.
              </p>
              <small>Technology Required</small>
              <span>Python, Django Framework, MySQL</span>
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
              </div>

            <h5>Project Assignments</h5>
            <table className="ProjStatusProgressBar">
              <tr>
                <th>Secure Online Auction System</th>
                <td>
                  <span className="LightWeight">Due Date: </span>29 Oct, 2020
                </td>
                <td className="GREENCOLOR">Evaluated</td>
                <td className="FileNameColor">
                  <img
                    alt=""
                    style={{ marginRight: "10px" }}
                    src={PDFVector}
                  ></img>
                  <span>srs_sddPresentation.pdf</span>
                </td>
                <td className="LightWeight RIGHTALIGN">
                  Marks: <span className="MARKSPAN">45/50</span>
                </td>
                <td className="SmallTd">
                  <button className="ToAssignmentBtn">
                    <Link to="/cube/facultydashboard/assignment">
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </button>
                </td>
              </tr>

              <tr>
                <th>Secure Online Auction System</th>
                <td>
                  <span className="LightWeight">Due Date: </span>29 Oct, 2020
                </td>
                <td className="YELLOWCOLOR">Submitted</td>
                <td className="FileNameColor">
                  <img
                    alt=""
                    style={{ marginRight: "10px" }}
                    src={PDFVector}
                  ></img>
                  <span>final_synopsis.pdf</span>
                </td>
                <td className="LightWeight RIGHTALIGN">
                  Marks: <span className="MARKSPAN">-</span>
                </td>
                <td className="SmallTd">
                  <button className="ToAssignmentBtn">
                    <Link to="/cube/facultydashboard/assignment">
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </button>
                </td>
              </tr>

              <tr>
                <th>Secure Online Auction System</th>
                <td>
                  <span className="LightWeight">Due Date: </span>29 Oct, 2020
                </td>
                <td className="REDCOLOR">Pending</td>
                <td className="FileNameColor">
                  <img
                    alt=""
                    style={{ marginRight: "10px" }}
                    src={PDFVector}
                  ></img>
                  <span>srs_sddPresentation.pdf</span>
                </td>
                <td className="LightWeight RIGHTALIGN">
                  Marks: <span className="MARKSPAN">-</span>
                </td>
                <td className="SmallTd">
                  <button className="ToAssignmentBtn">
                    <Link to="/cube/facultydashboard/assignment">
                      <i className="fa fa-angle-right nextpagebtn"></i>
                    </Link>
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ProjectStatusPage;
