import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import { Route, Switch } from "react-router-dom";
import FacultyWelcome from "./FacultyWelcome";
import FacultyNotifications from "../Home/FacultyNotifications";
import TopBarFaculty from "../Base/TopBarFaculty";
import TeamDetails from "./TeamDetails";
import FacultyProjects from "./FacultyProjects";
import Suggestions from "./Suggestions";
import FacultyProfile from "./FacultyProfile";
import StudentsAvailable from "./StudentsAvailable";
import StudentProfile from "./StudentProfile";
import FacultyComplete from "./FacultyComplete";
import ProjectStatusPage from "./ProjectStatusPage";
import UploadProject from "./UploadProject";
import AssignmentPage from "./AssignmentPage";

export class FacultyDashboardRoutes extends Component {
  render() {
    return (
      <div className="DashboardRoutesDiv">
        <TopBarFaculty />
        <Switch>
          <Route
            path={"/cube/facultydashboard/welcomefaculty"}
            component={FacultyWelcome}
          ></Route>
          <Route
            path={"/cube/facultydashboard/myteam"}
            component={TeamDetails}
          ></Route>
          <Route
            path={"/cube/facultydashboard/myprojects"}
            component={FacultyProjects}
          ></Route>
          <Route
            path={"/cube/facultydashboard/suggestions"}
            component={Suggestions}
          ></Route>
          <Route
            path={"/cube/facultydashboard/uploadprojects"}
            component={UploadProject}
          ></Route>
          <Route
            path={"/cube/facultydashboard/profile"}
            component={FacultyProfile}
          ></Route>
          <Route
            path={"/cube/facultydashboard/workreview"}
            component={FacultyComplete}
          ></Route>
          <Route
            path={"/cube/facultydashboard/projectstatus"}
            component={ProjectStatusPage}
          ></Route>
          <Route
            path={"/cube/facultydashboard/assignment"}
            component={AssignmentPage}
          ></Route>
          <Route
            path={"/cube/facultydashboard/viewsuggestedproject"}
            component={StudentProfile}
          ></Route>
          <Route
            path={"/cube/facultydashboard/allstudents"}
            component={StudentsAvailable}
          ></Route>
          <Route
            path={"/cube/facultydashboard/notifications"}
            component={FacultyNotifications}
          ></Route>
        </Switch>
      </div>
    );
  }
}

export default FacultyDashboardRoutes;
