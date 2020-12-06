import React, { Component, Fragment } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import StudentSideNav from './StudentSideNav'
import TeamFormation from './TeamFormation'
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import "../../assets/css/StudentDashboard.css";
import SelectMentor from './SelectMentor';
import CompleteProject from './CompleteProject';
import SubmitProject from './SubmitProject';
import TeacherProfile from './TeacherProfile';
import StudentProfile from './StudentProfile';
import AllProjects from './AllProjects';

export class StudentDashboardRoutes extends Component {
    render() {
        return (
            <div className='DashboardRoutesDiv'>
                <Switch>
                    <Route path="/cube/studentdashboard/TeamFormation" component={TeamFormation}></Route>
                    <Route path="/cube/studentdashboard/StudentProfile" component={StudentProfile}></Route>
                    <Route path="/cube/studentdashboard/SelectMentor" component={SelectMentor}></Route>
                    <Route path="/cube/studentdashboard/MentorProfile" component={TeacherProfile}></Route>
                    <Route path="/cube/studentdashboard/AllProjects" component={AllProjects}></Route>
                    <Route path="/cube/studentdashboard/CompleteProject" component={CompleteProject}></Route>
                    <Route path="/cube/studentdashboard/SubmitProject" component={SubmitProject}></Route>
                </Switch>
            </div>
        )
    }
}

export default withRouter(StudentDashboardRoutes)
