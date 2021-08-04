import React, { Component } from "react";
import { Fragment } from "react";
import User from "../../assets/css/StudentStylesheets/User.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import "../../assets/css/FacultyStylesheets/TeamDetails.css";
import { Link } from "react-router-dom";

export class StudentProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Accepted: false,
      Declined: false,
    };
  }

  DeclineProject = () => {
    this.setState({
      Accepted: false,
      Declined: true,
    });
  };
  AcceptProject = () => {
    this.setState({
      Accepted: true,
      Declined: false,
    });
  };

  render() {
    return (
      <Fragment>
        <div className="TeamDetailsPage">
          <div className="TeamFormedPage">
            <small>
              <Link to="/cube/facultydashboard/suggestions">
                <i className="fa fa-angle-left"></i>Back
              </Link>
            </small>
            <h3>Details of Suggested Project</h3>
            <div className="EachTeamBlock">
              <h5>Android Task Monitoring</h5>
              <p>
                Modern day-to-day life of people in major cities is very demanding and the schedules are equally hectic. 
                In such times, it is practically impossible to keep a track of all the activities/ appointments. Many a times, 
                it happens that we may miss an important task; for example: taking medicines, attending a meeting, 
                returning library books, paying the bills etc. And this cycle can keep going on endlessly. The human mind is not 
                designed to multitask, it needs to work things out one at a time. This requires us to maintain our focus on the task at hand, 
                and as a result other important things take a backstage and some may even slip out of our minds. In order to address this problem, 
                we have come up with a Weekly Task Alerting System.
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
                    <span className="LightWeight">Student Number:</span>1713963
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
                    <span className="LightWeight">Student Number:</span>1713112
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
                    <span className="LightWeight">Student Number:</span>1713067
                  </td>
                </tr>
              </table>

              {this.state.Accepted || this.state.Declined ? null : (
                <div className="ActionsForSuggestionsDiv">
                  <button className="AcceptButton" onClick={this.AcceptProject}>
                    Accept
                  </button>
                  <button
                    className="DeclineButton"
                    onClick={this.DeclineProject}
                  >
                    Decline
                  </button>
                </div>
              )}

              {this.state.Accepted ? (
                <button className="StatusProjectGreen">
                  <svg
                    className="CheckSvg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 10.0857V11.0057C20.9988 13.1621 20.3005 15.2604 19.0093 16.9875C17.7182 18.7147 
                                15.9033 19.9782 13.8354 20.5896C11.7674 21.201 9.55726 21.1276 7.53447 20.3803C5.51168 19.633 
                                3.78465 18.2518 2.61096 16.4428C1.43727 14.6338 0.879791 12.4938 1.02168 10.342C1.16356 8.19029 
                                1.99721 6.14205 3.39828 4.5028C4.79935 2.86354 6.69279 1.72111 8.79619 1.24587C10.8996 0.770634 
                                13.1003 0.988061 15.07 1.86572"
                      stroke="#209616"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21 3.00586L11 13.0159L8 10.0159"
                      stroke="#209616"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Accepted
                </button>
              ) : null}

              {this.state.Declined ? (
                <button className="StatusProjectRed">
                  <i className="fa fa-times-circle CheckSvg"></i>
                  Declined
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default StudentProfile;
