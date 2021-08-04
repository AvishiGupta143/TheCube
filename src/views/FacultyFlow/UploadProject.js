import React, { Component } from "react";
import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import "../../assets/css/FacultyStylesheets/UploadProjectPage.css";
import { Link } from "react-router-dom";

export class UploadProject extends Component {
  render() {
    return (
      <Fragment>
        <div className="UploadProjectPage">
          <div className="UploadProjectDiv">
            <small>
              <Link to="/cube/facultydashboard/welcomefaculty">
                <i className="fa fa-angle-left"></i>Back
              </Link>
            </small>
            <h3>Upload your Projects</h3>
            <p>
              Dear Faculty, you can only upload two projects of your own. Please
              fill the details below to upload your project.
            </p>
            <div className="EachUploadProj">
              <span>Project 1 Information :</span>
              <input type="text" placeholder="Enter Project Title"></input>
              <input
                type="text"
                placeholder="Technology Required (Separted by a comma ',' )"
              ></input>
              <textarea placeholder="Enter Project Description"></textarea>
              <button>Save Project</button>
            </div>
            <div className="EachUploadProj">
              <span>Project 2 Information :</span>
              <input type="text" placeholder="Enter Project Title"></input>
              <input
                type="text"
                placeholder="Technology Required (Separted by a comma ',' )"
              ></input>
              <textarea placeholder="Enter Project Description"></textarea>
              <button>Save Project</button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default UploadProject;
