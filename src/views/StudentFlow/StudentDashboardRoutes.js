import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import TeamFormation from "./TeamFormation";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import SelectMentor from "./SelectMentor";
import CompleteProject from "./CompleteProject";
import SubmitProject from "./SubmitProject";
import TeacherProfile from "./TeacherProfile";
import StudentProfile from "./StudentProfile";
import AllProjects from "./AllProjects";
import { TopBar } from "../Base/TopBar";
import StudentWelcome from "./StudentWelcome";
import StudentList from "../DashBoard/StudentList";
import StudentNotifications from "../Home/StudentNotifications";

export class StudentDashboardRoutes extends Component {
  render() {
    return (
      <div className="DashboardRoutesDiv">
        <TopBar />
        <Switch>
          <Route
            path={"/cube/studentdashboard/welcomestudent"}
            component={StudentWelcome}
          ></Route>
          <Route
            path={"/cube/studentdashboard/studentlist"}
            component={StudentList}
          ></Route>
          <Route
            path="/cube/studentdashboard/notifications"
            component={StudentNotifications}
          ></Route>
          <Route
            path="/cube/studentdashboard/TeamFormation"
            component={TeamFormation}
          ></Route>
          <Route
            path="/cube/studentdashboard/StudentProfile"
            component={StudentProfile}
          ></Route>
          <Route
            path="/cube/studentdashboard/SelectMentor"
            component={SelectMentor}
          ></Route>
          <Route
            path="/cube/studentdashboard/MentorProfile"
            component={TeacherProfile}
          ></Route>
          <Route
            path="/cube/studentdashboard/AllProjects"
            component={AllProjects}
          ></Route>
          <Route
            path="/cube/studentdashboard/CompleteProject"
            component={CompleteProject}
          ></Route>
          <Route
            path="/cube/studentdashboard/SubmitProject"
            component={SubmitProject}
          ></Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(StudentDashboardRoutes);
