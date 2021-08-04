import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import "../../assets/css/StudentStylesheets/TeamPage.css";
import { Modal } from "react-bootstrap";
import API from "../../API/API";
import { Link } from "react-router-dom";

export class TeamFormation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      CurrentUserId:null,
      ShowSuccessModal: false,
      ShowWarning:false,
      StudentsList:[],
      Request_Sent_To:[],
      Proposed_Leader:"",
      Proposed_TName:"",
      SelectStudent:false
    };
  }

  componentDidMount(){
    this.GetAllStudents()
    this.GetCurrentUser()
  }

  GetCurrentUser = async () => {
    var id = localStorage.getItem("CurrentUserId");
    const response = await API.GetEachUser(id);
    if (response.ok) {
      this.setState({
        Proposed_TName:"Team "+response.data.User.Name.split(" ")[0],
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
  CloseWarningModal = () => {
    this.setState({
      ShowWarning: false,
    });
  };
  OpenWarningModal = () => {
    this.setState({
      ShowWarning: true,
    });
  };
  CloseSuccessModal = () => {
    this.setState({
      ShowSuccessModal: false,
    });
  };
  OpenSuccessModal = () => {
    this.setState({
      ShowSuccessModal: true,
    });
  };
  handleSelection = (x,i) =>{
    var Request_Sent_To = this.state.Request_Sent_To
    this.setState({
      SelectStudent:true
    })
    if (Request_Sent_To.length >= 2) {
      this.setState({
        ShowWarning: true,
      })
      if (Request_Sent_To.includes(x._id) && this.state.SelectStudent) {
        Request_Sent_To.pop(x._id)
      }
    }
    else{
      if (Request_Sent_To.includes(x._id) && this.state.SelectStudent) {
        Request_Sent_To.pop(x._id)
      } else {
        Request_Sent_To.push(x._id)
      }
    }
    console.log(this.state.Request_Sent_To)
  }
  SendTeamRequestHandle = async () => {
    var Data = {
      Proposed_Leader:localStorage.getItem("CurrentUserId"),
      Proposed_TName : this.state.Proposed_TName,
      Request_Sent_To : this.state.Request_Sent_To
    }
    const response = await API.SendTeamRequests(Data);
    if (response.ok) {
      this.OpenSuccessModal()
    } else {
      console.log("Error");
    }
  }

  render() {
    return (
      <Fragment>
        <div className="TeamPage">
          <div className="TeamProcessFlow">
            <h4>Find your Team Members</h4>
          </div>
          <p>
            Given below is a list of all the Students. You can select minimum 2
            and maximum 3 students in your Team (including yourself). If you
            have already formed your team then <span>Click here</span> to
            proceed to select your Mentor.
          </p>
          <table className="TeamMemberTable">
            <thead>
              <th></th>
              <th>NAME</th>
              <th>STUDENT NUMBER</th>
              <th>EMAIL ID</th>
              <th>AVAILIBILITY</th>
            </thead>

            {this.state.StudentsList.map((id, val) =>
              <tr>
              <td><input 
              disabled={id.Availibility ? false : true}
              value={id._id}
              onChange={(e) => this.handleSelection(id,val)}
              className="BlockedCheck"
              type="checkbox"></input></td>
              <td className="STUDENTNAME">{id.Name}</td>
              <td>{id.StudentNumber}</td>
              <td>{id.Email}</td>
              <td className={id.Availibility ? "GREENCOLOR" : "REDCOLOR"}>{id.Availibility ? "Available" : "Unavailable"}</td>
            </tr>
            )}
          </table>

          <button onClick={this.SendTeamRequestHandle}>
            Send Invite to Team Up
          </button>
        </div>

        <Modal
          backdrop="static"
          keyboard={false}
          className="SuccessModal"
          show={this.state.ShowSuccessModal}
          onHide={this.CloseSuccessModal}
        >
          <button
            className="CLOSESUCCESSMODAL"
            onClick={this.CloseSuccessModal}
          >
            <i className="fa fa-close"></i>
          </button>
          <Modal.Body className="SuccessModalBody">
            <h3>Request sent for Team Formation</h3>
            <p>
              You have Successfully sent a request to form a Team with the
              selected students. Please wait for them to acknowlegde your
              request.
            </p>

            <button><Link to="/cube/studentdashboard/welcomestudent">Okay</Link></button>
          </Modal.Body>
        </Modal>

        <Modal
          backdrop="static"
          keyboard={false}
          className="SuccessModal"
          show={this.state.ShowWarning}
          onHide={this.OpenWarningModal}
        >
          <button
            className="CLOSESUCCESSMODAL"
            onClick={this.CloseWarningModal}
          >
            <i className="fa fa-close"></i>
          </button>
          <Modal.Body className="SuccessModalBody">
            <h3>Maximum Team Size Warning</h3>
            <p>
              You can only have a team of size 3, inlcuding yourself.
            </p>
            <button onClick={this.CloseWarningModal}>Okay</button>
          </Modal.Body>
        </Modal>
      </Fragment>
    );
  }
}

export default TeamFormation;
