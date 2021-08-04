import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import "../../assets/css/FacultyStylesheets/AssignmentPage.css";
import PDFVector from "../../assets/css/FacultyStylesheets/PDFVector.svg";
import { Link } from "react-router-dom";

export class AssignmentPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      PentoolClicked: false,
    };
  }

  AddMarks = () => {
    var H3 = document.getElementById("ObtMark");
    var InputBox = document.getElementById("inputMark");
    H3.style.display = "none";
    InputBox.style.display = "inherit";
  };

  render() {
    return (
      <Fragment>
        <div className="AssignmentPAGE">
          <div className="AssignmentSideNav">
            <small>
              <Link to="/cube/facultydashboard/projectstatus">
                <i className="fa fa-angle-left"></i>Back
              </Link>
            </small>
            <h3>SRS and SDD Presentation</h3>
            <p>Secure Online Auction System</p>
            <h5>Assignment Description</h5>
            <span>
              Carefully analyze, research, ideate the chosen topic and complete
              the Software Requirements Specifications and Software Diagrams.
            </span>
          </div>
          <div className="AssignmentContent">
            <div className="EachCardBox">
              <span>Due Date</span>
              <p>29 Oct, 2020</p>
            </div>
            <div className="EachCardBox">
              <span>Status</span>
              <p className="YELLOWCOLOR">Submitted</p>
            </div>
            <div className="EachCardBox">
              <span>Assignment</span>
              <div className="AsisgnmentPDFDiv">
                <img style={{ marginRight: "10px" }} alt="" src={PDFVector}></img>
                <div className="PDFName">
                  <span>final_synopsis.pdf</span>
                  <small>24 KB</small>
                </div>
              </div>
            </div>

            <div className="MarksDivision">
              <div className="MarkBlock">
                <p>Marks Obtained</p>
                <h3 id="ObtMark">
                  -
                  <svg
                    // onClick={this.AddMarks}
                    className="pentool"
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.3387 2.49981C16.6014 2.23717 16.9132 2.02883 17.2564 1.88669C17.5995 
                                    1.74455 17.9673 1.67139 18.3387 1.67139C18.7102 1.67139 19.078 1.74455 19.4211 
                                    1.88669C19.7643 2.02883 20.0761 2.23717 20.3387 2.49981C20.6014 2.76246 20.8097 
                                    3.07426 20.9519 3.41742C21.094 3.76058 21.1672 4.12838 21.1672 4.49981C21.1672 
                                    4.87125 21.094 5.23905 20.9519 5.58221C20.8097 5.92537 20.6014 6.23717 20.3387 
                                    6.49981L6.83875 19.9998L1.33875 21.4998L2.83875 15.9998L16.3387 2.49981Z"
                      stroke="#ED383F"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </h3>
              </div>
              <div className="MarkBlock">
                <p>Total Marks</p>
                <h3>50</h3>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AssignmentPage;
