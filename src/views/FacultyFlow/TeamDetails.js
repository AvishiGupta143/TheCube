import React, { Component } from "react";
import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import "../../assets/css/FacultyStylesheets/TeamDetails.css";
import User from "../../assets/css/StudentStylesheets/User.png";

export class TeamDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      TeamFormed: true,
    };
  }

  render() {
    return (
      <Fragment>
        <div className="TeamDetailsPage">
          {this.state.TeamFormed ? (
            <div className="TeamFormedPage">
              <h3>Your Teams</h3>
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

              <div className="EachTeamBlock">
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
                <small>Technology Required</small>
                <span>Java, Mysql, HTML, CSS</span>
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
                </div>
            

            </div>
          ) : (
            <TeamNotFormed />
          )}
        </div>
      </Fragment>
    );
  }
}

export default TeamDetails;

class TeamNotFormed extends Component {
  render() {
    return (
      <Fragment>
        <div className="NoTeamFormedDiv">
          <h3>No Team has been formed as of now.</h3>
        </div>
      </Fragment>
    );
  }
}
